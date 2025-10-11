// components/game-section/CommentForm.tsx
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";

interface CommentFormProps {
  gameId: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function CommentForm({ gameId, onSuccess, onCancel }: CommentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: ''
  });
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert('Please agree to the terms and conditions');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const comments = JSON.parse(localStorage.getItem(`comments-${gameId}`) || '[]');
      const newComment = {
        id: Date.now(),
        ...formData,
        gameId,
        createdAt: new Date().toISOString(),
        approved: true
      };
      
      comments.unshift(newComment);
      localStorage.setItem(`comments-${gameId}`, JSON.stringify(comments));
      
      setFormData({ name: '', email: '', content: '' });
      setAgreed(false);
      
      onSuccess?.();
    } catch (error) {
      console.error('Failed to submit comment:', error);
      alert('Submission failed, please try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-white mb-4">Discussion: {gameId}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-1">
            Comment *
          </label>
          <textarea
            id="content"
            name="content"
            required
            rows={4}
            value={formData.content}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Share your thoughts about this game..."
          />
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="agree" className="ml-2 block text-sm text-gray-300">
            I have read and agree to the terms and conditions
          </label>
        </div>
        
        <div className="flex space-x-3">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Comment'}
          </Button>
          
          <Button
            type="button"
            onClick={onCancel}
            variant="outline"
            className="px-6 py-2 bg-gray-700 text-white hover:bg-gray-600"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}