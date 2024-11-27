import './App.css'
import { router } from './routes/route';
import { Outlet, RouterProvider } from "react-router-dom"
import AuthContextProvider from './store/auth/context';

function App() {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router}/>
        <Outlet />
      </AuthContextProvider>
    </>
  )
}
export default App
