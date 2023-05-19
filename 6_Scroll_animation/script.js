const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

// checkBoxes();
// function checkBoxes() {
//   // console.log(window.innerHeight);

//   const triggerBottom = (window.innerHeight / 5) * 4;

//   boxes.forEach((box) => {
//     const boxTop = box.getBoundingClientRect().top;

//     if (boxTop < triggerBottom) {
//       box.classList.add("show");
//     } else {
//       box.classList.remove("show");
//     }
//   });
// }

// function checkBoxes() {
//   // console.log(window.innerHeight);

//   const triggerTop = window.innerHeight;

//   boxes.forEach((box) => {
//     const boxTop = box.getBoundingClientRect().top;
//     boxTop + window.scrollY;
//     if (boxTop <= triggerTop) {
//       box.classList.add("show");
//     } else {
//       box.classList.remove("show");
//     }
//   });
// }
function checkBoxes() {
  // console.log(window.innerHeight);

  const triggerTop = window.innerHeight;
  // console.log(triggerTop);
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const nav = document.querySelector(".navbar");

    // const windowTop = window.getBoundingClientRect().top;
    // boxTop.scrollY;
    console.log(boxTop);
    // windowTop.scrollY;
    // console.log(windowTop);
    const triggerClass = triggerTop + boxTop;
    console.log(triggerClass);
    if (triggerTop >= triggerClass) {
      box.classList.add("show");
      nav.classList.add("active");
      nav.style.transition = "all 0.6s ease-in-out";
    } else {
      box.classList.remove("show");
      nav.classList.remove("active");
      nav.style.transition = "all 0.6s ease-in-out";
    }
  });
}
