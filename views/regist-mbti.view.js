import { keyframesUp, options } from "../animate/animate.js";
import * as registMbtiController from "../controllers/regist-mbti.controller.js";

export const renderRegistMbtiView = async () => {
  history.pushState({ v1: "regist-mbti" }, "", "regist-mbti");
  const target = document.querySelector(".section-body");
  target.innerHTML = "";

  const title = await registMbtiController.title();
  const subTitle = await registMbtiController.subTitle();

  const button = await registMbtiController.buttonWrapper();
  const ctaButton = await registMbtiController.ctaBtn();

  target.animate(keyframesUp, options);
  target.append(title, subTitle, button, ctaButton);
};
