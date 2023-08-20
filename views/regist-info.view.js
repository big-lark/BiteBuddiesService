import { keyframesUp, options } from "../animate/animate.js";

import * as customerInfoController from "../controllers/regist-info.controller.js";

export const renderCustomerInfo = async () => {
  history.pushState({ v1: "regist-info" }, "", "onboarding/regist-info");
  const target = document.querySelector(".section-body");
  target.innerHTML = "";
  document.querySelector(".topbar-box").setAttribute("style", "block");

  const title = await customerInfoController.title();
  const buttonWapper = await customerInfoController.buttonWrapper();

  const ctaBtn = await customerInfoController.ctaBtn();

  target.animate(keyframesUp, options);
  target.append(title, buttonWapper, ctaBtn);
};
