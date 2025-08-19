import type { ITheme } from "survey-core";

export const NthemeTheme: ITheme = {
  themeName: "default-contrast",
  "colorPalette": "light",
  "isPanelless": false,
  "backgroundImage": "",
  "backgroundImageFit": "cover",
  "backgroundImageAttachment": "scroll",
  "backgroundOpacity": 1,
  "cssVariables": {
    "--sjs-editorpanel-backcolor": "#F9FAFC",
    "--sjs-editorpanel-hovercolor": "#F3F5F9",
    "--sjs-questionpanel-backcolor": "#FFFFFF",
    "--sjs-questionpanel-hovercolor": "#F0F4F8",
    "--sjs-font-family": "Open Sans",
    "--sjs-font-size": "16px",
    "--sjs-corner-radius": "6px",
    "--sjs-base-unit": "8px",
    /* Page title & description */
    "--sjs-font-pagetitle-color": "#000000",
    "--sjs-font-pagedescription-color": "#737373",
    /* Shadows */
    "--sjs-shadow-small": "0px 1px 2px #00000014",
    "--sjs-shadow-medium": "0px 3px 6px #0000001A",
    "--sjs-shadow-large": "0px 8px 16px #0000001F",
    "--sjs-shadow-inner": "inset 0px 1px 2px #00000014",
    "--sjs-shadow-small-reset": "0 0 0 #00000000",
    "--sjs-shadow-inner-reset": "inset 0 0 0 #00000000",
    /* Question text */
    "--sjs-font-questiontitle-color": "#000000",
    "--sjs-font-questiondescription-color": "#737373",
    /* Editor text */
    "--sjs-font-editorfont-color": "#000000",
    "--sjs-font-editorfont-placeholdercolor": "#737373",
    /* Borders */
    "--sjs-border-default": "#CFD8DC",
    "--sjs-border-light": "#E0E6E9",
    "--sjs-border-inside": "#CFD8DC",
    /* General colors */
    "--sjs-general-backcolor": "#FFFFFF",
    "--sjs-general-backcolor-dark": "#F8F9FB",
    "--sjs-general-backcolor-dim-light": "#F9FAFC",
    "--sjs-general-backcolor-dim-dark": "#F3F5F9",
    "--sjs-general-backcolor-dim": "#F3F5F9",
    "--sjs-general-forecolor": "#000000",
    "--sjs-general-forecolor-light": "#737373",
    "--sjs-general-dim-forecolor": "#000000",
    "--sjs-general-dim-forecolor-light": "#737373",
    /* Secondary colors (muted gray-blue) */
    "--sjs-secondary-backcolor": "#607D8B",
    "--sjs-secondary-backcolor-light": "#607d8b1A",
    "--sjs-secondary-backcolor-semi-light": "#607d8b40",
    "--sjs-secondary-forecolor": "#FFFFFF",
    "--sjs-secondary-forecolor-light": "#ffffff40",
    /* Primary blue scale */
    "--sjs-primary-backcolor": "#1976D2",
    "--sjs-primary-backcolor-dark": "#1565C0",
    "--sjs-primary-backcolor-light": "#E3F2FD",
    "--sjs-primary-forecolor": "#FFFFFF",
    "--sjs-primary-forecolor-light": "#ffffff40",
    /* Special colors */
    "--sjs-special-blue": "#1976D2",
    "--sjs-special-blue-light": "#1976d21A",
    "--sjs-special-blue-forecolor": "#FFFFFF",
    "--sjs-special-green": "#2E7D32",
    "--sjs-special-green-light": "#2e7d321A",
    "--sjs-special-green-forecolor": "#FFFFFF",
    "--sjs-special-yellow": "#FFC107",
    "--sjs-special-yellow-light": "#ffc1071A",
    "--sjs-special-yellow-forecolor": "#000000",
    "--sjs-special-red": "#E53935",
    "--sjs-special-red-light": "#e539351A",
    "--sjs-special-red-forecolor": "#FFFFFF"
  },
  "header": {
    "height": 0,
    "mobileHeight": 0,
    "inheritWidthFrom": "survey",
    "textAreaWidth": 0,
    "backgroundImageFit": "cover",
    "backgroundImageOpacity": 100,
    "overlapEnabled": false,
    "logoPositionX": "left",
    "logoPositionY": "top",
    "titlePositionX": "left",
    "titlePositionY": "bottom",
    "descriptionPositionX": "left",
    "descriptionPositionY": "bottom"
  },
  "headerView": "advanced"
};
