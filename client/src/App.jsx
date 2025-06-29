import { ThemeProvider } from './context/Theme/ThemeContext'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import "./styles/global.css"
import CustomCursor from './components/CustomCursor/CustomCursor'
import SmoothScroll from './utils/SmoothScroll/SmoothScroll'

const App = () => {
  return (
    <ThemeProvider>
      <CustomCursor />
      <SmoothScroll />
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}

export default App