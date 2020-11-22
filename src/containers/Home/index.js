import React from "react";
import "./style.css" ;
import Card from "../../components/UI/Card"
import Sidebar from "../../components/Sidebar/index"
import imgTest1 from "../../blogPostImages/memories-from.jpg"
import imgTest2 from "../../blogPostImages/fitness-blog-post.jpg"
import imgTest3 from "../../blogPostImages/beautiful-&-simple.jpg"
import imgTest4 from "../../blogPostImages/affection-baby-baby-girl-beautiful-377058.jpg"
import RecentPosts from "./RecentPosts";
import blogData from "../../data/blog.json"
import Layout from "../../components/Layout";

const SideImage = props => {
    return (
        <div style={{height:`${props.height}px`}}>
            <img alt="" src={props.src}/>
        </div>
    );
}

const ImageGallary = props => {
    return (
        <div className="gallaryPost" style={props.gallaryStyle} >    
            <section style={{width: props.largeWidth}} >
                <div className="mainImageWrapper">
                    {/* <img alt="" src={require('../../blogPostImages/')+ props.imagesArray[0]} /> */}
                    <img alt="" src={imgTest1} />
                </div>    
            </section>
            <section className="sideImageWrapper" style={{width:props.smallWidth}} >
                {
                    props.imagesArray.map(image =>
                        <SideImage
                            height={props.sideImageHeight}
                            // src={require('../../blogPostImages/')+ image}
                            src={imgTest2}
                        />  
                    )
                }
            </section>
        </div>
    );
}

const Home = props => {

    const gallaryHeight = 450;
    const gallaryStyle = {
        height : gallaryHeight+'px',
        overflow : 'hidden'
    }

    const sideImageHeight = gallaryHeight /3;

    const imgArr= blogData.data.map(post=> post.blogImage);

    return (
        <div>
            <Card>
                <ImageGallary 
                    largeWidth="70%"
                    smallWidth="30%"
                    gallaryStyle={gallaryStyle}
                    sideImageHeight={sideImageHeight}
                    imagesArray = {imgArr}
                />
            </Card>
            <Layout>
                <RecentPosts style={{width:'70%'}}/>
            </Layout>
        </div>
    );
}

export default Home;