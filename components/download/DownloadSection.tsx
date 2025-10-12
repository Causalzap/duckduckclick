import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const DownloadContainer = styled.div`
  margin: 40px 0;
  padding: 30px 20px;
  text-align: left;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: left;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 10px; /* 增加按钮区域的间距 */
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* 小屏幕上按钮居中显示 */
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  transition: all 0.2s ease;
  margin-bottom: 10px; /* 增加按钮的底部间距 */

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
`;

const ButtonImage = styled(Image)`
  border-radius: 8px;
`;

interface DownloadSectionProps {
  appName: string;
  googlePlayUrl: string;
  appleStoreUrl: string;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({
  appName,
  googlePlayUrl,
  appleStoreUrl,
}) => {
  // 检查链接是否有效
  const hasGooglePlay = googlePlayUrl && googlePlayUrl.trim() !== '';
  const hasAppleStore = appleStoreUrl && appleStoreUrl.trim() !== '';

  // 如果没有有效的下载链接，不渲染组件
  if (!hasGooglePlay && !hasAppleStore) {
    return null;
  }

  // 根据可用的下载链接确定标题
  const getTitle = () => {
    if (hasGooglePlay && hasAppleStore) {
      return `${appName} — Available on App Stores`;
    } else if (hasGooglePlay) {
      return `${appName} — Available on Google Play`;
    } else if (hasAppleStore) {
      return `${appName} — Available on the App Store`;
    }
    return "";
  };

  return (
    <DownloadContainer>
      <SectionTitle>
        {getTitle()}
      </SectionTitle>
      <ButtonWrapper>
        {/* Google Play Button */}
        {hasGooglePlay && (
          <DownloadButton
            href={googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get ${appName} on Google Play`}
          >
            <ButtonImage
              src="/assets/google-store-button.png"
              alt="GET IT ON Google Play"
              width={180}
              height={60}
            />
          </DownloadButton>
        )}
        
        {/* Apple App Store Button */}
        {hasAppleStore && (
          <DownloadButton
            href={appleStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get ${appName} on the App Store`}
          >
            <ButtonImage
              src="/assets/apple-store.png"
              alt="Download on the App Store"
              width={180}
              height={60}
            />
          </DownloadButton>
        )}
      </ButtonWrapper>
    </DownloadContainer>
  );
};

export default DownloadSection;
