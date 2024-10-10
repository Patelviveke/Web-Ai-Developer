import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Guidance from './components/Guidance';
import TraderCommunity from './components/TraderCommunity';
import Support from './components/Support';
import WhatWeDo from './components/WhatWeDo';
import Getstarted from './components/Getstarted';
import Instayt from './components/Instayt';


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
    {
      path: "/support",
      element: <><Support/></>
    },
    {
      path: "/whatwedo",
      element: <><WhatWeDo/></>
    },
    {
      path: "/getstarted",
      element: <><Getstarted/></>
    },
    {
      path: "/instayt",
      element: <><Instayt/></>
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
