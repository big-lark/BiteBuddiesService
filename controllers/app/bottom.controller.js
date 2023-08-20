import * as bottomBarButtonComponent from "../../components/app/bottom.component.js";

export const bottomBarWrapper = async () => {
  const wrapper = await bottomBarButtonComponent.bottomBarWrapper();

  const friendCard = await bottomBarButton("bottom_bar_friend");
  const restaurant = await bottomBarButton("bottom_bar_restaurant");
  const chat = await bottomBarButton("bottom_bar_chat");
  const profile = await bottomBarButton("bottom_bar_profile");

  const friendCardWrapper = await bottomBarButtonWrapper();
  friendCardWrapper.append(friendCard);
  const restaurantWrapper = await bottomBarButtonWrapper();
  restaurantWrapper.append(restaurant);
  const chatWrapper = await bottomBarButtonWrapper();
  chatWrapper.append(chat);
  const profileWrapper = await bottomBarButtonWrapper();
  profileWrapper.append(profile);

  wrapper.append(
    friendCardWrapper,
    restaurantWrapper,
    chatWrapper,
    profileWrapper
  );
  return wrapper;
};

export const bottomBarButtonWrapper = async () => {
  const wrapper = await bottomBarButtonComponent.bottomBarButtonWrapper();

  return wrapper;
};

export const bottomBarButton = async (img) => {
  const image = await bottomBarButtonComponent.bottomBarButton();
  image.setAttribute("src", `./src/${img}.svg`);
  image.setAttribute("alt", img);
  return image;
};
