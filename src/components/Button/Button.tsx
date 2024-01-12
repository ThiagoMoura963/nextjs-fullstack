import React from "react";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { ColorVariant, Variant, colorVariantButton } from "./ColorVariantButton";
import { ButtonSize, buttonSize } from "./ButtonSize";
import { useTheme } from "@src/theme/ThemeProvider";

interface ButtonProps extends ButtonBaseProps{
  children: React.ReactNode;
  fullWidth?: boolean;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
}

export default function Button({
  children,
  styleSheet,
  fullWidth,
  colorVariant,
  variant,
  size,
}: ButtonProps) {
  const theme = useTheme();

  return (
  <ButtonBase
    styleSheet={{
      alignSelf: 'flex-start',
      ...(fullWidth && {
        alignSelf: 'initial',
      }),
      ...buttonSize[size],
      ...colorVariantButton(theme, colorVariant, variant),
      ...styleSheet,
    }}
  >
    {children}
  </ButtonBase>
  )
}

Button.defaultProps = {
  variant: 'contained',
  size: 'md',
  colorVariant: 'primary',
  fullWidth: false,
}

Button.Base = ButtonBase;