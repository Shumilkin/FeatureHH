import * as React from "react";
import s from './profile.module.css'
import ProfilePostsForm from "./Form/ProfilePostsForm";
import Post from "./Status/ProfilePosts/Post";
import ProfilePost from "./Status/ProfilePosts/Post";

const ProfilePosts = (props) => {
    const RenderList = props => {

        return (<div>
                {props.data.postsData.map(item => (
                    <ProfilePost postText={item.postText} likesCount={item.likesCount}/>
                ))}
            </div>
            /*  <ul>
                  {props.data.postsData.map(item => (
                      <li key={item.id}>{item.postText} {item.likesCount}</li>
                  ))}
              </ul>*/
        );
    };

    return <div classname={s.area}>
        {/*<ProfilePostsForm data={props}/>*/}
        <RenderList data={props}/>

    </div>
}

export default ProfilePosts
