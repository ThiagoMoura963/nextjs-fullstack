import React from "react";
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Link from "@src/components/Link/Link";
import Image from "@src/components/Image/Image";
import Button from "@src/components/Button/Button";
import { useTheme } from "@src/theme/ThemeProvider";
import { useTemplateConfig } from "@src/services/template/TemplateConfigContext";
import type { Post } from "@src/services/posts/PostService"
import FeedPost  from "./patterns/FeedPost";
interface FeedProps {
  children: React.ReactNode,
}

export default function Feed({ children }: FeedProps) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        backgroundColor: theme.colors.neutral.x000,
        marginTop: '-228px',
        width: '100%',
        maxWidth: '683px',
        borderRadius: '8px',
        paddingVertical: '2rem',
        paddingHorizontal: '2.5rem',
      }}
    >
      {children}
    </Box>
  )
}

Feed.Header = () => {
  const theme = useTheme();
  const templateConfig = useTemplateConfig();
  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        margimBottom: '1.5rem',
        paddingBottom: '1.5rem',
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Image
          src={templateConfig.personal.avatar}
          alt="Foto de perfil do Thiago Moura"
          styleSheet={{
            width: {
              xs: '100px',
              md: '128px',
            },
            height: {
              xs: '100px',
              md: '128px',
            },
            borderRadius: "50%",
          }}
        />
        <Box
          styleSheet={{
            justifyContent: 'space-between',
          }}
        >
          <Box styleSheet={{flex: '1', justifyContent: 'space-between', display: {xs: 'none', md: 'flex'}}}>
            <Button href="/newsletter" fullWidth colorVariant="primary" size="xl">
              Newsletter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xl" href="/">
              Buy me a coffee
            </Button>
          </Box>
          <Box styleSheet={{flex: '1', justifyContent: 'space-between', display: {xs: 'flex', md: 'none'}}}>
            <Button href="/newsletter" fullWidth colorVariant="primary" size="xs">
              Newsletter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xl" href="/">
              Buy me a coffee
            </Button>
          </Box>
        </Box>
      </Box>
      <Text tag="h1" variant="heading4">
        {templateConfig.personal.name}
      </Text>
      <Box
        styleSheet={{
          flexDirection: 'row',
          gap: '.25rem'
        }}
      >
        {Object.keys(templateConfig.personal.socialNetworks).map(key => {
          const socialNetwork = templateConfig.personal.socialNetworks[key];
          if (socialNetwork) {
            return (
              <Link
                key={key}
                href={templateConfig.personal.socialNetworks[key]}
              >
                <Icon name={key as any} />
              </Link>
            )
          }
          return null;
        })}
      </Box>
    </Box>
  )
}

interface FeedPostsProps {
  posts: Post[];
}

Feed.Posts = ({ posts }: FeedPostsProps) => {
  return (
    <Box
      styleSheet={{
        paddingTop: '.5rem',
      }}
    >
      {posts.map(({ slug, title, image, metadata }) => {
        const { date, url, excerpt, tags } = metadata;
        return (
          <FeedPost
            key={slug}
            title={title}
            date={date}
            url={url}
            excerpt={excerpt}
            tags={tags}
            image={image}
          />
        )
      })}
    </Box>
  )
}