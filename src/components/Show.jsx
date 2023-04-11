import useSWR from 'swr';
import clienteAxios from '../config/axios';

export default function Posts() {
  const token = localStorage.getItem('AUTH_TOKEN');
  const fetcher = () =>
    clienteAxios('/api/posts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) =>
      response.data.map((post) => ({
        title: post.title,
        description: post.description,
      }))
    );

  const { data, error, isLoading } = useSWR('/api/posts', fetcher, {
    refreshInterval: 10000,
  });

  if (isLoading) return 'Loading...';
  if (error) return 'Error while fetching posts';

  return (
    <div>
      <h1 className='text-4xl font-black'>Posts</h1>
      <p className='text-2xl my-10'>Displaying a list of posts.</p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {data?.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
