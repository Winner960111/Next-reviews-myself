import { readdir, readFile } from "node:fs/promises";
// import { useEffect } from "react";
import matter from "gray-matter";
import { marked } from "marked";

export async function getReview(slug:string) {
  const text = await readFile(`./content/${slug}.md`, "utf-8");
  const { content, data:{ title, date } } = matter(text);
  const body = marked(content, {headerIds: false, mangle: false});
  return { title, date, body, slug}
}

export async function getReviews() {
  const files = await readdir("./content/");
  const slugs = files.filter((file) => file.endsWith(".md"))
    .map((files)=> files.slice(0, -".md".length));

  const reviews = [];
  for (const slug of slugs){
    const review = await getReview(slug);
    reviews.push(review);
  }
  return reviews 
}