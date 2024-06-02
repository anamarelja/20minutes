import { GetServerSideProps } from "next";
import { PostDto } from "@/models/post.dto";
import PostCard from "@/components/PostCard";
import { POST_URL } from "../utils/urlConstants";
import Header from "@/components/Header";

interface MainPageProps {
  posts: PostDto[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${POST_URL}`);
  const posts: PostDto[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

const MainPage = ({ posts }: MainPageProps) => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-4">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
