import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Main from './pages/Main';
import Login from './pages/Login';
function App() {
 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
      path:"/Login",
      element:<Login/>,
    }
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
