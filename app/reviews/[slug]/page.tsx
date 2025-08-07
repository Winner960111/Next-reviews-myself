// 'use client';
// import { useEffect } from "react";
import { orbitron } from "@/app/fonts";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews";
import { notFound } from "next/navigation";

// export const dynamic = 'force-dynamic'
export const revalidate = 30;

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const review = await getReview(slug);
  if (!review) {
    notFound()
  }
  return {
    title: review.title,
  };
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const review = await getReview(slug);
    if (!review) {
    notFound()
  }
  console.log("review:", slug);
  return (
    <>
      <div className={`text-5xl ${orbitron.className}`}>
        Hi how are you today?
      </div>
      <ShareLinkButton />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose"
      />
    </>
  );
}
