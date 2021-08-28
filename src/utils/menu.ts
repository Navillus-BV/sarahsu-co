import menu from "../data/menu.json";

function parsePageData({ title, page }: CMS.MenuItem) {
  return {
    title,
    page: page.replace("src/pages", "").replace(".md", ""),
  };
}

export const pages = (menu as CMS.Menu).pages.map(parsePageData);
