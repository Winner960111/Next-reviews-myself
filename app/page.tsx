// 'use client';
import { readFile } from "node:fs/promises";
// import { useEffect } from "react";
import {orbitron} from "@/app/fonts"

export default async function Home() {
  // useEffect(()=> {
  //   window.alert("I'm Here")
  //   console.log("Home page loaded");
  // })
  const text = await readFile("./content/readme.md", "utf-8");
  return (
    <div className={`text-5xl ${orbitron.className}`}>
        Hi how are you today?
        {text}
    </div>
  );
}
