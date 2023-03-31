import {
  lazy,
  useState,
  ComponentType,
  useCallback,
  useEffect,
  Suspense,
} from "react"

import { ContextProvider } from "./Context"
const NotFound = lazy(() => import("./NotFound"))

interface NavigationEvent extends Event {
  canIntercept: boolean
  intercept: (options: { handler: () => void }) => void
}

interface ViewDocument extends Document {
  startViewTransition: (callback: () => void) => void
}

function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [Component, setComponent] = useState<ComponentType<any> | null>(null)

  const navigationListener = useCallback((e: NavigationEvent) => {
    if (e.canIntercept) {
      e.intercept({
        async handler() {
          console.log("intercepted"),
            (document as ViewDocument).startViewTransition(() => {
              setPath(window.location.pathname)
            })
        },
      })
    }
  }, [])

  const addListener = useCallback(() => {
    // @ts-ignore
    navigation.addEventListener("navigate", navigationListener)
  }, [])

  const removeListener = useCallback(() => {
    // @ts-ignore
    navigation.removeEventListener("navigate", navigationListener)
  }, [])

  useEffect(() => {
    addListener()
    return () => {
      removeListener()
    }
  }, [addListener])

  useEffect(() => {
    setComponent(getComponent(path))
  }, [path])

  return (
    <ContextProvider>
      <Suspense fallback={<h1>Loading...</h1>}>
        {Component ? <Component /> : <NotFound />}
      </Suspense>
    </ContextProvider>
  )
}

function getComponent(path: string) {
  switch (path) {
    case "/":
      return lazy(() => import("./Home"))
    case "/about":
      return lazy(() => import("./About"))
    case "/cats":
      return lazy(() => import("./Cats"))
    default:
      return null
  }
}

export default App
