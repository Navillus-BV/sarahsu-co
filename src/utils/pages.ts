interface PageData extends CMS.Page {
  file: URL;
}

export function getPages(allPages: PageData[], pagePaths: string[]) {
  return pagePaths.map((pagePath) =>
    allPages.find(({ file }) => file.pathname.endsWith(pagePath))
  );
}
