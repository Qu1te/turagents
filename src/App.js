import './App.css';
import Second from './components/second/second';
import Main from './components/main/Main';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
function App() {
 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
      path: '/second',
      element: <Second/>,
      children: [
        {
          path: 'FJM',
          element: <div>Second/1</div>
        }
      ]
    }
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
