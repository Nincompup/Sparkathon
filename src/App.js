import logo from './logo.svg';
import './App.css';
import css from './styles/App.module.scss'
import Homepage from './components/Homepage/Homepage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './components/Authentication/SignIn/SignIn';
import SignUp from './components/Authentication/SignUp/SignUp';
import Cart from './components/Cart/Cart';
import Support from './components/Support/Support';
function App() {
  
  const router = createBrowserRouter([
    { path: "/", element: <Homepage/>,id:'root'},
    { path: "/signin", element: <SignIn/>},
    { path: "/signup", element: <SignUp/>},
    { path: "/cart", element: <Cart/>},
    { path: "/support", element: <Support/>},
  ]);


  return (
    <div className={` ${css.container}`}>
             <RouterProvider router={router} />
    </div>
  );
}

export default App;
