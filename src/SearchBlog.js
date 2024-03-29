import useFetch from "./useFetch";
import BlogList from "./BlogList";
import { useState } from "react";

const SearchBlog = () => {
  const [title, setTitle] = useState('');
  const {data: blogs} = useFetch('http://localhost:8000/blogs');
  const [filteredBlogs, setFilteredBlogs] = useState(null);

  const handleClick = () => {
    const fb = (blogs.filter((blog) => {
      return blog.title.toLowerCase().includes( title.toLowerCase());
    }))
    
    setFilteredBlogs(fb);
  }

  return (
    <div className="search-blog-main"> 
      <h2 id='search-blog-title'> Search Blog </h2>
      <div className="search-blog">
        <input 
        type="text" 
        placeholder="Enter any blog title"
          value={ title }
          onChange={ (e) => { setTitle(e.target.value); } }
          onKeyDown={(e) => { e.key === 'Enter' && handleClick(); }}
        />
        <button onClick={ handleClick }>Search</button>
      </div>

      <div className="search-result">
        {filteredBlogs && <BlogList blogs={filteredBlogs} title={`${filteredBlogs.length} Blog(s) Found`}/> }
      </div>
    </div>
  );
}
 
export default SearchBlog;