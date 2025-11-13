const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
    menu.classList.remove("active");
  }
});

menu
  .querySelectorAll("a")
  .forEach((link) =>
    link.addEventListener("click", () => menu.classList.remove("active"))
  );

const RESULTS_PER_PAGE = 3;

const JobApp = {
  jobs: [],
  async init() {
    const jobSearchForm = document.querySelector("#jobs-search-form");
    if (!jobSearchForm) return;

    const params = new URLSearchParams(window.location.search);
    const searchValue = params.get("search") || "";
    setTimeout(() => {
      this.getJobs(searchValue);
    }, 1500);
  },
  async getJobs(filter = "") {
    try {
      const data = await fetchJobs();

      this.jobs = filter
        ? data.filter((job) =>
            job.titulo.toLowerCase().includes(filter.toLocaleLowerCase())
          )
        : data;

      renderJobs();
      renderPaginationControls();
      activePage();
    } catch (error) {
      console.error("Error loading jobs: ", error);
    }
  },
};

/**
 * Fetchs jobs data
 * @returns jobs
 */
const fetchJobs = async () => {
  return await fetch("./data/data.json", { cache: "no-store" }).then((result) =>
    result.json()
  );
};

/**
 * Formats jobs data into <article> elements
 * @param {json} jobsData jobs list
 * @returns jobs articles elements
 */
const formatJobsArticle = (jobsData) => {
  return jobsData.map((job) => {
    //construct article
    const jobDataTech = Array.isArray(job.data.technology)
      ? job.data.technology.join(", ")
      : job.data.technology;

    const article = document.createElement("article");
    article.className = "job-card";
    article.dataset.modalidad = job.data.modalidad;
    article.dataset.tech = jobDataTech;
    article.dataset.nivel = job.data.nivel;

    article.innerHTML = `
          <div>
            <h3>${job.titulo}</h3>
            <span>${jobDataTech}</span>
            <span>${job.ubicacion}</span>
            <p>${job.descripcion}</p>
          </div>
          <button class="apply-job-btn secondary-button">Aplicar</button>
        `;
    return article;
  });
};

/**
 * Renders jobs
 * @param {*} page Page number to render
 */
const renderJobs = (page = 1) => {
  // clean jobs container
  const jobsContainer = document.querySelector(".search-results-container");
  jobsContainer.innerHTML = "";

  if (JobApp.jobs.length === 0) {
    const disclaimer = document.createElement("span");
    disclaimer.innerText = "No se han encontrado resultados";
    disclaimer.classList.add("disclaimer");
    jobsContainer.appendChild(disclaimer);
    return;
  }

  // prepare pagination
  let startIndex = (page - 1) * RESULTS_PER_PAGE;
  let endIndex = startIndex + RESULTS_PER_PAGE;

  const jobsData = JobApp.jobs.slice(startIndex, endIndex);
  const jobsToRender = formatJobsArticle(jobsData);

  const fragment = document.createDocumentFragment();

  jobsToRender.forEach((job) => {
    fragment.appendChild(job);
  });
  jobsContainer.appendChild(fragment);
};

/**
 * Renders pagination controls
 * @param {int} totalJobsCount
 */
