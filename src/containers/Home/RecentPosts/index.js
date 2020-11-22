import React from 'react'
import './style.css'
import Card from "../../../components/UI/Card"
import imgTest1 from "../../../blogPostImages/memories-from.jpg"


/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img alt="" src={imgTest1} />
            </div>
            <div style={{textAlign:'center'}}>
                <span>Featured</span>
                <h2>Title</h2>
                <span>Posted on : july 21, 2020 by Mr chelli </span>
                <p> gulbhhhhhhhhhhhhhhhhhhllllllllllllllllllllllllll,,,,,,,,,,,,,,</p>
                <button> Read More </button>
            </div>             
        </Card> 
    </div>
  )
}

export default RecentPosts