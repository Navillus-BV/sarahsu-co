interface PageData extends CMS.Page {
  title: string;
  href: string;
  file: URL;
}

export function getPages(allPages: PageData[], pagePaths: string[]) {
  return pagePaths.map((pagePath) =>
    allPages.find(({ file }) => file.pathname.endsWith(pagePath))
  );
}
