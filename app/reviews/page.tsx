import Link from "next/link";
import Heading from "@/components/Heading";
export default function ReviewsPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Heading>Reviews</Heading>
      <h1 className="bg-gray-400 text-red-500 font-bold">
        <ul>
          <li>
            <Link href="/reviews/hollow-knight">Hollow Knight</Link>
          </li>
          <li>
            <Link href="/reviews/stardew-valley">Stardew Vally</Link>
          </li>
        </ul>
        This is Reviews page for Reviews Page
      </h1>
    </div>
  );
}
