'use client'

import { useEffect, useState } from 'react'
import { getNestedHeadings } from '@/utils'

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([])

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll('main h2, main h3'),
    )

    const newNestedHeadings = getNestedHeadings(headingElements)
    setNestedHeadings(newNestedHeadings)
  }, [])

  return nestedHeadings
}

export default useHeadingsData
