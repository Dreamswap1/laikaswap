import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: url(../images/egg/laikaswap-bg.jpg);
    
    img {
      height: auto;
      max-width: 100%;
    }
  }
  #laika-btn {
    background:transparent;
    color:transparent;
  }
  #laika-btn:before {
    content:url(../images/egg/LaikaSwap-title.png);
    position:absolute;
    top:0:
    left:100%;
  }
  #swap-page {
    position:relative;
    margin-top:30px;
  }
  #swap-page:before {
    content:url(../images/egg/swap-top-logo.png);
    position:absolute;
    top:0;
    margin-top:-25px;
    left:50%;
    transform:translatex(-50%);
    box-shadow:0 3px 3px #d7d7d7;
    border-radius:50px;
  }
  .ebiAUb {
    padding-top:50px;
  }
  .iMuQQP .desktop-icon, .jkkUee .desktop-icon {
    width: 350px!important;
  }
  .iMuQQP .mobile-icon, .jkkUee .mobile-icon {
    width: 42px;
  }
  .bZryuS, .jqXSbG, .bUcNKF, .btoybd, .iZzpKI, .cFHyyK, .kKcYkis, .iikJbd, #laika-price-update{
    background-color: #54bfde!important;
  }
  .lctQjQ, .SWUvA, .cNpGDU, .eNOLL, .xiYlH, .eIORCb, .ZkHOl, .DxMoL, .kbxvML, .fwlukP, .kEiwmy {
    color: #54bfde;
  }
  .bRIDge, .eNpfYQ {
    display:none;
  }
  .gGTCcW, .SfwyR, .vzgrd svg, .ewCGLh, .hDQNBz svg, .hDQNBz svg, .dRSIFi, .lkvAzg, .iSwxPe {
    fill: #54bfde;
  }
  .IcZWJ:focus:not(:active) {
    box-shadow: #5c851c 0px 0px 0px 2px;
  }
  .IcZWJ {
    background-color:#5c851c;
  }
  .iIaAst, .chJTDY, .kEiwmy {
    font-size:18px;
    overflow-wrap: break-word!important;
    word-break:break-all;
}
  #swap-button, .jqXSbG, .btoybd, .cFHyyK, .kKcYki {
    font-family: 'Russo One', sans-serif;
    text-transform:uppercase;
    font-size:18px;
    font-weight:700;
  }
  @media only screen and (max-width: 960px) {
    .gHbDCl, .kbxvML {
      margin-top:10px;
    }
  }
  @media only screen and (max-width: 540px) {
    body {
      background: url(../images/egg/space.jpg);
    }
  }
`

export default GlobalStyle
