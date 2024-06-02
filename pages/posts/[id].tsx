import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { CommentDto } from "@/models/comment.dto";
import { PostDto } from "@/models/post.dto";
import { POST_URL } from "@/utils/urlConstants";
import PostComment from "@/components/PostComment";
import PostCommentSkeleton from "@/components/PostCommentSkeleton";
import Header from "@/components/Header";

interface PostPageProps {
  post: PostDto;
}

const PostPage = ({ post }: PostPageProps) => {
  const [comments, setComments] = useState<CommentDto[]>([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [newComment, setNewComment] = useState({ name: "", text: "" });

  const fetchComments = async () => {
    const res = await fetch(
      `${POST_URL}/${post.id}/comments`
    );
    const data: CommentDto[] = await res.json();
    setComments(data);
    setCommentsLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, [post.id]);

  const handleCommentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.text) return;

    await fetch(`${POST_URL}/${post.id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    });

    setNewComment({ name: "", text: "" });
    setCommentsLoading(true);
    fetchComments();
  };

  return (
    <div className="container mx-auto">
      <Header />
      <h1 className="text-4xl font-bold mt-5 text-blue-900">{post.title}</h1>
      <p className="text-gray-500 mb-10">
        Posted at:{" "}
        {new Date(post.createdAt).toLocaleDateString().split("/").join(".")}
      </p>
      <p className="my-3">{post.text}</p>

      <h2 className="text-gray-800 text-lg mb-3 mt-6">
        Comments ({comments.length}):
      </h2>
      {!commentsLoading ? (
        comments.map((comment) => (
          <PostComment comment={comment} key={comment.id} />
        ))
      ) : (
        <PostCommentSkeleton />
      )}

      <form onSubmit={handleCommentSubmit} className="my-4">
        <h2 className="text-gray-700 text-lg mb-3 mt-6">Leave a comment:</h2>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <input
            type="text"
            id="name"
            value={newComment.name}
            onChange={handleCommentChange}
            className="border border-gray-200 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-300 block w-full p-2.5"
            placeholder="Name"
          />
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <textarea
            rows={6}
            id="text"
            value={newComment.text}
            onChange={handleCommentChange}
            className="block p-2.5 w-full text-sm text-gray-900 border border-gray-200 focus:ring-blue-300 focus:border-blue-500"
            required
            placeholder="Write your comment here..."
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(
    `${POST_URL}/${params?.id}`
  );
  const post: PostDto = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
