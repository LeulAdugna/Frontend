const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popuopContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  popuopContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  popuopContainerEl.classList.add("active");
  containerEl.classList.remove("active");
});
