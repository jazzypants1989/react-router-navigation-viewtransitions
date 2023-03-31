import { useCount } from "./Context"
import { insertMetaTags } from "./Meta"

function NotFound() {
  document.title = "404"
  insertMetaTags({
    name: "description",
    content: "This page doesn't exist. STOP LOOKING AT IT.",
    openGraph: {
      title: "404",
      description: "This page doesn't exist. STOP LOOKING AT IT.",
    },
  })
  const { count, setCount } = useCount()
  return (
    <div>
      <h1>404</h1>
      <p>
        This page doesn't exist. I mean, it does, but it doesn't exist in the
        way that you're looking for. You know what I mean? Like, you're looking
        for something that you can interact with, but this page is just a bunch
        of pixels on a screen.
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default NotFound
