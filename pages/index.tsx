import { withTemplateConfig } from "@src/services/template/withTemplateConfig";
import PostService from "@src/services/posts/PostService";

export { default } from "@src/screens/HomeScreen/HomeScreen";

export async function getStaticProps() {
  const posts = await PostService().getAll();
  return {
    props: await withTemplateConfig({
      posts,
    })
  }
}