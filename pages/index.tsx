import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

const Home: NextPage = () => {
  
  const router = useRouter();
  const [articleURL, setArticleURL] = useState('');

  const HandleForm = (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    router.push(`/article?url=${articleURL.trim()}`);
  };

  return (
    <div className="container" style={{marginTop:100}}>

      <h1>Medium Privacy Reader</h1>

      <form onSubmit={HandleForm}>
        <input 
          onChange={(e)=>setArticleURL(e.target.value)}
          name="url" 
          type="url" 
          className="u-full-width" 
          placeholder="https://medium.engineering/how-we-build-swiftui-features-in-the-medium-application-21323a960910" />
        <br />
        <button className="button button-primary"  type="submit">Read Article</button>
      </form>

    </div>
  );
};

export default Home;