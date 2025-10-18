// main search input event listener
// document.querySelector("#main-search").addEventListener("click", (e) => {
//   e.preventDefault();
//   const searchValue = document.querySelector("#main-search-bar");
//   console.log(searchValue);
// });

// main search form event listener
document.querySelector("#mainSearchForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

//searchResultsContainer event listener
document
  .querySelector(".searchResultsContainer")
  ?.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("apply-job-btn")) {
      console.log("Aplicado");
    }
  });
