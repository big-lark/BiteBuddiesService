import { keyframesUp, options } from "../../animate/animate.js";
import * as mainConroller from "../../controllers/app/main.controller.js";

export const renderMainAppView = async () => {
  history.pushState({ v1: "main" }, "", "onboarding/main");
  const target = document.querySelector(".section-body");
  target.innerHTML = "";
  const bottombar = document.querySelector(".bottom-bar-wrapper");
  bottombar.setAttribute("style", "display:flex");

  const wrapper = await mainConroller.friendsCardWrapper();

  target.animate(keyframesUp, options);
  target.append(wrapper);
};
