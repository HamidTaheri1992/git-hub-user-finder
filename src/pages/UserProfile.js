import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import UserCard from "../components/userCard";
import SkeletonCard from "../components/skeleton";

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error Finding Users :", error);
      });
  }, [username]);

  return (
    <Grid textAlign={"center"}>
      {userData ? (
        <UserCard
          loginName={userData.login}
          avatar={userData.avatar_url}
          following={userData.following}
          followers={userData.followers}
          publicRepos={userData.public_repos}
          publicGists={userData.public_gists}
          name={userData.name}
          location={userData.location}
          bio={userData.bio}
          company={userData.company}
          website={userData.blog}
          hireable={userData.hireable}
        />
      ) : (
        <SkeletonCard />
      )}
    </Grid>
  );
}

export default UserProfile;
