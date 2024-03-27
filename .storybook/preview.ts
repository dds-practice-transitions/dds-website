import type { Preview } from "@storybook/react";

import "./storybook-override.scss";

import "../app/theme/theme.css";
import "../app/components/inputs/Button/button.module.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
