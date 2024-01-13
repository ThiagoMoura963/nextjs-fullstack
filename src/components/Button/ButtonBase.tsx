import React from "react"
import Text from "../Text/Text"
import styled from "styled-components"
import { useRouter } from "next/router";
import { useRipple } from "react-use-ripple";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";

const StyleButton = styled(Text)<any>``;

export interface ButtonBaseProps {
  children: React.ReactNode;
  textVariant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({
  children,
  styleSheet,
  href,
  textVariant,
  ...props
}: ButtonBaseProps) {
  const router = useRouter();
  const ref = React.useRef();
  const isLink = Boolean(href);
  const Tag = isLink ? 'a' : 'button';

  useRipple(ref, {
    animationLength: 600,
    rippleColor: 'rgba(255, 255, 255, 0.7)',
  });

  return (
    <StyleButton
      tag={Tag}
      href={href}
      ref={ref}
      styleSheet={{
        color: 'inherit',
        border: '0',
        backgroundColor: 'transparent',
        outline: '0',
        cursor: 'pointer',
        textDecoration: 'none',
        ...styleSheet,
      }}
      onClick={(event) => {
        isLink && event.preventDefault();
        isLink && router.push(href);
        !isLink && props.onClick && props.onClick(event);
      }}
      {...props}
    >
      {children}
    </StyleButton>
  )
}