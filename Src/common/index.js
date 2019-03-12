import store from "@redux";

import _Color from "./Color";

import _Constants from "./Constants";

import _Config from "./Config";

import _Icons from "./Icons";

import _Images from "./Images";

import _Languages from "./Languages";

import _Styles from "./Styles";

export const Color = _Color;
export const Constants = _Constants;
export const Config = _Config;
export const Icons = _Icons;
export const Images = _Images;
export const Languages = _Languages;
export const Styles = _Styles;
import _Device from "./Device";
export const Device = _Device;
import { withNavigation as _withNavigation } from "react-navigation";
export const withNavigation = _withNavigation;

export const Toast = (ms, color, duration) => {
  store.dispatch({
    type: "Do_Toast",
    ms,
    color,
    duration
  });
};
