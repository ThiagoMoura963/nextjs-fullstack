import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import React from "react"
import { useTheme } from "@src/theme/ThemeProvider";

interface Textprops {
  variant?: ThemeTypographyVariants;
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'a' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  ref: any;
  className?: any;
}

const Text = React.forwardRef(({
  tag,
  styleSheet,
  variant,
  ...props
}: Textprops, ref) => {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];
  return (
    <BaseComponent
      as={tag}
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet
      }}
      ref={ref}
      {...props}
    />
  )
});

Text.defaultProps = {
  tag: 'p',
  variant: 'body2',
}

export default Text;