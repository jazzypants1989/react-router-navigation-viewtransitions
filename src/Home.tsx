import { insertMetaTags } from "./Meta"
import { useCount } from "./Context"

function Home() {
  document.title = "Home"
  insertMetaTags({
    name: "description",
    content: "This is the home page. THE HOME PAGE. THE BEST HOME PAGE.",
    openGraph: {
      title: "Home",
      description: "This is the home page. THE HOME PAGE. THE BEST HOME PAGE.",
    },
  })

  const { count, setCount } = useCount()

  return (
    <div>
      <h1>Home</h1>
      <p>
        THIS HOME PAGE FREAKING RULES. I mean, it's not that great, but it's
        better than some other home pages. You know the ones... the ones that
        don't have a link to the about page. Yeah, those ones.
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default Home
