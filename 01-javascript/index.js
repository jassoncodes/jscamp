import "./devjobs-element.js";

const RESULTS_PER_PAGE = 3;
let jobs = [];

/**
 * Fetchs jobs data
 * @returns jobs
 */
const fetchJobs = async () => {
  return await fetch("./data.json").then((result) => result.json());
};

/**
 * Formats jobs data into <article> elements
 * @param {json} jobsData jobs list
 * @returns jobs articles elements
 */
const fortmatJobsArticle = (jobsData) => {
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
          <article>
            <h3>${job.titulo}</h3>
            <span>${jobDataTech}</span>
            <span>${job.ubicacion}</span>
            <p>${job.descripcion}</p>
          </article>
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

  // prepare pagination
  let startIndex = (page - 1) * RESULTS_PER_PAGE;
  let endIndex = startIndex + RESULTS_PER_PAGE;
  const jobsData = jobs.slice(startIndex, endIndex);
  const jobsToRender = fortmatJobsArticle(jobsData);
  jobsToRender.map((job) => {
    jobsContainer.appendChild(job);
  });
};

/**
 * Renders pagination controls
 * @param {int} totalJobsCount
 */
const renderPaginationControls = (totalJobsCount) => {
  const totalPages = Math.ceil(totalJobsCount / RESULTS_PER_PAGE);
  const paginationContainer = document.querySelector(".pagination");
  paginationContainer.innerHTML = "";
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
  paginationControls.unshift(prevPageControl);

  const nextPageControl = document.createElement("a");
  nextPageControl.href = "#";
  prevPageControl.id = "nextPage";
  nextPageControl.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>`;
  paginationControls.push(nextPageControl);

  paginationControls.map((pControl) => {
    paginationContainer.appendChild(pControl);
  });
};

const activePage = (pageNumber) => {
  const paginationControls = document.querySelectorAll(".paginationControl");
  paginationControls.forEach((pControl) => {
    pControl.classList.toggle(
      "active",
      (pageNumber === pControl.innerText) === true
    );
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
    console.log(job.getAttribute("data-tech").includes(filter));
    const isShown =
      filter === "" ||
      filter === job.getAttribute("data-modalidad") ||
      job.getAttribute("data-tech").includes(filter) ||
      filter === job.getAttribute("data-nivel");
    job.classList.toggle("is-hidden", isShown === false);
  });
};

const jobSearchForm = document.querySelector("#jobs-search-form");

//search results page form event listener
jobSearchForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  jobSearchForm.submit();
});

//search results page filters event listener
document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("change", (e) => {
    e.preventDefault();
    filterJobs(e.target.value);
    // jobSearchForm.submit();
  });
});

//search result page content load event listener
document.addEventListener("DOMContentLoaded", () => {
  // validacion para que se ejecute solo en la pagina de search-results
  if (jobSearchForm) {
    setTimeout(() => {
      fetchJobs().then((res) => {
        jobs = res;
        renderJobs();
        renderPaginationControls(jobs.length);
        activePage("1");
      });
    }, 2500);

    const params = new URLSearchParams(window.location.search);
    const search = params.get("search");
    const searchBar = document.getElementById("job-search-bar");
    if (search && searchBar) {
      searchBar.value = decodeURIComponent(search);
    }
  }
});

//pagination
document.querySelector(".pagination").addEventListener("click", (e) => {
  e.preventDefault();
  let pageToRender = e.target.innerText;
  renderJobs(pageToRender);
  activePage(pageToRender);
});
