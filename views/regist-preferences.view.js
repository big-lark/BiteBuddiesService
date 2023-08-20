import { keyframesUp, options } from "../animate/animate.js";
import * as registPreferencesController from "../controllers/regist-preferences.controller.js";

export const renderRegistPreferencesView = async () => {
  history.pushState({ v1: "regist-preferences" }, "", "regist-preferences");
  const target = document.querySelector(".section-body");
  target.innerHTML = "";

  const title = await registPreferencesController.title();
  const subTitle = await registPreferencesController.subTitle();

  const button = await registPreferencesController.buttonWrapper();
  const ctaButton = await registPreferencesController.ctaBtn();

  target.animate(keyframesUp, options);
  target.append(title, subTitle, button, ctaButton);
};
