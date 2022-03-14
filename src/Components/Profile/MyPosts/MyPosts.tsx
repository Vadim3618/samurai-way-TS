import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
        <h4>My posts</h4>
      <div>
          <div><textarea></textarea></div>
          <div className={s.buttonAdd}>
              <button>Add post</button>
          </div>
      </div>
      <div className={s.posts}>
        <Post message={'Hi how are you?'} like={20}/>
        <Post message={"It`s my first post"} like={5}/>
      </div>
    </div>
  );
};

export default MyPosts;