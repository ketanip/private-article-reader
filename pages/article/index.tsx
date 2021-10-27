import { NextPage } from 'next';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Loader from "react-loader-spinner";

const ArticlePage: NextPage = () => {


    const router = useRouter();
    const [article, setArticle] = useState('');

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
                    article !== "" &&
                    <div dangerouslySetInnerHTML={{ __html: article }}></div>
                }


                {
                    article === "" &&
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
