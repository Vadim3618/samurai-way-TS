import ReactDOM from "react-dom";
import App from "./App";
import {addPost, stateType, updateNewPostText} from "./redux/state";
import React from "react";


export let rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
      <App state={state} updateNewPostText={updateNewPostText} addPost={addPost}
      />,
      document.getElementById('root'));
}