import { NextPage } from 'next';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

const ArticlePage: NextPage = () => {


    const router = useRouter();
    const [article, setArticle] = useState('');

    axios.post("/api/get-article", {
        url: String(router.query.url)
    })
    .then(resp => {
        setArticle(resp.data);
    })
    .catch(err => console.log(err));

    return (
        <div className="container">
            <div className=" container article-container" >
                <noscript>
                    <div dangerouslySetInnerHTML={{ __html: article }}></div>
                </noscript>
            </div>
        </div>
    );

};

export default ArticlePage;