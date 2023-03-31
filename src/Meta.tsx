type MetaTags = {
  name: string
  content: string
  openGraph?: {
    title: string
    description: string
  }
}

export function insertMetaTags(metaTags: MetaTags) {
  removeMetaTags()
  const head = document.getElementsByTagName("head")[0]
  const meta = document.createElement("meta")
  meta.name = metaTags.name
  meta.content = metaTags.content
  head.appendChild(meta)
  if (metaTags.openGraph) {
    const ogTitle = document.createElement("meta")
    ogTitle.name = "og:title"
    ogTitle.content = metaTags.openGraph.title
    head.appendChild(ogTitle)
    const ogDescription = document.createElement("meta")
    ogDescription.name = "og:description"
    ogDescription.content = metaTags.openGraph.description
    head.appendChild(ogDescription)
  }
}

export function removeMetaTags() {
  const head = document.getElementsByTagName("head")[0]
  const meta = document.getElementsByTagName("meta")
  let i = meta.length
  while (i--) {
    head.removeChild(meta[i])
  }
}
