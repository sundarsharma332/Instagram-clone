import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import SendIcon from '@material-ui/icons/Send';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import IconButton from '@material-ui/core/IconButton';


function Post({username, imageUrl,caption}) {
    return (
        <div className="post">
            <div className="post__header"><Avatar
            className="post__avatar"
            alt='SuSh'
            src={imageUrl}/>
            <h3>{username}</h3></div>
            
            <img className="post__image" src={imageUrl}></img>
            <div className="icons__list">

            <IconButton className="icon__li"><FavoriteBorderIcon fontSize="large"/></IconButton>
            <IconButton className="icon__li"><SendIcon fontSize="large"/></IconButton>
            <IconButton className="icon__li"><ChatBubbleOutlineRoundedIcon fontSize="large"/></IconButton>
            <IconButton className="icon__li"><SaveAltIcon fontSize="large"/></IconButton>
            </div>
            


            <h4 className="post__text"><strong>{username}</strong> {caption} <br/><storng>view all comments</storng></h4>
           
        </div>
    )
}

export default Post
