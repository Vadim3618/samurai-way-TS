import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../redux/state";


type ProfileType={
    posts:postsType[]
}

const Profile = (props:ProfileType) => {

    return (
      <div className={s.profile}>
          <ProfileInfo/>
          <MyPosts posts={props.posts}/>
      </div>
    );
};

export default Profile;