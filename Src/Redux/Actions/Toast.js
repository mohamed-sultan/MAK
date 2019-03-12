import { DoToast } from "../Types";
export const Toast = (ms, color, duration) => ({
  type: DoToast,
  ms,
  color,
  duration
});
