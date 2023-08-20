export const selecMark = async (event) => {
  if (event.currentTarget.className == "select-btn") {
    event.currentTarget.parentNode.childNodes.forEach((e) => {
      console.log(e.classList.remove("selected"));
    });
    event.currentTarget.classList.add("selected");
  }
};

export const selecMarkDuplication = async (event) => {
  event.currentTarget.classList.toggle("selected");

  // if (event.currentTarget.className == "select-btn") {
  //   event.currentTarget.parentNode.childNodes.forEach((e) => {
  //     console.log(e.classList.remove("selected"));
  //   });
  //   event.currentTarget.classList.add("selected");
  // }
};
