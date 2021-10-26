import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #fff;
    font-size: 14px;
    color: #333;
    font-family: sans-serif;
  }

  :root{
    --pagebg: #FFF;
    --main: #78de00;
    --bglink: rgba(0, 0, 0, 0.3);
    --darkbg: #FFF;
    --lightbg: #000;
    --lighter: #444;

    --verde: #78de00;
    --white: #faf0e6;
  }
`;