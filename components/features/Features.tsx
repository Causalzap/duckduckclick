import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { cn } from "@/lib/utils";

interface FeaturesProps {
  content?: typeof defaultContent;
}

export function Features({ content = defaultContent }: FeaturesProps) {
  // 根据图片中的功能项定义颜色和图标
  const colors = [
    "text-blue-600", 
    "text-green-600", 
    "text-purple-600",
    "text-orange-600",
  ];
  
  const iconBackgrounds = [
    "bg-blue-100", 
    "bg-green-100", 
    "bg-purple-100",
    "bg-orange-100",
  ];

  // 根据图片中的功能项重新定义图标
  const icons = [
    // 挑战性赛道和障碍物图标
    <svg key="tracks" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>,
    // 雪橇定制和升级图标
    <svg key="upgrades" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
    // 多种游戏模式图标
    <svg key="modes" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>,
    // 真实物理模拟图标
    <svg key="physics" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>,
  ];

  return (
    <section 
      id="features" 
      className={cn(
        "py-16 bg-gradient-to-b from-gray-50 to-white",
        theme.layout.section.scrollMargin
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {content.features.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the thrilling features that make Snow Rider 3D an exciting downhill racing game
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {content.features.items.map((feature, index) => {
            // 循环使用颜色和图标，确保所有功能项都有样式
            const colorIndex = index % colors.length;
            const iconIndex = index % icons.length;
            
            return (
              <div 
                key={index} 
                className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 flex flex-col h-full"
              >
                <div className={cn(
                  "w-16 h-16 rounded-xl flex items-center justify-center mb-6",
                  iconBackgrounds[colorIndex],
                  colors[colorIndex]
                )}>
                  {icons[iconIndex]}
                </div>

                <h3 className={cn(
                  "text-xl font-bold mb-4 group-hover:text-blue-700 transition-colors",
                  colors[colorIndex]
                )}>
                  {feature.title}
                </h3>
                
                <p className="text-gray-700 text-left mb-6 flex-grow leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}