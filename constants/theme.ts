/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

// Primary Colors
const deepTeal = "#008B8B";
const electricLime = "#CCFF00";
const charcoalGray = "#36454F";

// Accent Colors
const vibrantOrange = "#FF6B35";
const sunsetCoral = "#FF7F6A";

// Supporting Colors
const coolWhite = "#F8F9FA";
const slateGray = "#708090";
const midnightBlue = "#191970";

export const Colors = {
  // Raw color values for direct use
  deepTeal: deepTeal,
  electricLime: electricLime,
  charcoalGray: charcoalGray,
  vibrantOrange: vibrantOrange,
  sunsetCoral: sunsetCoral,
  coolWhite: coolWhite,
  slateGray: slateGray,
  midnightBlue: midnightBlue,

  light: {
    text: charcoalGray,
    background: coolWhite,
    tint: deepTeal,
    icon: slateGray,
    tabIconDefault: slateGray,
    tabIconSelected: deepTeal,
    primary: deepTeal,
    secondary: electricLime,
    accent: vibrantOrange,
    accentSecondary: sunsetCoral,
    border: slateGray,
    card: "#FFFFFF",
  },
  dark: {
    text: coolWhite,
    background: midnightBlue,
    tint: electricLime,
    icon: slateGray,
    tabIconDefault: slateGray,
    tabIconSelected: electricLime,
    primary: deepTeal,
    secondary: electricLime,
    accent: vibrantOrange,
    accentSecondary: sunsetCoral,
    border: charcoalGray,
    card: charcoalGray,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
