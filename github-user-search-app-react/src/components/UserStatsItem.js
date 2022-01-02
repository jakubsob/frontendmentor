import React from "react";

function UserStatsItem({ name, value }) {
  return (
    <div className="user-stats-item">
      <div className="user-stats-name">{name}</div>
      <div className="user-stats-value">{value}</div>
    </div>
  );
}

export default UserStatsItem;
