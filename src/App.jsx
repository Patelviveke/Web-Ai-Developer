import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Guidance from './components/Guidance';
import TraderCommunity from './components/TraderCommunity';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/></>
    },
    {
      path: "/guidance",
      element: <><Guidance/></>
    },
    {
      path: "/trustedclient",
      element: <><TraderCommunity/></>
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
