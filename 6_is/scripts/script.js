const main = document.querySelector(".js-main");

const createFace = (index) => {
  switch (index) {
    case 0:
      return "🥺";
    case 1:
      return "🤔";
    case 2:
      return "😡";
    case 3:
      return "🥶";
    case 4:
      return "🤩";
  }
};

document.querySelectorAll("a").forEach((anchorElement, index) => {
  anchorElement.addEventListener("click", (event) => {
    main.textContent = createFace(index);

    document.querySelectorAll("a").forEach((otherElement) => {
      otherElement.classList.remove("current");
    });

    anchorElement.classList.add("current");
    event.preventDefault();
  });
});

console.log("おされたぁ");
