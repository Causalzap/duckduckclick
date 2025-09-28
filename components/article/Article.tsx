// components/article/Article.tsx
import React from 'react';
import { cn } from "@/lib/utils";

interface ArticleProps {
  title: string;
  description: string;
  content: ArticleContent;
}

interface ArticleContent {
  introduction: string;
  endings: Ending[];
  features: Feature[];
  faqs: FAQ[];
  conclusion: string;
}

interface Ending {
  title: string;
  icon: string;
  requirements: string[];
  tip: string;
  type: 'good' | 'bad' | 'normal';
}

interface Feature {
  title: string;
  cost: string;
  roi: string;
  description: string;
  type: 'high' | 'low';
}

interface FAQ {
  question: string;
  answer: string;
}

// 结局卡片组件
const EndingCard: React.FC<Ending> = ({ title, icon, requirements, tip, type }) => {
  const typeConfig = {
    good: { color: "green", bgColor: "bg-green-100", textColor: "text-green-600", borderColor: "border-l-green-500" },
    bad: { color: "red", bgColor: "bg-red-100", textColor: "text-red-600", borderColor: "border-l-red-500" },
    normal: { color: "purple", bgColor: "bg-purple-100", textColor: "text-purple-600", borderColor: "border-l-purple-500" }
  };

  const config = typeConfig[type];

  return (
    <div className={cn(
      "bg-white rounded-xl shadow-md p-5 h-full",
      config.borderColor
    )}>
      <div className="flex items-center mb-4">
        <div className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center mr-3",
          config.bgColor,
          config.textColor
        )}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      
      <div className="mb-4">
        <h4 className="font-medium text-gray-700 mb-2">Exact Unlock Requirements:</h4>
        <ul className="text-gray-600 space-y-1 text-sm">
          {requirements.map((req, index) => (
            <li key={index}>• {req}</li>
          ))}
        </ul>
      </div>
      
      <div className={cn("p-3 rounded-lg text-sm", config.bgColor)}>
        <p className={cn(config.textColor)}>
          <span className="font-medium">Moral Tip:</span> {tip}
        </p>
      </div>
    </div>
  );
};

// 特性项组件
const FeatureItem: React.FC<Feature> = ({ title, cost, roi, description, type }) => {
  const typeConfig = {
    high: { color: "green", bgColor: "bg-green-100", textColor: "text-green-600", borderColor: "border-l-green-500" },
    low: { color: "red", bgColor: "bg-red-100", textColor: "text-red-600", borderColor: "border-l-red-500" }
  };

  const config = typeConfig[type];

  return (
    <div className={cn(
      "pl-4 py-3 border-l-4",
      config.borderColor
    )}>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <div className="flex justify-between text-sm text-gray-600 mt-1">
        <span>{cost}</span>
        {roi && <span className={cn("px-2 py-1 rounded-full text-xs", config.bgColor, config.textColor)}>{roi}</span>}
      </div>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  );
};

// FAQ项组件
const FAQItem: React.FC<FAQ> = ({ question, answer }) => {
  return (
    <div className="p-4 rounded-lg transition-all duration-200 hover:bg-gray-50 cursor-pointer">
      <h3 className="font-semibold text-gray-800 mb-2">{question}</h3>
      <p className="text-gray-600 text-sm">{answer}</p>
    </div>
  );
};

export const Article: React.FC<ArticleProps> = ({ title, description, content }) => {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        {description && (
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{description}</p>
        )}
      </div>
      
      <div className={cn(
        "article-content",
        "bg-white rounded-2xl shadow-lg p-6 md:p-8",
        "border border-gray-100"
      )}>
        {/* 引言部分 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h3>
          <p className="text-gray-700">{content.introduction}</p>
        </div>
        
        {/* 结局部分 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ultimate Endings Guide</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {content.endings.map((ending, index) => (
              <EndingCard key={index} {...ending} />
            ))}
          </div>
        </div>
        
        {/* 特性部分 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Best Upgrade Path</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-green-600 mb-4">Best Upgrades for High ROI</h4>
              <div className="space-y-4">
                {content.features
                  .filter(f => f.type === 'high')
                  .map((feature, index) => (
                    <FeatureItem key={index} {...feature} />
                  ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-red-600 mb-4">Worst Upgrades (Low ROI)</h4>
              <div className="space-y-4">
                {content.features
                  .filter(f => f.type === 'low')
                  .map((feature, index) => (
                    <FeatureItem key={index} {...feature} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ部分 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {content.faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
        
        {/* 结论部分 */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
          <h3 className="text-xl font-semibold mb-4">Conclusion</h3>
          <p>{content.conclusion}</p>
        </div>
      </div>
    </section>
  );
};