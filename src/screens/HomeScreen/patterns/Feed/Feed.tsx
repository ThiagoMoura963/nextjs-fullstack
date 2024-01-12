import React from "react";
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Button from "@src/components/Button/Button";

interface FeedProps {
  children: React.ReactNode,
}

export default function Feed({ children }: FeedProps) {
  return (
    <Box>
      <Text>
        Feed Base
      </Text>
      {children}
    </Box>
  )
}

Feed.Header = () => {
  return (
    <Box>
      <Button>
        Clique aqui!
      </Button>
      <Image
        src="https://github.com/ThiagoMoura963.png"
        alt="Foto de perfil do Thiago Moura"
        styleSheet={{
          width: "128px",
          height: "128px",
          borderRadius: "50%",
        }}
      />
      <Icon name="youtube" />
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" />
      <Text>
        Feed Header
      </Text>
    </Box>
  )
}

Feed.Posts = () => {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  )
}