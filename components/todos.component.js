import element from "../elements/element.js";

export const titleComponent = async (text) => {
  const section = await element({
    className: "title",
    elementType: "p",
    text,
  });
  return section;
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
