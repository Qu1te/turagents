import logo from './logo.svg';
import './App.css';
import Second from './components/second';
import Main from './components/Main';
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
