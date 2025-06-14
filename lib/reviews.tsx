import { readdir, readFile } from "node:fs/promises";
// import { useEffect } from "react";
import matter from "gray-matter";
import { marked } from "marked";
import { get } from "node:http";

export async function getFeaturedReview() {
  const reviews = await getReviews();
  return reviews[0];
}

export async function getReview(slug:string) {
  const text = await readFile(`./content/${slug}.md`, "utf-8");
  const { content, data:{ title, date } } = matter(text);
  const body = marked(content);
  return { title, date, body, slug}
}

export async function getReviews() {

  const slugs = await getSlugs();
  const reviews = [];
  for (const slug of slugs){
    const review = await getReview(slug);
    reviews.push(review);
  }
  return reviews.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getSlugs() {
  const files = await readdir("./content/");
  return files.filter((file) => file.endsWith(".md"))
    .map((files)=> files.slice(0, -".md".length));
}