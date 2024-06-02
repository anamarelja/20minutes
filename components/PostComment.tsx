import { CommentDto } from "@/models/comment.dto";

interface PostCommentProps {
  comment: CommentDto;
}

function PostComment({ comment }: PostCommentProps) {
  return (
    <div className="mb-2">
      <p className="text-blue-800 font-semibold	">{comment.name || "Anonymus"}:</p>
      <p className="text-gray-700">{comment.text}</p>
    </div>
  );
}

export default PostComment;
