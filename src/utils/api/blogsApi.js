import axios from 'axios';

const blogsApi = axios.create({
  baseURL: 'https://some-domain.com/api/',
  headers: {
    'Content-type': 'application/json',
  },
});

export const fetchBlog = async () => {
  const { data } = await blogsApi.get('blogs', {
    params: {
      id,
    },
  });
  return data;
};
