import md from "nano-markdown";

type Markdown = string;

export function mdToHtml(content: Markdown) {
  return md(content);
}
