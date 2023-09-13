import React from 'react'
import Profile from "./Profile";
import {connect} from 'react-redux'
import compose from "redux/src/compose";
import {
    getProfileStatus,
    getUserProfile, setProfileContacts,
    setProfileStatus,
    setStatus, setUserPhoto,
    setUserProfile,
    setUserProfilePost
} from "../../redux/profile-reduser";
import Preloader from "../Utils/Preloader";
import {useParams} from "react-router-dom";

const withNavigation = (Component) => {
    let WithNavigationFunction = (props) => {
        return <Component {...props}
                          userId={useParams().id}
        />
    }
    return WithNavigationFunction
}

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(props) {
      this.props.setUserProfile(this.props.userId)
        this.props.getProfileStatus(this.props.userId)

    }

    render() {

        return <div>
            {this.props.isInitial == false ? <Preloader/> :
                <Profile value={this.props.profileId} fullName={this.props.fullName}
                         profileInfo={this.props.profileInfo}
                         getUserProfile={this.props.getUserProfile} setUserProfile={this.props.setUserProfile}
                         postsData={this.props.postsData}
                         setUserProfilePost={this.props.setUserProfilePost} status={this.props.status}
                         setStatus={this.props.setProfileStatus} setProfileContacts={this.props.setProfileContacts}
                         setUserPhoto={this.props.setUserPhoto} isInitial={this.props.isInitial}/>}

        </div>
    }
}

const mapStateToProps = (state) => {

    return {
        postsData: state.profilePage.postsData,
        profileId: state.profilePage.profileId,
        fullName: state.profilePage.fullName,
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.profileStatus,
        isInitial: state.profilePage.isInitial
    };
}
export default compose(connect(mapStateToProps, {
    getProfileStatus,
    getUserProfile,
    setUserProfile,
    setUserProfilePost,
    setProfileStatus,
    setProfileContacts,
    setUserPhoto
}), withNavigation)(ProfileContainer)