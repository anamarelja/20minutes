import React from "react";

function PostCommentSkeleton() {
  return (
    <div
      role="status"
      className="space-y-4 animate-pulse"
    >
      <div className="pt-2">
        <div className="h-2.5 bg-gray-200 rounded-full w-36 mb-2.5"></div>
        <div className="w-40 h-3 bg-gray-100 rounded-full"></div>
      </div>
      <div className="pt-2">
        <div className="h-2.5 bg-gray-200 rounded-full w-36 mb-2.5"></div>
        <div className="w-40 h-3 bg-gray-100 rounded-full"></div>
      </div>
      <div className="pt-2">
        <div className="h-2.5 bg-gray-200 rounded-full w-36 mb-2.5"></div>
        <div className="w-40 h-3 bg-gray-100 rounded-full"></div>
      </div>
      <div className="pt-2">
        <div className="h-2.5 bg-gray-200 rounded-full w-36 mb-2.5"></div>
        <div className="w-40 h-3 bg-gray-100 rounded-full"></div>
      </div>
    </div>
  );
}

export default PostCommentSkeleton;
