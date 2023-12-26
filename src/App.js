import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Main from './pages/Main';
import Login from './pages/Login';
import Tur from './pages/Tur'; // Добавьте эту строку

function App() {
 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
      path:"/Login",
      element:<Login/>,
    },
    {
      path:"/Tur",
      element:<Tur/>,
    }
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
