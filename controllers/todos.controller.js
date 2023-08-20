import * as mainMenuComponent from "../components/todos.component.js";
import { renderOnboardingFriends } from "../views/onboarding-friend.view.js";
import { renderRestaurantList } from "../views/restaurantList.view.js";

// export const section = async () => {
//   const seciton = await mainMenuComponent.sectionComponent();
//   return seciton;
// };

export const title = async () => {
  const title = await mainMenuComponent.titleComponent(
    "what do you want to do?"
  );
  return title;
};

export const buttonWrapper = async () => {
  const buttonWrapper = await mainMenuComponent.buttonWapper();
  return buttonWrapper;
};

export const firstManuBtn = async () => {
  const className = "firstManuBtn";
  const button = await mainMenuComponent.buttonComponent(
    className,
    "Find someone to eat with"
  );
  button.addEventListener("click", renderOnboardingFriends);
  return button;
};
export const secondManuBtn = async () => {
  const className = "Find a restaurant";
  const button = await mainMenuComponent.buttonComponent(
    className,
    "Find a restaurant"
  );
  button.addEventListener("click", renderRestaurantList);
  return button;
};
export const thirdManuBtn = async () => {
  const className = "Suprise Me!";
  const button = await mainMenuComponent.buttonComponent(
    className,
    "Suprise Me!"
  );
  return button;
};
