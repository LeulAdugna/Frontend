const textareaEl = document.getElementById("textarea");
const totalCounterE1 = document.getElementById("total-counter");
const remainingCounterE1 = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCounterE1.innerText = textareaEl.value.length;
  remainingCounterE1.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
