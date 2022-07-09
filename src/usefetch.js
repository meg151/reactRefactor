import { useState, useEffect } from 'react';

const useFetch = () => {
  const [data, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);
};

export default useFetch;
