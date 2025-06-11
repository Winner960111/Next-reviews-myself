import { ReactNode } from "react";

export const metadata = {
  title: {
    default:"Reviews",
    template: "%s | Reviews | Create Next App",
  },
};

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
