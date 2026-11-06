import { useParams, Link } from "react-router"
import { posts } from "../data/posts.jsx"

const Post = () => {
  const { id } = useParams()

  const post = posts.find((p) => String(p.id) === String(id))

  if (!post) return <div style={{ padding: 20 }}>Post not found </div>

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <Link to="/" style={{ textDecoration: "none", color: "#3c42f7dc" }}>← Back to home</Link>
      <img src={post.cardImage} alt="" style={{ width: "100%", margin: "20px 0" }} />
      <p>{post.techStack}</p>
      <h1>{post.heading}</h1>
      <p>{post.date}</p>
      <br />
      <p>{post.fullContent}</p>
    </div>
  )
}

export default Post