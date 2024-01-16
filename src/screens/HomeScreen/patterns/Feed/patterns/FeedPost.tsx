import { useTheme } from "@src/theme/ThemeProvider";
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Link from "@src/components/Link/Link";

interface FeedPostProps {
  date: string;
  title: string;
  url: string;
  excerpt: string;
  tags: string[];
}

export default function FeedPost({
  date,
  title,
  url,
  excerpt,
  tags
}: FeedPostProps) {
  const theme = useTheme();
  const postDate = new Date(date)
  .toLocaleDateString('pt-BR', { year: 'numeric', month: 'short', day: 'numeric' })
  .replace('.', ',')
  .replace(/de /g, '');


  console.log('data: ', postDate);
  return (
    <Box
      styleSheet={{
        position: 'relative',
        paddingBottom: '2rem',
      }}
    >
      <Box
        styleSheet={{
          color: theme.colors.neutral.x300,
          marginLeft: '-16px',
          position: 'absolute',
          top: 0,
          bottom: 0
        }}
      >
        <Icon
          name="clock_fill"
          styleSheet={{
            transform: 'translate(-50%)',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        <Box
          styleSheet={{
            width: '1px',
            position: 'absolute',
            top: '16px',
            bottom: 0,
            backgroundColor: 'currentColor'
          }}
        >
      </Box>

      </Box>
      <Text
        variant="body4"
        styleSheet={{ fontWeight: 'bold', marginBottom: '32px', marginLeft: '4px' }}
      >
        {postDate}
      </Text>
      <Link
        href="#"
        colorVariantEnabled={false}
        variant="body1"
        styleSheet={{
          display: 'inline'
        }}
      >
          <Box
            tag="span"
            styleSheet={{
              display: 'inline',
              padding: '.25rem',
              backgroundColor: theme.colors.neutral.x200,
              borderRadius: '4px',
              color: theme.colors.primary.x800,
              hover: {
                color: theme.colors.primary.x900,
                backgroundColor: theme.colors.primary.x200
              }
            }}
          >
            {title}
          </Box>
      </Link>
    </Box>
  )
}