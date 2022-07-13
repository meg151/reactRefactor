import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';

const fetchBlog = async (id) => {
  const res = await fetch('http://localhost:8000/blogs/' + id);
  return res.json();
};

const BlogDetails = () => {
  const { data, status } = useQuery('blog', fetchBlog);

  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + data.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className="blog-details">
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
