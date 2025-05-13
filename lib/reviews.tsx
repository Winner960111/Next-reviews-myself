import { readFile } from "node:fs/promises";
// import { useEffect } from "react";
import { marked } from "marked";

export async function getReview(slug:string) {
  const text = await readFile(`./content/${slug}.md`, "utf-8");
  const body = marked(text);
  return {body}
}