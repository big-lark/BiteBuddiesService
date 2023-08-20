import * as mainComponent from "../../components/app/main.component.js";

export const friendsCardWrapper = async () => {
  const wrapper = await mainComponent.friendsCardWrapper();
  const card = await friendsCard();
  const textWrapper = await firendsTextWrapper();
  wrapper.append(card, textWrapper);
  return wrapper;
};

export const friendsCard = async () => {
  // const result = await fetch("https://randomuser.me/api/", {
  //   headers: { Accept: "application/json", "Content-Type": "application/json" },
  //   method: "GET",
  // }).then((e) => e.json());
  const card = await mainComponent.friendsCard();
  card.setAttribute("src", "/src/user_face.jpg");
  card.setAttribute("alt", "users");

  return card;
};

export const firendsTextWrapper = async () => {
  const wrapper = await mainComponent.friendsTextWrapper();
  const nameAndAge = await friendsNameAndAge();
  const perferences = await friendsPerferences();
  wrapper.append(nameAndAge, perferences);
  return wrapper;
};

export const friendsNameAndAge = async () => {
  const nameAndAge = await mainComponent.friendsNameAndAge("Giwon Jang, 27");
  return nameAndAge;
};

export const friendsPerferences = async () => {
  const key = localStorage.getItem("regist-perferences");
  const work = JSON.parse(key);
  const keyword = await mainComponent.friendsPerferences(
    Object.values(work.perferencesText).join()
  );
  return keyword;
};
