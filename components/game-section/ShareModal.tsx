// components/game-section/ShareModal.tsx
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";

interface ShareModalProps {
  gameUrl: string;
  gameTitle: string;
  onClose: () => void;
}

export function ShareModal({ gameUrl, gameTitle, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(gameUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // 降级方案
      const textArea = document.createElement('textarea');
      textArea.value = gameUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareToSocial = (platform: string) => {
    const encodedUrl = encodeURIComponent(gameUrl);
    const encodedTitle = encodeURIComponent(gameTitle);
    
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`
    };

    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Share this game</h3>
          
          {/* 社交媒体图标 */}
          <div className="flex justify-center space-x-4 mb-6">
            {[
              { platform: 'facebook', icon: 'f', color: 'bg-blue-600' },
              { platform: 'twitter', icon: 'X', color: 'bg-black' },
              { platform: 'whatsapp', icon: '💬', color: 'bg-green-500' },
              { platform: 'linkedin', icon: 'in', color: 'bg-blue-500' },
              { platform: 'reddit', icon: 'R', color: 'bg-orange-500' }
            ].map((social) => (
              <button
                key={social.platform}
                onClick={() => shareToSocial(social.platform)}
                className={`w-12 h-12 rounded-full ${social.color} text-white flex items-center justify-center text-lg font-bold hover:opacity-90 transition-opacity`}
              >
                {social.icon}
              </button>
            ))}
          </div>
          
          {/* 链接复制区域 */}
          <div className="flex mb-4">
            <input
              type="text"
              value={gameUrl}
              readOnly
              className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l-lg border border-gray-600"
            />
            <Button
              onClick={copyToClipboard}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-l-none"
            >
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full bg-gray-700 hover:bg-gray-600 text-white"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}