import element from "../elements/element.js";

export const titleComponent = async (text) => {
  const title = await element({
    className: "title",
    elementType: "p",
    text,
  });
  return title;
};

export const subTitle = async (text) => {
  const subTitle = await element({
    className: "subTitle",
    elementType: "p",
    text: text,
  });
  return subTitle;
};

export const buttonWapper = async () => {
  const buttonWapper = await element({
    className: "buttonWrapper",
    elementType: "div",
  });
  return buttonWapper;
};

export const buttonComponent = async (props, text) => {
  const className = props;
  const button = await element({
    className: className,
    elementType: "button",
    text,
  });
  return button;
};
