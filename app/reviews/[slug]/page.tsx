// 'use client';
// import { useEffect } from "react";
import { orbitron } from "@/app/fonts";
import { getReview, getSlugs } from "@/lib/reviews";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
     const {slug} = await params;
     const review = await getReview(slug)
     return {
          title: review.title,
          description: `Review of ${review.title} published on ${review.date}`,
     };
}

export default async function ReviewPage({params}: {params: Promise<{slug: string}>}) {
     const {slug} = await params;
     const review = await getReview(slug)
     console.log("review:", slug);
  return (
    <>
      <div className={`text-5xl ${orbitron.className}`}>
        Hi how are you today?
      </div>
      <article dangerouslySetInnerHTML={{ __html: review.body }}  className="prose"/>
    </>
  );
}
