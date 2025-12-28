import { useEffect, useState } from 'react'

const useRoleSwitcher = ({ roles, interval = 1800 }) => {
  const [role, setRole] = useState(roles.length > 0 ? roles[0] : '')

  useEffect(() => {
    if (!roles || roles.length === 0) return

    const intervalId = setInterval(() => {
      setRole((prev) => {
        const currentIndex = roles.indexOf(prev)
        const nextIndex = (currentIndex + 1) % roles.length
        return roles[nextIndex]
      })
    }, interval)

    return () => clearInterval(intervalId)
  }, [roles, interval])

  return role
}

export default useRoleSwitcher
