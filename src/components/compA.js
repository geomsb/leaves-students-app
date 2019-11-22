// components/ComponentA.js
import React from 'react';
import ComponentB from './ComponentB.js';

const ComponentA = () => {
    tweet = System.FetchTweet

    return (
      //like button
      <ComponentB numericValue=tweet.likes callbackFunc=tweet.likeThisTweet />
      //retweet button
      <ComponentB numericValue=tweet.retweets callbackFunc=tweet.retweetThisTweet/>
    );
};

export default ComponentA;