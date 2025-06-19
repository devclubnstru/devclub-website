import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import "./styles/global.css"

const App = () => {
  return (
    <RouterProvider router={routes} />
  )
}

export default App