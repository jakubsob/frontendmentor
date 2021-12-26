import React from "react";

function UserInfo(props) {
  const { username, user, joined, bio, img } = props.user.userInfo;
  return (
    <div className="user-info">
      <div className="user-info-grid-container">
        <div className="image">
          <img src={img} alt="User avatar should be seen here"></img>
        </div>
        <div className="username">
          <div className="username-full">{username}</div>
          <div className="username-at">{user}</div>
        </div>
        <div className="joined">{joined}</div>
        <div className="bio">{bio}</div>
      </div>
    </div>
  );
}

export default UserInfo;
