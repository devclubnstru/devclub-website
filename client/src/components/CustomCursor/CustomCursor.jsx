import { useEffect, useState } from "react"

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check if device supports touch
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }

    checkTouchDevice()

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    if (!isTouchDevice) {
      window.addEventListener("mousemove", move)
    }

    return () => {
      if (!isTouchDevice) {
        window.removeEventListener("mousemove", move)
      }
    }
  }, [isTouchDevice])

  // Don't render cursor on touch devices
  if (isTouchDevice) {
    return null
  }

  return (
    <div
      className="custom-cursor"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    />
  )
}

export default CustomCursor