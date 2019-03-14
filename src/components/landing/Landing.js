import React from 'react';
import style from './Home.css';
import PopularTweets from '../../containers/PopularTweets';
export default function Landing() {
  return (
    <main className={style.main}>
      <header className={style.header}>
        <section className={style.profile}>
          <figure>
            <img src="https://pbs.twimg.com/media/C8QsNInXUAAyjZQ.jpg" alt="user avatar" />
            <h3>T_on_A</h3>
          </figure>
        </section>
        <section className={style.post}>
          <label>Post a Tweet</label>
          <input type="text box" placeholder='Tweet at me' />
          <button>Tweet</button>
        </section>
      </header>
      <PopularTweets />
    </main>
  );
}