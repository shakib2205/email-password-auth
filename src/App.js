import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RegisterReactBootstrap from './components/Register/RegisterReactBootstrap';
import Main from './layout/Main';
import LoginBootstrap from './components/Register/LoginBootstrap';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path:'/register',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path:'/login',
        element: <LoginBootstrap></LoginBootstrap>
      }
    ]
  }
])

function App() {
  return (
    <div className="">
      <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;
