const BlogList = (props) => {
    const blogs = props.blogs
    console.log(props.blog);
    return ( 
        <div className ="blog-list">
  
          {blogs.map((blog)=>(
            <div class = "blogs">
            <h2>{blog.title}</h2>
            <h3>{blog.author}</h3>
        </div>
          ))}
      </div>

     );
}
 
export default BlogList;