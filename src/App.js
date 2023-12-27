import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Main from './pages/Main';
import Login from './pages/Login';
import About from './pages/about';
import Tur from './pages/Tur';
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
      path:"/About",
      element:<About/>,
    },
    {
      path:"/Tur",
      element:<Tur/>,
    },
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
