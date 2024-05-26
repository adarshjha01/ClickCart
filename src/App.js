import './App.css';
import ProductList from './features/product-list/ProductList';
import {Counter } from './features/counter/Counter';
import Home from './pages/Home';
import Login from './features/auth/components/Login';
import SignupPage from './pages/SignupPage';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);


function App() {
  return (
    <div className="App">
   <RouterProvider router={router} />
    </div>
  );
}

export default App;
