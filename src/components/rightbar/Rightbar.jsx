import "./rightbar.css";
import { Users } from "../../pages/dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="bithdayImg" src="/assets/gift1.png" alt="" />
          <span className="birthdayText">
            <b>Polar Foster</b> and <b> 3 others friends</b> have a bithday
            today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar =()=>{
    return(
    <>
    <h4 className="rightbarTitle">User Information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfokey">City:</span>
        <span className="rightbarInfoVal">New York</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfokey">From:</span>
        <span className="rightbarInfoVal">Madrid</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfokey">Relationship:</span>
        <span className="rightbarInfoVal">Single</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="/assets/person/1.jpg" alt="" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="/assets/person/2.jpg" alt="" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="/assets/person/3.jpg" alt="" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="/assets/person/4.jpg" alt="" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="/assets/person/5.jpg" alt="" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="/assets/person/6.jpg" alt="" />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
    </div>
    </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  );
}
