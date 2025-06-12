'use client'

import { useState } from "react";

export default function ShareLinkButton() {

  const [clicked, setClicked] = useState(false);

  const ClickHandler = () => {

    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  }
  
  console.log("[ShareLinkButton] clicked:", clicked);
  console.log("here")

  return (
    <button 
    onClick={ClickHandler}
    className="border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-200 hover:text-slate-900 transition-colors">
      {clicked ? "Copied link" : "Share Link"}
    </button>
  )
}