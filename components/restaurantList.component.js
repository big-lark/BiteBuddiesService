import element from "../elements/element.js";

export const restaurantManuTitle = async (text) => {
  const restaurantManuTitle = await element({
    className: "restaurantMenuTitle",
    elementType: "p",
    text: text,
  });
  return restaurantManuTitle;
};
export const restaurantManuSubTitle = async (text) => {
  const restaurantManuTitle = await element({
    className: "restaurantMenuSubTitle",
    elementType: "p",
    text: text,
  });
  return restaurantManuTitle;
};

export const restaurantCardBox = async () => {
  const restaurantCardBox = await element({
    className: "restaurantCardBox",
    elementType: "div",
  });
  return restaurantCardBox;
};
export const restaurantCard = async () => {
  const restaurantCard = await element({
    className: "restaurantCard",
    elementType: "button",
  });
  return restaurantCard;
};
export const restaurantImage = async () => {
  const restaurantImage = await element({
    className: "restaurantImage",
    elementType: "img",
  });
  restaurantImage.setAttribute("alt", "restaurantImage");
  restaurantImage.setAttribute("src", "../src/coffeeshop.jpg");

  return restaurantImage;
};

export const restaurantTextWrapper = async () => {
  const restaurantName = await element({
    className: "restaurantTextWrapper",
    elementType: "div",
  });
  return restaurantName;
};
export const restaurantName = async (text) => {
  const restaurantName = await element({
    className: "restaurantName",
    elementType: "p",
    text,
  });
  return restaurantName;
};
export const restaurantDesc = async (text) => {
  const restaurantDesc = await element({
    className: "restaurantDesc",
    elementType: "p",
    text,
  });
  return restaurantDesc;
};
