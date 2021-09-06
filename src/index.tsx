import ForgeUI, { render, Macro } from "@forge/ui";

import SignupView from "./SignupView";

export const run = render(
  <Macro app={<SignupView />} />
);
