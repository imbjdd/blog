import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Header from "@/app/_components/header";

export default function Index() {
  const allPosts = getAllPosts();

  const morePosts = allPosts;

  return (
    <main>
      <Container>
        <Header />
        <Intro />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
