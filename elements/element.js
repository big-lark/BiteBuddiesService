const element = async (props) => {
  const className = props.className;
  const elementType = props.elementType;
  const id = props.id;
  const text = props.text;

  const kebabCase = await toKebabCase(className);
  const element = document.createElement(elementType);
  if (props.className) {
    element.setAttribute("class", kebabCase);
  }
  if (id) {
    element.setAttribute("id", id);
  }
  if (text) {
    element.textContent = text;
  }
  return element;
};

export default element;

const toKebabCase = async (text) => {
  return text
    ?.replace(/_/g, "-")
    .replace(/([A-Z])/g, "-$1")
    .replace(/^-/, "")
    .toLowerCase();
};
