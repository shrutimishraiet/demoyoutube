import { useState } from "react";
import BlogList from "./bloglist";
const Home = () => {
  const titles = "All Blogs";

  const [blogs, blogState] = useState([
      {title:'My name is shruti',body:'this is healrthnkh',author:'bnbknknk jhgjn bj'},
      {title:'My name is shruti',body:'this is healrthnkh',author:'bnbknknk jhgjn bj'},
      {title:'My name is shruti',body:'this is healrthnkh',author:'bnbknknk jhgjn bj'}

      ])
    return ( 

        <div className ="home">
          <b><h2 style = {{color: "red"}}>{titles}</h2></b>
         <BlogList blogs = {blogs} title = "Blog-List"/>
         <button>Delete Blog</button>
      </div>
         );
       
}
export default Home;