import React from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, updateNewPostText} from "./redux/state";
import {stateType} from "../samurai-way-TS/src/redux/state";


let rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
      <App state={state} updateNewPostText={updateNewPostText} addPost={addPost}
      />,
      document.getElementById('root'));
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)
