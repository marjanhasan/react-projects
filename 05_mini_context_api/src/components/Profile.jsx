import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <p>Please Login!</p>;
  return <p>{user.username}</p>;
};

export default Profile;
