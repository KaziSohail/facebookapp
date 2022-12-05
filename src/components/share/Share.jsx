import "./share.css"
import React from 'react'
import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material"
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpg" alt="" />
          <input placeholder="What's in your mind Kazi?" className="shareInput" />
        </div>
        <hr  className="shareHr"/>
        <div className="shareBottom">
          <div className="shareOptions">
          <div className="shareOption">
           <PermMedia htmlColor="Tomato" className="shareIcon"/>
            <span className="shareoptiontext">Photo or Video</span>
          </div>
          <div className="shareOption">
           <Label htmlColor="Blue" className="shareIcon"/>
            <span className="shareoptiontext">Tag</span>
          </div>
          <div className="shareOption">
           <Room htmlColor="Green" className="shareIcon"/>
            <span className="shareoptiontext">Location</span>
          </div>
          <div className="shareOption">
           <EmojiEmotions htmlColor="Goldenrod" className="shareIcon"/>
            <span className="shareoptiontext">Feelings</span>
          </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
