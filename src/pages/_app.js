import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import {
  ColorModeContext,
  ColorModeProvider,
} from "../components/Menu/DarkModeSwitch/ColorMode";
import { CSSReset } from "../styles/CSSReset";

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  },
};

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode="light">
      {props.children}
    </ColorModeProvider>
  );
}

function MyApp({ Component, pageProps }) {
  const context = useContext(ColorModeContext);

  return (
    <ThemeProvider theme={theme[context.mode]}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  )
}
