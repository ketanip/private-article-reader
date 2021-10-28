import { NextPage } from 'next';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Loader from "react-loader-spinner";
import { ArticleData } from 'article-parser';

const ArticlePage: NextPage = () => {


    const router = useRouter();
    const [article, setArticle] = useState<ArticleData>();

    axios.post("/api/get-article", {
        url: String(router.query.url)
    })
        .then(resp => {
            setArticle(resp.data.article);
        })
        .catch(err => console.log(err));

    return (
        <div className="container">
            <div className=" container article-container" >

                {
                    article?.content &&

                    <>
                        {
                            !article?.url?.includes('medium.com') &&
                            <div>
                                <h1>{article?.title}</h1>
                                <b>{article?.author}</b><br />
                                <small>{article?.ttr} Seconds</small><br />
                                <small>Published At: {article.published?.slice(0, 10)}</small><br />
                                <hr />
                                <img style={{ marginBottom: "15px" }} src={article?.image} alt="Article Image" />
                                <hr />
                            </div>
                        }

                        <div dangerouslySetInnerHTML={{ __html: String(article?.content) }}></div>
                    </>

                }


                {
                    !article?.content &&
                    <div className="loading">
                        <Loader
                            type="TailSpin"
                            color="#000"
                            height={100}
                            width={100}
                        />
                    </div>
                }

            </div>
        </div>
    );

};

export default ArticlePage;
