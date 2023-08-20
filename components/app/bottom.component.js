import element from "../../elements/element.js";

export const bottomBarWrapper = async () => {
  const wrapper = await element({
    className: "bottomBarWrapper",
    elementType: "div",
  });
  return wrapper;
};

export const bottomBarButtonWrapper = async () => {
  const wrapper = await element({
    className: "bottomBarButtonWrapper",
    elementType: "div",
  });

  return wrapper;
};

export const bottomBarButton = async () => {
  const image = await element({
    className: "bottomBarButton",
    elementType: "img",
  });
  return image;
};
