const popButton = document.querySelectorAll(".left");
const wrapper = document.querySelector(".wrapper");

popButton.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("active");
  });
  if ((wrapper.style.display = "block")) {
    wrapper.style.transition = "all 0.9s ease-in-out";
  }
});
