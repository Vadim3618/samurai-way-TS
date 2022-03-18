import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {postsType} from "../../../redux/state";

type MyPostsType={
    posts:postsType[]
}

const MyPosts = (props:MyPostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
      <div className={s.postsBlock}>
          <h4>My posts</h4>
          <div>
              <div>
                  <textarea></textarea>
              </div>
              <div className={s.buttonAdd}>
                  <button>Add post</button>
              </div>
          </div>
          <div className={s.posts}>
              {postsElements}
          </div>
      </div>
    );
};

export default MyPosts;