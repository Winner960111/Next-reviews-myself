// 'use client';
// import { useEffect } from "react";
import { orbitron } from "@/app/fonts";
import { getFeaturedReview, getReview } from "@/lib/reviews";

export const metadata = {
  title: "First Next app",
}

export default async function Home() {
  // useEffect(()=> {
  //   window.alert("I'm Here")
  //   console.log("Home page loaded");
  // })
  const review = await getFeaturedReview();

  return (
    <>
      <div className={`text-5xl ${orbitron.className}`}>
        Hi how are you today?
      </div>
      <article dangerouslySetInnerHTML={{ __html: review.body }}  className="prose"/>
    </>
  );
}
