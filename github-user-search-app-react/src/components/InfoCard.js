import React from "react";
import UserInfo from "./UserInfo";
import UserStats from "./UserStats";
import UserContact from "./UserContact";

function InfoCard(props) {
  return (
    <div className="card">
      <div className="card-grid-container">
        <UserInfo user={props.user}></UserInfo>
        <UserStats user={props.user}></UserStats>
        <UserContact user={props.user}></UserContact>
      </div>
    </div>
  );
}

export default InfoCard;
