import React from "react";

function isValidURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

function parseURL(str) {
  return isValidURL(str) ? <a href={str}>{str}</a> : str;
}

function parseNotAvailable(str) {
  return str === "" ? "Not available" : str;
}

function isDisabled(str) {
  return str === "Not available" ? "disabled" : "";
}

function UserContactItem(props) {
  let content = parseURL(props.content);
  content = parseNotAvailable(content);
  const disabled = isDisabled(content);
  return (
    <span className={`user-contact-item ${disabled}`}>
      <span className="item-icon">
        <img src={props.icon}></img>
      </span>
      {content}
    </span>
  );
}

export default UserContactItem;
