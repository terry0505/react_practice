import { useState } from "react";

export default function PostFetcher() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      if (!res.ok) throw new Error("게시글을 불러오지 못했습니다.");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(erro.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h2>📰 게시글 불러오기</h2>
      <button onClick={handleFetchPosts}>게시글 가져오기</button>
      {loading && <p>로딩 중...</p>}\
      {error && <p style={{ color: "red" }}>에러: {error}</p>}
      <ul>
        {posts.map((post) => (
          <li key="post.id">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
