// components/comments/CommentsSection.tsx
'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface Comment {
  id: number;
  name: string;
  email: string;
  content: string;
  gameId: string;
  createdAt: string;
  approved: boolean;
}

interface CommentsSectionProps {
  gameId: string;
}

export function CommentsSection({ gameId }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadComments();
    // 监听评论更新事件
    window.addEventListener('commentsUpdated', loadComments);
    return () => window.removeEventListener('commentsUpdated', loadComments);
  }, [gameId]);

  const loadComments = () => {
    try {
      const savedComments = JSON.parse(localStorage.getItem(`comments-${gameId}`) || '[]');
      setComments(savedComments.filter((comment: Comment) => comment.approved));
    } catch (error) {
      console.error('Failed to load comments:', error);
      setComments([]);
    } finally {
      setLoading(false);
    }
  };

  const deleteComment = (commentId: number) => {
    if (confirm('Are you sure you want to delete this comment?')) {
      const savedComments = JSON.parse(localStorage.getItem(`comments-${gameId}`) || '[]');
      const updatedComments = savedComments.filter((comment: Comment) => comment.id !== commentId);
      localStorage.setItem(`comments-${gameId}`, JSON.stringify(updatedComments));
      setComments(updatedComments.filter((comment: Comment) => comment.approved));
    }
  };

  if (loading) {
    return <div className="text-center py-4 text-white">Loading comments...</div>;
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-white mb-4 text-center">
        Player Comments ({comments.length})
      </h3>
      
      {comments.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          No comments yet, be the first to comment!
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-gray-700 rounded-lg p-4 relative">
              {/* 删除按钮 */}
              <button
                onClick={() => deleteComment(comment.id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-400 text-sm"
                title="Delete comment"
              >
                ×
              </button>
              
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="font-semibold text-white block">{comment.name}</span>
                  {/* 隐藏邮箱以保护隐私 - 注释掉邮箱显示行 */}
                  {/* <span className="text-gray-400 text-sm">{comment.email}</span> */}
                </div>
                <span className="text-sm text-gray-400">
                  {new Date(comment.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  })}
                </span>
              </div>
              <p className="text-gray-200 whitespace-pre-wrap">{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}