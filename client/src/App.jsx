import { ThemeProvider } from './context/Theme/ThemeContext'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import "./styles/global.css"

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>

  )
}

export default App