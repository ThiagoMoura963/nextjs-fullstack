import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export function Footer() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x000,
        width: '100%',
        height: '7.5rem',
        paddingHorizontal: '1.5rem',
        paddingVertical: '1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Text
        variant="body2"
      >
        Desenvolvido por Thiago Moura.
      </Text>
    </Box>
  )
}