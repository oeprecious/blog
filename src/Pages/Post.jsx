import { useParams, Link } from "react-router"

const Post = ({allPosts}) => {

  const { id } = useParams()
  
  const post = allPosts.find((p) => String(p.id) === String(id))

  if (!post) return <div style={{ padding: 20 }}>Post not found </div>

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", overflowWrap: "anywhere" }}>
      <Link to="/" style={{ textDecoration: "none", color: "#3c42f7dc"}}>← Back to home</Link>
      <img src={post.cardImage} alt="" style={{ width: "100%", margin: "2rem 0" }} />
      <p>{post.techStack}</p>
      <h1>{post.heading}</h1>
      <p>{post.date}</p>
      <br />
      <p>{post.fullContent}</p>
    </div>
  )
}

export default Post