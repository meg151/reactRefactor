import BlogList from 'components/BlogList/BlogList';
import useFetch from 'hooks/useFetch';
import { useQuery } from 'react-query';
import { fetchBlog } from 'utils/api/blogsApi';

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');

  // const { isLoading, isError, data, error } = useQuery(
  //   'blogs',
  //   () => fetchBlogs
  // );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
