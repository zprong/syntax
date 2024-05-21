import { type ReactNode } from "react";
import Box from "../Box/Box";
import TabButton from "./TabButton";
import TabLink from "./TabLink";

/**
 * [Tabs](https://cambly-syntax.vercel.app/?path=/docs/components-tabs--docs) are used to organize content into different sections.
 */
export default function Tabs({
  children,
  accessibilityLabel,
}: {
  /**
   * The Tabs to display. Each Tab should be a `Tabs.Button` or a `Tabs.Link`.
   * Use `Tabs.Button` for onClicks that don't update the URL, and use `Tabs.Link` when clicking on a tab should update the URL.
   */
  children: ReactNode;
  /**
   * Accessibility label for the Tabs container.
   */
  accessibilityLabel: string;
}): JSX.Element {
  return (
    <Box
      display="flex"
      gap={8}
      dangerouslySetInlineStyle={{
        __style: {
          borderBottom: "1px solid #BEB4ABB2",
        },
      }}
      aria-label={accessibilityLabel}
    >
      {children}
    </Box>
  );
}

Tabs.Button = TabButton;
Tabs.Link = TabLink;
