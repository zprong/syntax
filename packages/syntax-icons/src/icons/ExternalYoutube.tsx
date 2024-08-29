import { type ComponentProps, forwardRef } from "react";
import Icon from "../../../syntax-core/src/Icon/Icon";
const ExternalYoutube = forwardRef<
  SVGSVGElement,
  Omit<ComponentProps<typeof Icon>, "path">
>(({ color, size }, ref) => {
  const path =
    "M21.8 8.442s-.195-1.38-.796-1.985c-.762-.796-1.613-.8-2.004-.847-2.797-.203-6.996-.203-6.996-.203h-.008s-4.2 0-6.996.203c-.39.047-1.242.05-2.004.847-.601.606-.793 1.985-.793 1.985S2 10.062 2 11.68v1.516c0 1.617.2 3.238.2 3.238s.195 1.379.792 1.984c.762.797 1.762.77 2.207.856 1.602.152 6.801.2 6.801.2s4.203-.009 7-.208c.39-.047 1.242-.05 2.004-.848.601-.605.797-1.984.797-1.984S22 14.817 22 13.196V11.68c0-1.617-.2-3.238-.2-3.238M9.935 15.036V9.414l5.402 2.82z";
  return <Icon ref={ref} path={path} color={color} size={size} />;
});
ExternalYoutube.displayName = "ExternalYoutube";
export default ExternalYoutube;