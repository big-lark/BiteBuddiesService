import * as registComponent from "../components/regist-common.component.js";
import { selecMarkDuplication } from "../function/selectMark.js";
import { renderTodos } from "../views/todos.view.js";

export const title = async () => {
  const title = registComponent.titleComponent("Your food preferences");
  return title;
};

export const subTitle = async () => {
  const subTitle = registComponent.subTitle(
    "Select a few of your food preferences and let everyone know what you want to eat."
  );
  return subTitle;
};

export const buttonWrapper = async () => {
  const wrapper = await registComponent.buttonWapper();
  const chicken = await button("select-btn", "Chicken");
  const beef = await button("select-btn", "Beef");
  const western = await button("select-btn", "Western");
  const korean = await button("select-btn", "Korean");
  const chinese = await button("select-btn", "Chinese");
  const snack = await button("select-btn", "Snack");
  const coffee = await button("select-btn", "Coffee");
  const drink = await button("select-btn", "Drink");
  wrapper.append(chicken, beef, western, korean, chinese, snack, coffee, drink);

  // const fragment = document.createDocumentFragment();
  // fragment.append(eAndIwrapper, sAndNwrapper, tAndFwrapper, jAndPwrapper);
  return wrapper;
};

export const button = async (className, text) => {
  const button = await registComponent.buttonComponent(className, text);
  button.setAttribute("id", "preferences");
  button.addEventListener("click", selecMarkDuplication);
  return button;
};

export const ctaBtn = async () => {
  const buttonWrapper = await registComponent.buttonWapper();
  const className = "customerMbtiCtaBtn";
  const button = await registComponent.buttonComponent(className, "Continue");
  button.setAttribute("id", "cta");
  buttonWrapper.append(button);
  buttonWrapper.addEventListener("click", async () => {
    const perferences = document.querySelectorAll(".selected");
    if (perferences.length < 1) {
      return;
    }
    const perferencesText = [];
    perferences.forEach((e) => {
      perferencesText.push(e.innerText);
    });

    localStorage.setItem(
      "regist-perferences",
      JSON.stringify({ perferencesText: { ...perferencesText } })
    );
    await renderTodos();
  });
  return buttonWrapper;
};
