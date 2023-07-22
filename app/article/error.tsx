"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-1 mt-4 text-center">
      <h2 className=""> {error.message}!</h2>

      <Link href="/">
        <button className="px-4 py-2 mt-2 text-white bg-black rounded max-w-prose">
          Go to homepage.
        </button>
      </Link>

      <button onClick={() => reset()} className="underline cursor-pointer">
        Try again
      </button>
    </div>
  );
}
