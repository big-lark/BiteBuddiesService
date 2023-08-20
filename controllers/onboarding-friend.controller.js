import * as onboardingComponent from "../components/onboarding.component.js";
import { renderMainAppView } from "../views/app/main.view.js";

export const articleWrapper = async () => {
  const wrapper = await onboardingComponent.articleWrapper();
  const friends = await article("friends");

  wrapper.append(friends);

  return wrapper;
};
export const article = async (image) => {
  const article = await onboardingComponent.articleImage();
  article.setAttribute("src", `../src/${image}.svg`);
  return article;
};

export const articleTitle = async () => {
  const Title = await onboardingComponent.articleTitle("Searching match");

  return Title;
};
export const articleSubTitle = async () => {
  const subTitle = await onboardingComponent.articleSubTitle(
    "Based on your MBTI we will find your best match"
  );

  return subTitle;
};

export const ctaButton = async () => {
  const ctaButton = await onboardingComponent.ctaButton(
    "Access to a contact list"
  );
  ctaButton.addEventListener("click", renderMainAppView);

  return ctaButton;
};
