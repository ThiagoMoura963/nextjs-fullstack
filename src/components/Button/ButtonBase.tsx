import React from "react"
import styled from "styled-components"
import Text from "../Text/Text"
import { ThemeTypographyVariants } from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useRipple } from "react-use-ripple";
import { useRouter } from "next/router";

const StyleButton = styled(Text)<any>``;

export interface ButtonBaseProps {
  tag?: string;
  children: React.ReactNode;
  textVariant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({
  tag,
  children,
  styleSheet,
  href,
  textVariant,
  ...props
}: ButtonBaseProps) {
  const router = useRouter();
  const ref = React.useRef();
  useRipple(ref, {
    animationLength: 400,
    rippleColor: 'rgba(255, 255, 255, 0.8)',
  });

  const isLink = Boolean(href);
  tag = isLink ? 'a' : 'button';

  return (
    <StyleButton
      tag={tag}
      href={href}
      styleSheet={{
        ...styleSheet,
        colort: 'inherit',
        border: '0',
        backgroundColor: 'transparent',
        outline: '0',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
      ref={ref}
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