import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'oh yeah', author: 'yoda', id: 1 },
    {
      title: 'obiwan kenobi freakin cool',
      body: 'last episode..',
      author: 'ben',
      id: 2,
    },
    { title: 'this is the way..', body: 'so cool', author: 'mando', id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === 'ben')}
        title="ben's blogs"
      />
    </div>
  );
};

export default Home;
