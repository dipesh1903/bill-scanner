import './App.css'
import { router } from './routes/route';
import { Outlet, RouterProvider } from "react-router-dom"
import AuthContextProvider from './store/auth/context';
import { StorageContext } from './store/products/context';

function App() {
  return (
    <>
      <AuthContextProvider>
        <StorageContext>
          <RouterProvider router={router}/>
          <Outlet />
        </StorageContext>
      </AuthContextProvider>
    </>
  )
}
export default App
