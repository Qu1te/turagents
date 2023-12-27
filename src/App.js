import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Main from './pages/Main';
import Login from './pages/Login';
import Maldiv from './pages/Maldiv';
import About from './pages/about';
import BARCA from './products/barcelona';
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
      path:"/Maldiv",
      element:<Maldiv/>,
    },
    {
      path:"/About",
      element:<About/>,
    },
    {
      path:"/Barcelona",
      element:<BARCA/>,
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
