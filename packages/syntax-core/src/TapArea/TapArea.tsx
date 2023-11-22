import React, { type ReactNode, forwardRef, useReducer } from "react";
import classNames from "classnames";
import styles from "./TapArea.module.css";
import roundingStyles from "../rounding.module.css";
import useIsHydrated from "../useIsHydrated";
import useFocusVisible from "../useFocusVisible";

type TapAreaProps = {
  /**
   * The children to be rendered inside the tap area.
   */
  children?: ReactNode;
  /**
   * The label to be used for accessibility
   */
  accessibilityLabel?: string;
  /**
   * Test id for the tap area
   */
  "data-testid"?: string;
  /**
   * If `true`, the tap area will be disabled
   *
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * If `true`, the tap area will be full width
   */
  fullWidth?: boolean;
  /**
   * The callback to be called when the tap area is clicked
   */
  onClick: (event: React.SyntheticEvent<HTMLDivElement>) => void;
  /**
   * Border radius of the tap area.
   *
   * * `none`: 0px
   * * `sm`: 8px
   * * `md`: 12px
   * * `lg`: 16px
   * * `xl`: 32px
   * * `full`: 999px
   *
   * @defaultValue "none"
   */
  rounding?: "xl" | "lg" | "md" | "sm" | "full" | "none";
  /**
   * The tab index of the tap area
   */
  tabIndex?: 0 | -1;
};

function reducer(
  state: {
    hovered: boolean;
  },
  action: {
    type: "MOUSE_ENTER" | "MOUSE_LEAVE";
  },
) {
  switch (action.type) {
    case "MOUSE_ENTER":
      return { ...state, hovered: true };
    case "MOUSE_LEAVE":
      return { ...state, hovered: false };
    default:
      return state;
  }
}

/**
 * [TapArea](https://cambly-syntax.vercel.app/?path=/docs/components-taparea--docs) allows components to be clickable and touchable in an accessible way.
 */
const TapArea = forwardRef<HTMLDivElement, TapAreaProps>(
  (
    {
      children,
      accessibilityLabel,
      "data-testid": dataTestId,
      disabled: disabledProp = false,
      fullWidth = true,
      onClick,
      rounding = "none",
      tabIndex = 0,
    }: TapAreaProps,
    ref,
  ) => {
    const isHydrated = useIsHydrated();
    const disabled = !isHydrated || disabledProp;
    const [{ hovered }, dispatch] = useReducer(reducer, {
      hovered: false,
    });
    const { isFocusVisible } = useFocusVisible();

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) =>
      !disabled ? onClick(event) : undefined;

    const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (
      event,
    ) => {
      if (disabled) return;
      if (event.key === "Enter" || event.key === " " || event.key === "Space") {
        event.preventDefault();
        onClick(event);
      }
    };

    const isHoveredOrFocussed = !disabled && (hovered || isFocusVisible);

    return (
      <div
        aria-disabled={disabled}
        aria-label={accessibilityLabel}
        className={classNames(
          styles.tapArea,
          styles[`${disabled ? "disabled" : "enabled"}`],
          fullWidth && styles.fullWidth,
          isHoveredOrFocussed && styles.hoveredOrFocussed,
        )}
        data-testid={dataTestId}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => dispatch({ type: "MOUSE_ENTER" })}
        onMouseLeave={() => dispatch({ type: "MOUSE_LEAVE" })}
        ref={ref}
        role="button"
        tabIndex={disabled ? undefined : tabIndex}
      >
        {!disabled && (hovered || isFocusVisible) && (
          <div
            className={classNames(
              styles.overlay,
              rounding !== "none" && roundingStyles[`rounding${rounding}`],
            )}
          />
        )}
        {children}
      </div>
    );
  },
);

TapArea.displayName = "TapArea";

export default TapArea;
