import { useTheme } from "@src/theme/ThemeProvider";
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Link from "@src/components/Link/Link";
import Button from "@src/components/Button/Button";
import Image from "@src/components/Image/Image";

interface FeedPostProps {
  date: string;
  title: string;
  url: string;
  excerpt: string;
  tags: string[];
  image?: string;
}

export default function FeedPost({
  date,
  title,
  url,
  excerpt,
  tags,
  image
}: FeedPostProps) {
  const theme = useTheme();
  const postDate = new Date(date)
  .toLocaleDateString('pt-BR', { year: 'numeric', month: 'short', day: 'numeric' })
  .replace('.', ',')
  .replace(/de /g, '');

  return (
    <Box
      styleSheet={{
        position: 'relative',
        paddingBottom: '2rem',
      }}
    >
      <FeedPostTimeline />
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
              color: theme.colors.neutral.x800,
              hover: {
                color: theme.colors.primary.x900,
                backgroundColor: theme.colors.primary.x200
              }
            }}
          >
            {title}
          </Box>
      </Link>
      <Text
        variant="body3"
        styleSheet={{
          marginTop: '1.25rem',
        }}
      >
        {excerpt}
      </Text>
      <Box
        styleSheet={{
          flexDirection: 'row',
          gap: '.5rem',
          paddingTop: '1.5rem',
        }}
      >
        {tags.map((tag) => {
          return (
            <Link
              key={tag}
              variant="body3"
              colorVariantEnabled={false}
              href="#"
              styleSheet={{
                color: theme.colors.neutral.x800,
                backgroundColor: theme.colors.neutral.x200,
                borderRadius: '25px',
                padding: '.25rem .5rem',
                hover: {
                  color: theme.colors.primary.x900,
                  backgroundColor: theme.colors.primary.x200,
                }
              }}
            >
              #{tag}
            </Link>
          )
        })}
      </Box>
      {image &&
        <Button.Base
          href={url}
          styleSheet={{
            hover: {
              opacity: 0.8,
            }
          }}
        >
          <Image
            src={image}
            alt="Descrição da imagem"
            styleSheet={{
              width: '100%',
              borderRadius: '12px',
              marginTop: '1.5rem'
            }}
          />
        </Button.Base>
      }
    </Box>
  )
}

function FeedPostTimeline() {
  const theme = useTheme();
  return (
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
  )
}