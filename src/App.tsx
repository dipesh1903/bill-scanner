import './App.css'
import { amountTextField, descTextField, outputTextField, quantityTextField, rateTextField, serialNoTextField, textAnnotations } from './constant';
import { router } from './routes/route';
import { textAnnotationsType } from './type';
import { Outlet, RouterProvider } from "react-router-dom"

function App() {

  return (
    <>
      <RouterProvider router={router}/>
      <Outlet />
    </>
  )
}
export default App
