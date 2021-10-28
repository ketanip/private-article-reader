import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

const Home: NextPage = () => {

  const router = useRouter();
  const [articleURL, setArticleURL] = useState('');

  const HandleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let article_url = articleURL.trim();

    if (article_url) {
      router.push(`/article?url=${article_url}`);
    };
  };

  return (
    <div className="container" style={{ marginTop: 100 }}>

      <h1>Article Reader</h1>

      <form onSubmit={HandleForm} >
        <input
          onChange={(e) => setArticleURL(e.target.value)}
          name="url"
          type="url"
          required
          className="u-full-width"
          placeholder="Enter article URL here." />
        <br />
        <button className="button button-primary" type="submit">Read Article</button>
      </form>

      <hr />

      <p>This is a website where you can put link to any article be it news, personal blogs or any other article and read it here in a privacy focused environment without tracking.</p>

      <p>Source code for this website can be found on <a href="https://github.com/KetanIP/private-article-reader" target="_blank" rel="noreferrer" ><b>Github</b></a></p>

    </div>
  );
};

export default Home;