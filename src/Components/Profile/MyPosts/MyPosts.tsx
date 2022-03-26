import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {postsType} from "../../../redux/state";

type MyPostsType = {
    posts: postsType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>() //переменная ссылающаяся на конкретную эрию

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value
        if (text) props.updateNewPostText(text)
    }

    return (
      <div className={s.postsBlock}>
          <h4>My posts</h4>
          <div>
              <div>
                  <textarea onChange={onPostChange}
                            ref={newPostElement}
                            value={props.newPostText}/>
              </div>
              <div className={s.buttonAdd}>
                  <button onClick={addPost}>Add post</button>
              </div>
          </div>
          <div className={s.posts}>
              {postsElements}
          </div>
      </div>
    );
};

export default MyPosts;