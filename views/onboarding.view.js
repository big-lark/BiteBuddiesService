import { keyframesUp, options } from "../animate/animate.js";
import * as onboardingController from "../controllers/onboarding.controller.js";
import { renderCustomerInfo } from "./regist-info.view.js";

export const renderOnboardingPage = async () => {
  history.pushState({ v1: "onboarding" }, "", "onboarding");
  const target = document.querySelector(".section-body");
  target.innerHTML = "";
  const bottombar = document.querySelector(".bottom-bar-wrapper");
  bottombar.setAttribute("style", "display:none");

  const article = await onboardingController.articleWrapper();

  const title = await onboardingController.articleTitle();
  const subTitle = await onboardingController.articleSubTitle();

  const navigator = await onboardingController.articleNavigatorWrapper();

  const ctaBtn = await onboardingController.ctaButton();
  ctaBtn.addEventListener("click", renderCustomerInfo);

  target.animate(keyframesUp, options);
  target.append(article, title, subTitle, navigator, ctaBtn);
};
