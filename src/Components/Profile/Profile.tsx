import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";


type ProfileType = {
    profilePage: profilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfileType) => {

    return (
      <div className={s.profile}>
          <ProfileInfo/>
          <MyPosts addPost={props.addPost}
                   updateNewPostText={props.updateNewPostText}
                   newPostText={props.profilePage.newPostText}
                   posts={props.profilePage.posts}/>
      </div>
    );
};

export default Profile;