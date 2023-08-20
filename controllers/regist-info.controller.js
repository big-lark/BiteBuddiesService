import * as registComponent from "../components/regist-common.component.js";
import { selecMark } from "../function/selectMark.js";
import { renderRegistMbtiView } from "../views/regist-mbti.view.js";

export const title = async () => {
  const title = await registComponent.titleComponent("Your info");
  return title;
};

export const buttonWrapper = async () => {
  const buttonWrapper = await registComponent.buttonWapper();
  const womanButton = await womanBtn();
  const manButton = await manBtn();
  buttonWrapper.append(womanButton, manButton);
  return buttonWrapper;
};

export const womanBtn = async () => {
  const className = "selectBtn";
  const button = await registComponent.buttonComponent(className, "Woman");
  button.addEventListener("click", selecMark);
  return button;
};
export const manBtn = async () => {
  const className = "selectBtn";
  const button = await registComponent.buttonComponent(className, "Man");
  button.addEventListener("click", selecMark);
  return button;
};

export const ctaBtn = async () => {
  const buttonWrapper = await registComponent.buttonWapper();
  const className = "customerInfoCtaBtn";
  const button = await registComponent.buttonComponent(className, "Continue");
  button.setAttribute("id", "cta");
  buttonWrapper.append(button);
  buttonWrapper.addEventListener("click", async () => {
    const mf = document.querySelector(".selected").innerText;
    console.log(mf);
    if (mf.length < 1) {
      return;
    }
    localStorage.setItem("regist-info", JSON.stringify({ mf }));
    await renderRegistMbtiView();
  });

  return buttonWrapper;
};
