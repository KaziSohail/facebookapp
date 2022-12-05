import "../topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Kazisocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends, Post or Video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <div className="topbarIconeBadge">1</div>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <div className="topbarIconeBadge">3</div>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <div className="topbarIconeBadge">5</div>
          </div>
        </div>
        <img src="/assets/person/1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
