import "./UserProfile.css";
import Nav from "../Nav/Nav";
import {
  deleteUserFailure,
  deleteUserSuccess,
  signOutUserStart,
} from "../../redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
const UserProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };
  return (
    <>
      <Nav />
      <div className="user-profile">
        <img src={currentUser.avatar} alt="" />
        <p>Welcome {currentUser.username}</p>
        <button onClick={handleSignOut}>Logout</button>
        <div className="start-stop">
          <button id="start">Start Script</button>
          <button>Stop Script</button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
