import React from 'react';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';
import "./style.css";
/**
* @author
* @function Post
**/

const Post = (props) => {

  return(
      <Layout>
        <BlogPost {...props} />
      </Layout> 
   )

 }

export default Post