// Format date like: 21st August 2025
export function formatDate(dateString) {
  const date = new Date(dateString)

  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()

  const daySuffix = getDaySuffix(day)

  return `${day}${daySuffix} ${month} ${year}`
}

function getDaySuffix(day) {
  if (day > 3 && day < 21) return 'th'

  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

// Build nested headings structure (H2 → H3)
export const getNestedHeadings = (headingElements) => {
  const nestedHeadings = []

  headingElements.forEach((heading) => {
    const title = heading.textContent || ''
    const id = heading.id

    if (!title) return

    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [] })
    }

    if (heading.nodeName === 'H3') {
      if (nestedHeadings.length > 0) {
        nestedHeadings[nestedHeadings.length - 1].items.push({
          id,
          title,
          items: [],
        })
      } else {
        nestedHeadings.push({ id, title, items: [] })
      }
    }
  })

  return nestedHeadings
}

// Observe when element enters viewport
export function isInViewport(element, callback, threshold = 0.4) {
  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries

      if (entry.isIntersecting) {
        callback()
      }
    },
    { threshold }
  )

  observer.observe(element)
  return observer
}
