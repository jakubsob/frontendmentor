import React from "react";
import iconLocation from "../assets/icon-location.svg";
import iconCompany from "../assets/icon-company.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconWebsite from "../assets/icon-website.svg";
import UserContactItem from "./UserContactItem";

function UserContact(props) {
  const { location, website, twitter, company } = props.user.contact;
  return (
    <div className="contact-table-container">
      <UserContactItem icon={iconLocation} content={location}></UserContactItem>
      <UserContactItem icon={iconWebsite} content={website}></UserContactItem>
      <UserContactItem icon={iconTwitter} content={twitter}></UserContactItem>
      <UserContactItem icon={iconCompany} content={company}></UserContactItem>
    </div>
  );
}

export default UserContact;
