import { layoutController } from "./layout/layout.js";
import { renderOnboardingPage } from "./views/onboarding.view.js";
// import { renderMainMenu } from "./views/todos.view.js";

const root = document.querySelector("#root");
const topbar = await layoutController();
root.append(topbar);

await renderOnboardingPage();
