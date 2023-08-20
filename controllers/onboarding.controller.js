import * as onboardingComponent from "../components/onboarding.component.js";

export const articleWrapper = async () => {
  const wrapper = await onboardingComponent.articleWrapper();
  const matches = await article("match_card");
  const surprisingly = await article("surprising");
  const algorithm = await article("surprising");

  wrapper.append(matches, surprisingly, algorithm);

  return wrapper;
};
export const article = async (image) => {
  const article = await onboardingComponent.articleImage();
  article.setAttribute("src", `./src/${image}.svg`);
  return article;
};
export const articleTitle = async () => {
  const Title = await onboardingComponent.articleTitle("Matches");

  return Title;
};
export const articleSubTitle = async () => {
  const subTitle = await onboardingComponent.articleSubTitle(
    "We match you with people that want to eat the same things as you"
  );

  return subTitle;
};

export const articleNavigatorWrapper = async () => {
  const navigatorWrapper = await onboardingComponent.articleNavigatorWrapper();
  const navigatorOne = await articleNavigator();
  const navigatorTwo = await articleNavigator();
  const navigatorThree = await articleNavigator();
  navigatorWrapper.append(navigatorOne, navigatorTwo, navigatorThree);
  return navigatorWrapper;
};
export const articleNavigator = async () => {
  const navigator = await onboardingComponent.articleNavigator();

  return navigator;
};
export const ctaButton = async () => {
  const ctaButton = await onboardingComponent.ctaButton("Create an account");

  return ctaButton;
};
