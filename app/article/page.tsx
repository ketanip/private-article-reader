import React from "react";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { redirect } from "next/navigation";
import { ArticleData, extract } from "@extractus/article-extractor";
import { FiFileText, FiMic, FiUser, FiWatch } from "react-icons/fi";

const roboto = Roboto({ subsets: ["latin"], weight: "300" });

const getArticle = async (article_url: string | null) => {
  try {
    if (article_url === null) {
      redirect("/");
    }

    // Scraping and preparing article.
    const article = await extract(article_url);

    // Returning parsed article data in props to UI.
    return article;
  } catch (error) {
    // Sending error so users can know if they malformed URL.
    throw new Error("INVALID URL");
  }
};

const ArticleImage: React.FC<{article: ArticleData}> = ({article}) => {
  
  if (article.image) {

  
  return (
    <div>
   {   article.content?.includes(article.image) ? (
            <></>
          ) : (
            <img
              src={article.image}
              alt={article.title}
              className="w-full mx-auto my-5 rounded"
            />
          )}
    </div>
  )

}

  return <></>

}


const ArticlePage = async ({
  searchParams,
}: {
  searchParams: { url: string };
}) => {
  const url = searchParams.url;

  // Loading article
  const article = await getArticle(url);
  if (article === null) {
    throw new Error("Please check the URL again. It is a invalid URL.");
  }

  return (
    <div>
      <div>
        {/* Read at source. */}
        <Link
          href={article.source || "/"}
          className="flex items-center justify-center gap-2 py-1 my-2 font-bold text-center underline bg-yellow-500 item"
        >
          <FiFileText /> <span>Read at source.</span>
        </Link>

        {/* Page Content. */}
        <div className="px-2">
          {/* Title */}
          <h2 className="my-8 text-2xl font-bold text-center">
            {article.title}
          </h2>

          {/* Article main image. */}
          <ArticleImage article={article}  />
          

          {/* Basic Info. */}
          <div className="flex flex-row justify-center gap-6 mt-4">
            <div className="flex flex-row items-center gap-2">
              <FiUser /> {article.author || "No author found."}
            </div>

            <div className="flex flex-row items-center gap-2">
              <FiWatch />{" "}
              {new Date(article.published || "").toLocaleDateString() ||
                "Publishing time not found."}
            </div>

            <div className="flex flex-row items-center gap-2">
              <FiMic />{" "}
              {`${Math.round(Number(article.ttr) / 60)} Minutes` || "0 Minutes"}
            </div>
          </div>

          {/* Parsed article body. */}
          <article
            className={"mx-auto my-0 prose max-w-6xl " + roboto.className}
            dangerouslySetInnerHTML={{ __html: String(article.content) }}
          ></article>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
