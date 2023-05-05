import { NavLink } from 'react-router-dom';
import {blogData} from '../../Data/blogData';

export const BlogPage = () => {
  return (
    <>
    <h1>Blog Page</h1>
    <ul>
      {
        blogData.map(post=>(
          <BlogLink post={post} key={post.title}/>
        ))
      }
    </ul>
    </>
  );
}

const BlogLink = ({post}) => {
  return (
    <li>
      <NavLink to={`/blog/${post.slug}`} >{post.title}</NavLink>
    </li>
  )
}
