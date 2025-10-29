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

const renderPaginationControls = (totalJobsCount) => {
  const totalPages = Math.ceil(totalJobsCount / RESULTS_PER_PAGE);
  const paginationContainer = document.querySelector(".pagination");
  //   <a href="">&lt;</a>
  // <a class="active" href="">1</a>
  // <a href="">2</a>
  // <a href="">3</a>
  // <a href="">4</a>
  // <a href="">5</a>
  // <a href="">&gt;</a>
  paginationContainer.innerHTML = "";
  let paginationControls = [];
  for (let i = 0; i < totalPages; i++) {
    paginationControls.push(`<a href="">${i + 1}</a>`);
  }
  paginationControls.unshift('<a href="">&lt;</a>');
  paginationControls.push('<a href="">&gt;</a>');
  paginationControls.map((pControl) => {
    // paginationContainer.appendChild(pControl);
    console.log(pControl);
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
    fetchJobs().then((res) => {
      jobs = res;
      renderJobs(1);
      // console.log(jobs.length);
      renderPaginationControls(jobs.length);
    });

    const params = new URLSearchParams(window.location.search);
    const search = params.get("search");
    const searchBar = document.getElementById("job-search-bar");
    if (search && searchBar) {
      searchBar.value = decodeURIComponent(search);
    }
  }
});

// Pagination
