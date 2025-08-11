import useFetch from "../hooks/useFetch";

function PostList() {
  const {
    data: posts,
    loading,
    error
  } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error}</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
