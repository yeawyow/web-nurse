
import React from 'react'
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Palette } from '@material-ui/icons';


const posts = [

    {
     title: "My first post",
     excerpt: "This is my first post with more content inside",
     image: "http://dss.snru.ac.th/wp-content/uploads/2021/02/IMG_3615-1536x1024.jpg"
    },
   
    {
     title: "My second post",
     excerpt: "This is my second post with more content inside",
     image: "http://dss.snru.ac.th/wp-content/uploads/2020/01/IMG_6726.jpg"
    },
   
    {
     title: "My third post",
     excerpt: "This is my third post with more content inside",
     image: "http://dss.snru.ac.th/wp-content/uploads/2020/08/IMG_2852.jpg"
    },
   
    
   
   
   ]
  
   const useStyles = makeStyles({
    root: {
     display:"flex",
     borderRadius:16,
     boxShadow:'0 0 24px 0 rgba(0,0,0,0,12)',
     
     //backgroundColor:Palette.common.white,
    },
    imageBox:{
      flexBasis:'100%'  
    },
    imageWrapper:{
       height:0,
       paddingBottom:'75%',
       position:'relative',
      // borderRadius:12,
       overflow:'hidden'

    },
    img:{
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        objectFit:'cover'

    }
  });
export default function Activity() {
    const classes = useStyles();
    return (
        <div>
  {posts.map(post => (
     <article  item key={post.title} className={classes.root} >
         <div className={classes.imageBox}>
               <div className={classes.imageWrapper}>
           <img className={classes.img} src={post.image}/>
         </div>
         </div>
       
         <div>
             <h4>
             {post.title}
             </h4>
             <p>
              {post.excerpt}
             </p>
         </div>
     </article>
        ))}
        </div>
      
    )
}
