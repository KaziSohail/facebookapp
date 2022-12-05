import "./sidebar.css"
import {RssFeed,Chat,PlayCircle,People,Bookmark,Help,Work,EmojiEvents,School} from "@mui/icons-material"
import {Users} from "../../pages/dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
         <RssFeed className="sidebarIcon"/>
         <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
         <Chat className="sidebarIcon"/>
         <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
         <PlayCircle className="sidebarIcon"/>
         <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
         <People className="sidebarIcon"/>
         <span className="sidebarListItemText">People</span>
          </li>
          <li className="sidebarListItem">
         <Bookmark className="sidebarIcon"/>
         <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
         <Help className="sidebarIcon"/>
         <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
         <Work className="sidebarIcon"/>
         <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
         <EmojiEvents className="sidebarIcon"/>
         <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
         <School className="sidebarIcon"/>
         <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
            {Users.map(u=>
              <CloseFriend kery={u.id}user={u}/>)}
        </ul>
      </div>
      
    </div>
  )
}
