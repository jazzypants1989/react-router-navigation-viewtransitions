import { useCount } from "./Context"
import { insertMetaTags } from "./Meta"
import reactLogo from "./assets/react.svg"

function About() {
  document.title = "About"
  insertMetaTags({
    name: "description",
    content: "This is the about page. JUST A LITTLE ABOUT PAGE.",
    openGraph: {
      title: "About",
      description: "This is the about page. JUST A LITTLE ABOUT PAGE.",
    },
  })

  const { count, setCount } = useCount()
  return (
    <div>
      <h1>About</h1>
      <p>Okay, this about page sucks. I can admit that much. I tried, okay!?</p>
      <div>
        <span>Here's a picture.</span>
        <img src={reactLogo} height="200" width="200" alt="React Logo" />
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default About
