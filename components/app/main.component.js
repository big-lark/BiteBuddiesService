import element from "../../elements/element.js";

export const friendsCardWrapper = async () => {
  const wrapper = await element({
    className: "friendsCardWrapper",
    elementType: "div",
  });
  return wrapper;
};

export const friendsCard = async () => {
  const image = await element({
    className: "friendsCard",
    elementType: "img",
  });

  return image;
};

export const friendsTextWrapper = async () => {
  const wrapper = await element({
    className: "friendsWrapper",
    elementType: "div",
  });
  return wrapper;
};

export const friendsNameAndAge = async (text) => {
  const nameAndAge = await element({
    className: "friendsName",
    elementType: "p",
    text: text,
  });
  return nameAndAge;
};

export const friendsPerferences = async (text) => {
  const keyword = await element({
    className: "friendsPerferences",
    elementType: "p",
    text: text,
  });
  return keyword;
};
