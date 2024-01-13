import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Menu() {
  const theme = useTheme();
  const baseSize = '2.5rem';
  return (
    <Box
      styleSheet={{
        width: '100%',
        position: 'absolute',
        top: '0',
        right: '0',
        left: '0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: '1rem',
        paddingHorizontal: '1.25rem',
        color: theme.colors.neutral.x000,
      }}
    >
      <Button.Base
        styleSheet={{
          width: baseSize,
          height: baseSize,
          backgroundColor: theme.colors.primary.x500,
          borderRadius: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          hover: {
            backgroundColor: theme.colors.primary.x400,
          },
          focus: {
            backgroundColor: theme.colors.primary.x600,
          },
        }}
      >
        <Text>
          TM
        </Text>
      </Button.Base>

      <Button.Base
        styleSheet={{
          width: baseSize,
          height: baseSize,
          borderRadius: '50%',
          backgroundColor: theme.colors.neutral.x500,
          alignItems: 'center',
          justifyContent: 'center',
          hover: {
            backgroundColor: theme.colors.primary.x400,
          },
          focus: {
            backgroundColor: theme.colors.primary.x600,
          },
        }}
      >
        <Icon name="menu"/>
      </Button.Base>
    </Box>
  )
}