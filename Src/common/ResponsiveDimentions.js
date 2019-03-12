import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const responsiveHeight = h => Math.round(height * (h / 100));

export const responsiveWidth = w => Math.round(width * (w / 100));

// export const responsiveMargin = (size, factor = 0.5) =>
//   Math.round(size + (responsiveWidth(size) - size) * factor);

// export const responsivePadding = (size, factor = 0.5) =>
//   Math.round(size + (responsiveWidth(size) - size) * factor);

export const moderateScale = (size, factor = 0.5) =>
  Math.round(size + (responsiveWidth(size) - size) * factor);

export const responsiveFontSize = f =>
  Math.sqrt(height * height + width * width) * (f / 100);
