import type { Preview } from "@storybook/react";

import "./storybook-override.scss";

import "../app/theme/theme.css";
import "../app/components/Button/button.module.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
