import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  const router = useRouter();
  const [articleURL, setArticleURL] = useState("");
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/article?url=${articleURL}`);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl px-5 mx-auto my-5 text-2xl">
        <form onSubmit={submitForm}>
          <input
            onChange={(e) => setArticleURL(e.target.value.trim())}
            name="url"
            type="url"
            placeholder="Enter article URL here."
            className="px-4 py-3 outline-none border-b-2 min-w-full border-b-gray-800"
            required
            autoComplete="on"
            autoFocus={true}
          />

          <button
            className="mt-5 bg-blue-600 hover:bg-blue-500 hover:shadow-lg px-4 py-2 rounded text-white font-semibold"
            type="submit"
          >
            Read Article
          </button>
        </form>

        <hr className="my-10 bg-gray-300 h-0.5 rounded-full" />

        <div className="flex flex-col gap-4" id="how-it-works">
          <h3 className="text-4xl underline font-bold mb-5">How it works?</h3>
          <p>
            <span className="font-bold">Step 1 : </span>
            <span>You enter URL.</span>
          </p>
          <p>
            <span className="font-bold">Step 2 : </span>
            <span>
              Our bots go and fetch the page and take out article content and
              strips everything else including trackers.
            </span>
          </p>
          <p>
            <span className="font-bold">Step 3 : </span>
            <span>We display it in and easy to read format.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
