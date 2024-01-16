import Box from "@src/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import { Footer } from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvider";
import templatePageHCO from "@src/services/template/templatePageHCO";
import type { Post } from "@src/services/posts/PostService";

interface HomeScreenProps {
  posts: Post[];
}

function HomeScreen(props: HomeScreenProps) {
  const theme = useTheme();
  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: "center",
        fontSize: {
          sm: '2px'
        }
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Feed.Posts posts={props.posts} />
      </Feed>
      <Footer />
    </Box>
  )
}

export default templatePageHCO(HomeScreen, {
  title: 'Home',
})