import Link from "next/link";
import { Facebook, Twitter, LucideIcon } from "lucide-react";
import { theme } from "@/config/theme";
import { content } from "@/config/content";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const SocialIcons: Record<string, LucideIcon> = {
  Facebook,
  Twitter,
};

export function Footer() {
  if (!layout.footer.isVisible) return null;

  const footerClassName = cn(
    theme.footer.colors.border,
    theme.footer.colors.background
  );

  const containerClassName = cn(
    theme.footer.layout.container,
    theme.footer.layout.padding
  );

  const gridClassName = cn(theme.footer.layout.grid);

  return (
    <footer className={footerClassName}>
      <div className={containerClassName}>

        {/* 分隔线 - 添加在这里 */}
        <div className="mt-8 pt-8 border-t">
          {/* 版权信息区域 - 两栏布局 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 左侧：About部分 */}
            {layout.footer.sections.about && (
              <div>
                <h3 className={cn("font-semibold mb-2", theme.footer.spacing.sectionTitle)}>
                  {content.footer.about.title}
                </h3>
                <p className={cn("text-sm", theme.footer.colors.mutedText)}>
                  {content.footer.about.description}
                </p>
              </div>
            )}

            {/* 右侧：版权信息和导航链接 */}
            <div className="flex flex-col items-start md:items-end gap-4">
              {/* 版权信息在右侧上方 */}
              <p className={cn("text-sm", theme.footer.colors.mutedText)}>
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </p>
              
              {/* 导航链接在右侧下方 */}
              {(() => {
                const allLegalLinks = content.footer.legal.links;
                const desiredOrder = ["About Us", "Privacy Policy", "Terms of Service", "Contact Us"];
                const orderedLinks = desiredOrder
                  .map(text => allLegalLinks.find(link => link.text === text))
                  .filter(link => link !== undefined) as { text: string; href: string }[];

                if (layout.footer.sections.legal && orderedLinks.length > 0) {
                  return (
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {orderedLinks.map((link, index) => (
                        <div key={link.href} className="flex items-center">
                          <Link
                            href={link.href}
                            className={cn(
                              "text-sm hover:underline",
                              theme.footer.colors.mutedText,
                              theme.footer.colors.hover,
                              "transition-colors duration-200"
                            )}
                          >
                            {link.text}
                          </Link>
                          {index < orderedLinks.length - 1 && (
                            <span 
                              className={cn("text-sm", theme.footer.colors.mutedText, "mx-2")} 
                              aria-hidden="true"
                            >
                              |
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              })()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}