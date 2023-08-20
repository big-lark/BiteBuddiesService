import element from "../elements/element.js";

export const articleWrapper = async () => {
  const onboardingAarticleWrapper = await element({
    className: "onboardingArticleWrapper",
    elementType: "div",
  });
  return onboardingAarticleWrapper;
};
export const articleImage = async () => {
  const onboardingAarticle = await element({
    className: "onboardingArticle",
    elementType: "img",
  });
  return onboardingAarticle;
};

export const articleTitle = async (text) => {
  const onboardingAarticleTitle = await element({
    className: "onboardingArticleTitle",
    elementType: "p",
    text: text,
  });
  return onboardingAarticleTitle;
};

export const articleSubTitle = async (text) => {
  const onboardingAarticleSubTitle = await element({
    className: "onboardingArticleSubTitle",
    elementType: "p",
    text: text,
  });
  return onboardingAarticleSubTitle;
};

export const articleNavigatorWrapper = async () => {
  const onboardingAarticleNavigatorWrapper = await element({
    className: "onboardingArticleNavigatorWrapper",
    elementType: "div",
  });
  return onboardingAarticleNavigatorWrapper;
};

export const articleNavigator = async () => {
  const onboardingAarticleNavigator = await element({
    className: "onboardingArticleNavigator",
    elementType: "button",
  });
  return onboardingAarticleNavigator;
};

export const ctaButton = async (text) => {
  const onboardingCtaButton = await element({
    className: "onboardingCtaButton",
    elementType: "button",
    text: text,
  });
  return onboardingCtaButton;
};
