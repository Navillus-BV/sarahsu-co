import type { MarkdownInstance } from 'astro';

export function getPages(allPages: MarkdownInstance<CMS.Page>[], pagePaths: string[]) {
  return pagePaths.map((pagePath) =>
    allPages.find(({ file }) => file.endsWith(pagePath))
  ).filter(Boolean);
}
