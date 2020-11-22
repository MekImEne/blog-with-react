import React, {useEffect, useState} from 'react'
import Card from '../UI/Card'
import "./style.css"
import blogPost from "../../data/blog.json"
/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

  const [post, setPost] = useState({});
  const [slug, setSlug] = useState('');

  useEffect(()=> {
    const slug = props.match.params.slug;
    const post = blogPost.data.find(post => post.slug == slug);
    setPost(post);
    setSlug(slug);
  }, [post, props.match.params.slug]);

  return(
        <div className="blogPostContainer">
          <Card>
            <div className="blogHeader">
              <span className="blogCategory">{post.blogCategory}</span>
              <h1 className="postTitle">{post.blogTitle}</h1>
              <span className="postedBy">Posted on {post.postedOn} by {post.author}</span>
            </div>

            <div className="postImageContainer">
              <img alt="PostImage" src={post.blogImage} /> 
            </div>

            <div className="postContent">
              <h3> {post.blogTitle} </h3>
              <p> {post.blogText} </p>
            </div>

          </Card>
        </div> 
   )

 } 

export default BlogPost