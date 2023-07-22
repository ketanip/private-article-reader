import React from "react";
import { NextPage } from "next";
import { PacmanLoader } from "react-spinners";

const ArticleLoadingPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-4">
      <PacmanLoader color="#000" />

      <p className="text-2xl font-bold text-center">
        Please hang on tight we are loading your article.
      </p>
    </div>
  );
};

export default ArticleLoadingPage;
