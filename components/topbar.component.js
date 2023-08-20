import element from "../elements/element.js";

export const sectionComponent = async () => {
  const section = await element({
    className: "section",
    elementType: "div",
  });
  return section;
};

export const topbar = async () => {
  const topbarBox = await element({
    className: "topbarBox",
    elementType: "div",
  });
  return topbarBox;
};

export const imgWrapper = async () => {
  const imgWrapper = await element({
    className: "imgWrapper",
    elementType: "div",
  });
  return imgWrapper;
};

export const backArrow = async () => {
  const backArrow = await element({
    className: "backArrow",
    elementType: "img",
  });
  backArrow.setAttribute("src", "./src/topbar_back_space.svg");
  backArrow.setAttribute("alt", "back_space");
  return backArrow;
};

export const logo = async () => {
  const logo = await element({
    className: "logo",
    elementType: "img",
  });
  logo.setAttribute("src", "./src/topbar_logo.svg");
  logo.setAttribute("alt", "logo");
  return logo;
};

export const addtionalMenu = async () => {
  const menu = await element({
    className: "menu",
    elementType: "img",
  });
  menu.setAttribute("src", "./src/topbar_filter.svg");
  menu.setAttribute("alt", "menu");
  return menu;
};

export const sectionBody = async () => {
  const section = await element({
    className: "sectionBody",
    elementType: "div",
  });
  return section;
};