const renderPaginationControls = () => {
  const paginationContainer = document.querySelector(".pagination");
  paginationContainer.innerHTML = "";

  if (JobApp.jobs.length === 0) return;

  const totalPages = Math.ceil(JobApp.jobs.length / RESULTS_PER_PAGE);
  let paginationControls = [];

  // creating pagination control elements
  for (let i = 0; i < totalPages; i++) {
    const paginationElement = document.createElement("a");
    paginationElement.href = "";
    paginationElement.className = "paginationControl";
    paginationElement.textContent = `${i + 1}`;

    paginationControls.push(paginationElement);
  }

  const prevPageControl = document.createElement("a");
  prevPageControl.href = "#";
  prevPageControl.id = "prevPage";
  prevPageControl.innerHTML = `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
        </svg>
  `;

  prevPageControl.addEventListener("click", handlePrevPage);
  paginationControls.unshift(prevPageControl);

  const nextPageControl = document.createElement("a");
  nextPageControl.href = "#";
  nextPageControl.id = "nextPage";
  nextPageControl.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>`;
  nextPageControl.addEventListener("click", handleNextPage);
  paginationControls.push(nextPageControl);

  paginationControls.map((pControl) => {
    paginationContainer.appendChild(pControl);
  });
};

const activePage = (pageNumber = 1) => {
  const paginationControls = document.querySelectorAll(".paginationControl");
  const totalPages = Math.ceil(JobApp.jobs.length / RESULTS_PER_PAGE);

  paginationControls.forEach((pControl) => {
    pControl.classList.toggle(
      "active",
      (pageNumber === parseInt(pControl.innerText)) === true
    );
  });

  document
    .querySelector("#prevPage")
    ?.classList.toggle("disabled", (pageNumber === 1) === true);

  document
    .querySelector("#nextPage")
    ?.classList.toggle("disabled", (pageNumber === totalPages) === true);
};

/**
 * Perform search
 * @param {string} filter
 */
const searchJobs = (filter = "") => {
  fetchJobs().then((res) => {
    if (filter) {
      const filteredJobs = res.filter((job) =>
        job.titulo.toLowerCase().includes(filter.toLocaleLowerCase())
      );
      jobs = filteredJobs;
    } else {
      jobs = res;
    }
    renderJobs();
    renderPaginationControls();
    activePage();
  });
};

// main search form event listener
const mainSearchForm = document.querySelector("#main-search-form");

mainSearchForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(mainSearchForm);
  const qry = formData.get("home-search-bar").trim();
  if (qry) {
    window.location.href = `../01-javascript/search-results.html?search=${encodeURIComponent(
      qry
    )}`;
  }
});

//search-results-container event listener for apply buttons
document
  .querySelector(".search-results-container")
  ?.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("apply-job-btn")) {
      e.target.classList.add("is-applied");
    }
  });

//filter jobs function for filters change event
const filterJobs = (filter) => {
  const jobs = document.querySelectorAll(".job-card");
  jobs.forEach((job) => {
    const isShown =
      filter === "" ||
      filter === job.getAttribute("data-modalidad") ||
      job.getAttribute("data-tech").includes(filter) ||
      filter === job.getAttribute("data-nivel");
    job.classList.toggle("is-hidden", isShown === false);
  });
};

document.querySelector("#job-search-bar")?.addEventListener("keyup", (e) => {
  e.preventDefault();

  const searchBar = document.querySelector("#job-search-bar");
  if (searchBar.value === "") {
    JobApp.getJobs();
  }
  if (searchBar.value.length >= 5) {
    JobApp.getJobs(searchBar.value);
  }
});

//search results page filters event listener
document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("change", (e) => {
    e.preventDefault();

    filterJobs(e.target.value);
  });
});

document.addEventListener("DOMContentLoaded", () => JobApp.init());

//pagination
document.querySelector(".pagination")?.addEventListener("click", (e) => {
  if (!e.target.classList.contains("paginationControl")) return;

  e.preventDefault();
  const pageToRender = parseInt(e.target.innerText);
  renderJobs(pageToRender);
  activePage(pageToRender);
});

const handleNextPage = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const current = parseInt(
    document.querySelector(".paginationControl.active")?.innerText || 1
  );
  const totalPages = Math.ceil(JobApp.jobs.length / RESULTS_PER_PAGE);
  const newPage = Math.min(totalPages, current + 1);
  renderJobs(newPage);
  activePage(newPage);
};

const handlePrevPage = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const current = parseInt(
    document.querySelector(".paginationControl.active")?.innerText || 1
  );
  const newPage = Math.max(1, current - 1);
  renderJobs(newPage);
  activePage(newPage);
};
