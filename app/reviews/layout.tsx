import { ReactNode } from "react";

export default function Reviewslayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex gap-5">
      <div className="border-solid border-2 border-red-500">
        [Reviews sidebar]
      </div>
      <div>{children}</div>
    </div>
  );
}
