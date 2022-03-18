import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import {stateType} from "./redux/state";

type AppType = {
    state: stateType
}

function App(props: AppType) {

    return (
      <BrowserRouter>
          <div className={'app-wrapper'}>
              <Header/>
              <Navbar/>
              <div className={'app-wrapper-content'}>
                  <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                  <Route path={'/profile'} render={() => <Profile posts={props.state.profilePage.posts}/>}/>
                  <Route path={'/music'} render={() => <Music/>}/>
                  <Route path={'/news'} render={() => <News/>}/>
                  <Route path={'/settings'} render={() => <Settings/>}/>
              </div>
          </div>
      </BrowserRouter>
    );
}

export default App;
