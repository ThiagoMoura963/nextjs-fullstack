import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import React from "react"
import { useTheme } from "@src/theme/ThemeProvider";

interface Textprops {
  variant?: ThemeTypographyVariants;
  tag?: 'p' | 'li' | 'h1' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

export default function Text({
  styleSheet,
  variant,
  ...props
}: Textprops) {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];
  return (
    <BaseComponent
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet
      }}
      {...props}
    />
  )
}

Text.defaultProps = {
  tag: 'p',
  variant: 'body2',
}