// import { bottomBarWrapper } from "../components/app/bottom.component.js";

import { bottomBarWrapper } from "../controllers/app/bottom.controller.js";
import { seciotnBody, section } from "../controllers/topbar.controller.js";

export const layoutController = async () => {
  const layoutSection = await section();
  const layoutbody = await seciotnBody();
  const layoutBottom = await bottomBarWrapper();
  layoutSection.append(layoutbody, layoutBottom);
  return layoutSection;
};
