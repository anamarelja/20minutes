import { PostDto } from "@/models/post.dto";
import Link from "next/link";
import React from "react";

interface PostCardProps {
  post: PostDto;
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="p-6 bg-gray-50 border border-gray-100 shadow">
      <h5 className="mb-2 text-2xl font-bold text-blue-800">
        {post.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 my-3">
        {post.description}
      </p>
      <Link
        href={`/posts/${post.id}`}
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Read more
      </Link>
    </article>
  );
}

export default PostCard;
