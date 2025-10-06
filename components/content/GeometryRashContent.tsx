'use client';

import React from 'react';
import { geometryRashContent } from '@/app/geometry-rash/content';
import Image from "next/image";
// 引入 marked 库
import { marked } from 'marked'; 


/**
 * GeometryRashContent Component
 * Renders the Geometry Rash SEO guide, converting Markdown to HTML.
 */
const GeometryRashContent: React.FC = () => {
  const { metadata, introduction, sections } = geometryRashContent;

  // Helper function to convert Markdown string to HTML
  const renderMarkdown = (markdownString: string) => {
    // Convert Markdown to HTML string
    const htmlString = marked.parseInline(markdownString, { breaks: true, gfm: true });
    // Return the object required by dangerouslySetInnerHTML
    return { __html: htmlString };
  };

  return (
    <article className="prose prose-lg mx-auto px-4 py-8">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4">{metadata.title}</h2>

      {/* Description */}
      <p className="text-gray-600 mb-8">{metadata.description}</p>

      {/* Introduction */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">{introduction.title}</h3>
        {introduction.paragraphs.map((para, index) => (
          // Use renderMarkdown and dangerouslySetInnerHTML for paragraphs if they contain markdown
          <p 
            key={index} 
            className="text-gray-700 leading-relaxed mb-3"
            dangerouslySetInnerHTML={renderMarkdown(para)}
          />
        ))}
      </section>
      
      <figure className="my-10">
          <Image
            src="/assets/geometry-rash/geometry-rash-gameplay.jpg"
            alt="Geometry Rash gameplay preview"
            width={1200}
            height={630}
            className="w-full h-auto rounded-xl shadow"
            priority
          />
          <figcaption className="text-sm text-gray-500 mt-2">
            Gameplay overview – timing and rhythm are everything.
          </figcaption>
      </figure>

      {/* Sections */}
      {sections.map((section, sIndex) => (
        <section key={sIndex} className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>

          {section.subsections.map((sub, subIndex) => (
            <div key={subIndex} className="mb-6">
              <h4 className="text-xl font-semibold mb-2">{sub.title}</h4>
              <ul className="list-disc list-inside space-y-1">
                {sub.bullets.map((bullet, bIndex) => (
                  // ****** 关键调整在这里 ******
                  // 使用 dangerouslySetInnerHTML 渲染转换后的 HTML
                  <li 
                    key={bIndex} 
                    className="text-gray-700"
                    dangerouslySetInnerHTML={renderMarkdown(bullet)}
                  />
                  // **************************
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}

    </article>
  );
};

export default GeometryRashContent;