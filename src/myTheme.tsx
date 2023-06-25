import { extendTheme } from "@chakra-ui/react";

const myTheme = extendTheme({
  breakpoints: {
    "6s":"320px",
    "5s":"360px",
    "4s":"375px",
    "3s":"414px",
    "2s":"480px",
    "1s":"600px",
    "s":"768px",
    "m":"800px",
    "l":"834px",
    "1l":"1024px",
    "2l":"1366px",
    "3l":"1440px",
    "4l":"1920px",
    "5l":"2560px",
    "6l":"3840px",
  },
});

export default myTheme;
