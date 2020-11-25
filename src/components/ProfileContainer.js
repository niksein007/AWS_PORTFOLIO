import profile_pic from "../pictures/profilepic.png";

function ProfileContainer() {

  return (
    <div id="ProfileContainer">
        <img src={profile_pic} alt="" className="profile_pic" />
      </div>
  );
}
export default ProfileContainer;