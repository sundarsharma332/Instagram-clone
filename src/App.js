import React from 'react';
import './App.css';
import Post from './Post'
import { useState,useEffect } from 'react';
import { database } from './firebase'
import Stories from './Stories'
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { IconButton } from '@material-ui/core';


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    database.collection('posts').onSnapshot(snapshot =>{

      setPosts(snapshot.docs.map(doc =>({
        id:doc.id,
        post: doc.data()})));
    })
  }, [])
  return (
    <div className="app">
      <div className="app__header">
        
        <img className="app__headerimage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt=""></img>
        
        
        <Stories/>

         {
           posts.map(({id, post}) => (
             <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
           ))
         }
      </div>
      
      
    </div>
  );
}

export default App;
