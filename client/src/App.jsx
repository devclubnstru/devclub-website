import { ThemeProvider } from './context/Theme/ThemeContext'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import "./styles/global.css"

const App = () => {
  return (
    <ThemeProvider>
      <svg className="hidden">
        <filter id="liquid-glass" x="0" y="0">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="4" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="15" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="1" result="blur" />
        </filter>
      </svg>
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}

export default App