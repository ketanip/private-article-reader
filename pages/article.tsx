import { NextPage, NextPageContext } from "next";
import { ArticleData } from "article-parser";
import { extract } from "article-parser";
import router from "next/router";

type props = {
  articleData: ArticleData;
};

const ArticlePage: NextPage<props> = ({ articleData }) => {
  return (
    <div className="pb-10">
      {/* Original Article Link */}
      <a
        href={articleData.url}
        className="bg-yellow-300 hover:bg-yellow-400 hover:cursor-pointer text-center py-2 text-xl fixed min-w-full"
      >
        Read original article by clicking{" "}
        <span className="font-bold">here</span>.
      </a>

      {/* Parsed article starts here. */}
      <div className="max-w-7xl px-5 mx-auto pt-20">
        {/* Article title. */}
        <h1 className="text-5xl font-semibold">{articleData.title}</h1>

        {/* Author name and time to read. */}
        <div className="flex gap-2 my-6 text-xl ">
          {/* Author name. */}
          <span>
            Written by{" "}
            <span className="font-semibold text-black/90">
              {articleData.author}
            </span>
          </span>

          <span>|</span>

          {/* Time to read. */}
          <span>{Math.round(Number(articleData.ttr) / 60)} Minutes</span>
        </div>

        {/* Article main image. */}
        <img
          src={articleData.image}
          alt={articleData.title}
          className="rounded my-5"
        />

        {/* Parsed article body. */}
        <article
          className="prose max-w-none prose-2xl"
          dangerouslySetInnerHTML={{ __html: String(articleData.content) }}
        ></article>
      </div>
    </div>
  );
};

// Getting and parsing article on server side.
export async function getServerSideProps({ query }: NextPageContext) {

  try {

    // Getting article url.
    if (!query.url) {
      router.push("/");
      return;
    }
    const article_url = query.url.toString();

    // Scraping and preparing article.
    const articleData = await extract(article_url);

    // Returning parsed article data in props to UI.
    return { props: { articleData } };

  } catch (error) {
    
    // Sending error so users can know if they malformed URL.
    return {
      props: {
        articleData: {
          title: "Failed to parse article.",
          content:
            "Please check the article url or it is a internal server error.",
        },
      },
    };
    
  }
}

export default ArticlePage;
