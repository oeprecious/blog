import card1Image from "../assets/images/css.png"
import card2Image from "../assets/images/wireframe.png"
import card3Image from "../assets/images/localStorage.png"
import MyNoteImage from "../assets/images/myNote.png"

export const posts = [

    { id: 0, techStack: "REACT - FEATURED", heading: "Why my React state was not working, and the one-fix", date: "Oct • 31 4 min read", cardImage: MyNoteImage, fullContent: "A short note from building MyNotes: I was updating state directly like notes.push() instaed of setNotes([...notes]). React didn't re-render. The fix was using the spread operator" },

    {
        id: 1, techStack: "CSS", heading: "Making a navbar fixed on mobile", cardPara: "Why fixed worked on desktop but not on phones.", date: "Oct 31 • 3 min read", cardImage: card1Image, fullContent: `This one frustrated me. My navbar was sticky on desktop, but on my phone it kept scrolling away. 
    My CSS was:
    .navItems {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    }
    
    It worked on Chrome desktop, but not on mobile Chrome.
    
    Two things fixed it:
    1. I had a parent with overflow on my main. I had to fix the overflow in other for the sticky to work.` },

    {
        id: 2, techStack: "FIGMA", heading: "From wireframe to React in four steps", cardPara: "How I took Lume Jewels from design to code.", date: "Oct 31 • 3 min read", cardImage: card2Image, fullContent: `For Lume Jewels, I started in Figma before I wrote any code. 
    
    My 4 steps:
    1. Wireframe: I drew low fidelity screens for product list, product details, checkout, and sucess. Just boxes and images, no color.
    
    2. Design System: I picked color, fonts, moved them to style guide page, and made components like buttons, navbar, and logo. This saved me time later.
    
    3. Prototype: I linked the screens in Figma so I could click the flow. I saw that my checkout had too many fileds, so I simplified it.
    
    4. Code: I exported the assets and built it in React. Because the layout as already decided, I just focused on state, form validation, responsive design with media query, and deployment to GitHub page.` },

    {
        id: 3, techStack: "JAVASCRIPT", heading: "A beginner guide to localStorage", cardPara: "Saving notes in the browser so they stay after a refresh", date: "Oct 31 • 4 min read", cardImage: card3Image, fullContent: `I wanted my notes to stay after refresh. Without localStorage, everything disappeared.
        
    How localStorage works:
    
    1. Save:
    localStorage.setItem("notes", JSON.stringify(notes))
    
    You must use JSON.stringify because localStorage only stores strings.
    
    2. Load:
    const savedNotes = JSON.parse(localStorage.getItems("notes"))
    
    JSON.parse converts it back to an array.
    
    3. Where to put it in React:
    I used useEffect:
    
    useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    
    This runs every time notes changes.
    
    And for loading on the first render:
    
    useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? 
    JSON.parse(savedNotes) : [ ]
    })
    
    Common mistakes I made: forgetting to check if saved is null. If you do JSON.parse(null)you get error, so always check first.
    
    Now my MyNotes app remembers everything even after closing the browers.` }

]



