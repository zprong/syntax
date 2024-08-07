import { type ComponentProps, forwardRef } from "react";
import Icon from "../../../syntax-core/src/Icon/Icon";
const Type = forwardRef<
  SVGSVGElement,
  Omit<ComponentProps<typeof Icon>, "path">
>(({ color, size }, ref) => {
  const path =
    "M21.077 8.255A3.56 3.56 0 0 0 18.25 6.9c-1.07 0-2.05.407-2.758 1.147-.63.658-.992 1.516-.992 2.353h2c0-.523.513-1.5 1.75-1.5.518 0 .944.204 1.268.607.302.376.482.897.482 1.393v.575c-.776 0-1.825.046-3 .25-2 .348-3 1.558-3 3.175s1.045 3 3 3 2.698-.701 3-1v1h2v-7c0-.95-.336-1.915-.923-2.645m-3.502 7.855c-.657 0-1.075-.548-1.075-1.093 0-.407.088-1.121 1-1.517.738-.32 1.861-.3 2.5-.3v1.2c-.238.922-1.078 1.71-2.425 1.71M8.5 4.9h-2L2 17.9h2l1.4-4h4.2l1.4 4h2zm-2.4 7 1.4-4 1.4 4z";
  return <Icon ref={ref} path={path} color={color} size={size} />;
});
Type.displayName = "Type";
export default Type;
