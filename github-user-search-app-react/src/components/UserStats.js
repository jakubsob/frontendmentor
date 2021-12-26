import React from "react";
import UserStatsItem from "./UserStatsItem";

function UserStats(props) {
  const { repos, followers, following } = props.user.stats;
  return (
    <div className="stats">
      <UserStatsItem name="Repos" value={repos}></UserStatsItem>
      <UserStatsItem name="Followers" value={followers}></UserStatsItem>
      <UserStatsItem name="Following" value={following}></UserStatsItem>
    </div>
  );
}

export default UserStats;
