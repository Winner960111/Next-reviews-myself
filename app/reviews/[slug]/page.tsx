// 'use client';
// import { useEffect } from "react";
import { orbitron } from "@/app/fonts";
import { getReview } from "@/lib/reviews";


export default async function ReviewPage({params:{slug}}:{params:any}) {
     const review = await getReview(slug)

  return (
    <>
      <div className={`text-5xl ${orbitron.className}`}>
        Hi how are you today?
      </div>
      <article dangerouslySetInnerHTML={{ __html: review.body }}  className="prose"/>
    </>
  );
}
