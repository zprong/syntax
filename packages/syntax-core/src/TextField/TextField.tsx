import React, {
  type ReactElement,
  type HTMLInputTypeAttribute,
  useId,
} from "react";
import classNames from "classnames";
import styles from "./TextField.module.css";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";
import useIsHydrated from "../useIsHydrated";

/**
 * [TextField](https://cambly-syntax.vercel.app/?path=/docs/components-textfield--docs) is a component that allows users to enter text.
 */
export default function TextField({
  autoComplete,
  "data-testid": dataTestId,
  disabled: disabledProp = false,
  errorText = "",
  helperText = "",
  id,
  label,
  maxLength,
  onChange,
  placeholder = "",
  type = "text",
  value = "",
  step,
}: {
  /**
   * The autocomplete attribute specifies whether or not an input field should have autocomplete enabled.
   *
   * Feel free to add new values from the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) as needed
   */
  autoComplete?: "current-password" | "new-password" | "off" | "on" | "email";
  /**
   * A data-testid to make querying for the TextField easier.
   */
  "data-testid"?: string;
  /**
   * If true, the TextField will be disabled.
   *
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * Text shown below TextField if there is an input error.
   */
  errorText?: string;
  /**
   * Informative helper text shown below TextField
   */
  helperText?: string;
  /**
   * TextField id, if not provided, a unique id will be generated
   */
  id?: string;
  /**
   * TextField visible label
   */
  label: string;
  /**
   * Maximum length of the TextField
   */
  maxLength?: number;
  /**
   * The callback to be called the input changes
   */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Optional TextField placeholder text
   */
  placeholder?: string;
  /**
   * Input type of the TextField
   *
   * See [full list of input types](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)
   */
  type?: HTMLInputTypeAttribute;
  /**
   * Value of the TextField
   */
  value: string;
  /**
   * Specified legal number intervals for an input field. Specifically for time or number. If for time, specify in milliseconds. Must be a positive value.
   */
  step?: number;
}): ReactElement {
  const isHydrated = useIsHydrated();
  const disabled = !isHydrated || disabledProp;
  const reactId = useId();
  const inputId = id ?? reactId;

  return (
    <Box
      display="flex"
      direction="column"
      gap={2}
      width="100%"
      dangerouslySetInlineStyle={{
        __style: {
          opacity: disabled ? 0.5 : 1,
        },
      }}
    >
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          <Box paddingX={1}>
            <Typography size={100} color="gray700">
              {label}
            </Typography>
          </Box>
        </label>
      )}
      <input
        autoComplete={autoComplete}
        className={classNames(styles.textfield, styles.md, styles.height, {
          [styles.inputError]: errorText,
        })}
        data-testid={dataTestId}
        disabled={disabled}
        id={inputId}
        maxLength={maxLength}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        step={step}
      />
      {(helperText || errorText) && (
        <Box paddingX={1}>
          <Typography
            size={100}
            color={errorText ? "destructive-primary" : "gray700"}
          >
            {errorText || helperText}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
