import { readdir, readFile } from "node:fs/promises";
// import { useEffect } from "react";
import matter from "gray-matter";
import { marked } from "marked";
import { notFound } from "next/navigation";

export async function getFeaturedReview() {
  const reviews = await getReviews();
  // if (reviews.length === 0) {
  //   return null;
  // }
  return reviews[0];
}

export async function getReview(slug: string) {
  const text = await readFile(`./content/${slug}.md`, "utf-8");
  const {
    content,
    data: { title, date },
  } = matter(text);
  const body = marked(content);
  if (!body) {
    return null;
  }
  return { title, date, body, slug };
}

export async function getReviews() {
  const slugs = await getSlugs();
  const reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    if (!review) {
      notFound()
    }
    reviews.push(review);
  }
  return reviews.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getSlugs() {
  const files = await readdir("./content/");
  const files1 = files
    .filter((file) => file.endsWith(".md"))
    .map((files) => files.slice(0, -".md".length));
  if (!files1) {
    console.log("I'm here")
  }
  return files1

}
