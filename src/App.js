import { Provider } from 'react-redux';
import './App.css';
import Login from './components/Login';
import TodosApp from './components/TodosApp';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import appStore from './components/utils/appStore';

function App() {

  const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/todos",
        element:<TodosApp/>
    }
])
  return (
    <Provider store={appStore}>
    <div className="App">
     <RouterProvider  router = {appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
