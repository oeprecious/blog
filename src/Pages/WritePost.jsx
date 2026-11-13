import "./WritePost.css"
import FilteredItems from "../Components/FilteredItems"
import { useState } from "react"


const loadDraft = () => {
    try {
        const saved = localStorage.getItem("myDrafts")
        return saved ? JSON.parse(saved) : null
    } catch {
        return null
    }
}

const WritePost = ({ addPosts, addDrafts }) => {

    const [initialDraft] = useState(loadDraft)

    const [title, setTitle] = useState(initialDraft?.title || "")
    const [postDescription, setPostDescription] = useState(initialDraft?.postDescription || "")
    const [errorMessage, setErrorMessage] = useState("")


    // Drafts function
    const handleClick = () => {
        const draft = {
            title: title.trim(),
            postDescription: postDescription.trim(),
            topic: topic,
            coverImage: coverImage
        }

        if (draft.title === "" && draft.postDescription === "") {
            setErrorMessage("Write a title or some content first")
            return
        }

        try {
            localStorage.setItem("myDrafts", JSON.stringify(draft))
            addDrafts(title.trim(), topic, coverImage, postDescription.trim())
            setErrorMessage("Draft saved")
            setTimeout(() => setErrorMessage(""), 3000)
        } catch {
            setErrorMessage("Draft is too large. Try a smaller image.")
        }
    }

    const handleSubmit = (event) => {

        event.preventDefault()

        const userTitleInput = title.trim()
        const userPostDescriptionInput = postDescription.trim()

        if (userTitleInput === "" || userPostDescriptionInput === "" || topic === "" || coverImage === "") {
            setErrorMessage("All fields are required")
            return
        } else {
            addPosts(userTitleInput, topic, coverImage, userPostDescriptionInput)
            localStorage.removeItem("myDrafts")
        }
        setErrorMessage("")
        setTitle("")
        setPostDescription("")
        setTopic("")
        setCoverImage("")
    }


    //   Image state
    const [coverImage, setCoverImage] = useState(initialDraft?.coverImage || "")

    const [imageError, setImageError] = useState("")

    const [topic, setTopic] = useState(initialDraft?.topic || "All")

    const handleFile = (file) => {
        if (!file) {
            return
        }
        if (!file.type.startsWith("image/")) {
            setImageError("Please choose an image file")
            return
        }
        if (file.size > 1000000) {
            setImageError("Image must be under 1MB")
            return
        }

        const reader = new FileReader()
        reader.onload = () => {
            setCoverImage(reader.result)
            setImageError("")
        }
        reader.readAsDataURL(file)
    }

    const handleDragOver = (event) => {
        event.preventDefault()
    }

    const handleDrop = (event) => {
        event.preventDefault()
        handleFile(event.dataTransfer.files[0])
    }

    const handleInputChange = (event) => {
        handleFile(event.target.files[0])
    }

    let dropContent = ""
    if (coverImage) {
        dropContent = <img src={coverImage} alt="Cover preview" className="coverPreview" />
    } else {
        dropContent = <p>Drop an image here or browse</p>
    }

    return (
        <>

            <div className="writepostCard">
                <p id="firstPara">new post</p>
                <h1>Write a post</h1>

                <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="text">Title
                            <input type="text" id="text" placeholder="Give your post a title" value={title} onChange={event => setTitle(event.target.value)} />
                        </label>

                        <div className="filteredItems">
                            <p>Topic</p>
                            <FilteredItems activeTopic={topic} setActiveTopic={setTopic} />
                        </div>

                        <label htmlFor="cover" className="dropArea" onDrag={handleDragOver} onDrop={handleDrop}>
                            {dropContent}

                            <input type="file" name="file" id="cover" accept="image/*" onChange={handleInputChange} hidden />
                        </label>
                        <p>{imageError}</p>

                        <div className="post">
                            <label htmlFor="post">Post
                                <textarea name="post" id="post" placeholder="Write your post" value={postDescription} onChange={event => setPostDescription(event.target.value)}></textarea>
                            </label>
                        </div>

                        <p>{errorMessage}</p>

                        <div className="formBtn">
                            <button type="submit" id="publishBtn">Publish</button>
                            <button type="button" onClick={handleClick} id="saveDraftBtn">Save draft</button>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default WritePost