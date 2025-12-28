import { useEffect, useState } from 'react'

const useIsLargeScreen = (minWidth) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= minWidth)
    }

    // Initial check
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [minWidth])

  return isLargeScreen
}

export default useIsLargeScreen
