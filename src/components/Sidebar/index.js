import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom"
import Card from '../UI/Card'
import "./style.css"
import img from "../../assets/images/about-us.jpg"
import blogPost from "../../data/blog.json"

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return(
    <div className="sidebarContainer">
      <Card style={{marginBottom:'20px'}}>
        <div className="cardHeader">
          <span>About Us</span>
          <div className="profileImageContainer">
            <img src= {img} alt="aboutUs" />
          </div>
          <div className="cardBody">
            <p className="personalBio">My name is MEKIDECHE Imane, I'm a software developer specialization in Frontend developement</p>
          </div>
        </div>
      </Card>

      <Card style={{marginBottom:'20px'}}>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>

      <Card>
        <div className="cardHeader">
          <span>Recent Posts </span>
        </div>
        <div className="recentPosts">
          {
            posts.map(post=> {
              return(
                <NavLink key={post.id} to={'/post/'+post.id}>
                  <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                  </div>
                </NavLink>
              );
            })
          }
        </div>
      </Card>
    </div>
   )

 }

export default Sidebar