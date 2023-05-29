import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="rd__blog section__padding" id="blog">
    <div className="rd__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="rd__blog-container">
      <div className="rd__blog-container_groupA">
        <Article imgUrl={blog01} date="March 26, 2023" text="Survival skills are a must. Here's what we did and learned at Suvivor Camp." />
      </div>
      <div className="rd__blog-container_groupB">
        <Article imgUrl={blog02} date="March 26, 2023" text="Survival skills are a must. Here's what we did and learned at Suvivor Camp." />
        <Article imgUrl={blog03} date="March 26, 2023" text="Survival skills are a must. Here's what we did and learned at Suvivor Camp." />
        <Article imgUrl={blog04} date="March 26, 2023" text="Survival skills are a must. Here's what we did and learned at Suvivor Camp." />
        <Article imgUrl={blog05} date="March 26, 2023" text="Survival skills are a must. Here's what we did and learned at Suvivor Camp." />
      </div>
    </div>
  </div>
);

export default Blog;
