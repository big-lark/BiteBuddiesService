import * as restaurantList from "../components/restaurantList.component.js";

export const restaurantMenuTitle = () => {
  const title = restaurantList.restaurantManuTitle("Restaurants");
  return title;
};

export const restaurantManuSubTitle = () => {
  const subTitle = restaurantList.restaurantManuSubTitle(
    "See the top restaurants and discounts near you"
  );
  return subTitle;
};

export const restaurantCardBox = async () => {
  const restaurantCardBox = await restaurantList.restaurantCardBox();
  const card1 = await restaurantCard();
  const card2 = await restaurantCard();
  const card3 = await restaurantCard();
  restaurantCardBox.append(card1, card2, card3);
  return restaurantCardBox;
};
export const restaurantCard = async () => {
  const restaurantCard = await restaurantList.restaurantCard();

  const Image = await restaurantImage();
  const TextWrapper = await restaurantTextWrapper();
  // const name = await restaurantName();
  // const desc = await restaurantDesc();

  restaurantCard.append(Image, TextWrapper);
  // const fragment = document.createDocumentFragment()
  return restaurantCard;
};

export const restaurantImage = async () => {
  const restaurantImage = await restaurantList.restaurantImage();
  return restaurantImage;
};
export const restaurantTextWrapper = async () => {
  const restaurantTextWrapper = await restaurantList.restaurantTextWrapper();
  const Name = await restaurantName();
  const Desc = await restaurantDesc();
  restaurantTextWrapper.append(Name, Desc);
  return restaurantTextWrapper;
};

export const restaurantName = async () => {
  const name = "X";
  const restaurantName = await restaurantList.restaurantName(name);
  return restaurantName;
};
export const restaurantDesc = async () => {
  const desc = "🤍";
  const restaurantDesc = await restaurantList.restaurantDesc(desc);
  return restaurantDesc;
};
