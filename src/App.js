import styles from './App.module.scss';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './Components/Root/root';
import Home from './Components/Pages/Home/home';
import Details from './Components/Pages/Details/details';

const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Home/>}/>
    <Route path=":id" element={<Details/>}/>
  </Route>
))

function App() {

  return (
    //<ApiProvider>
      <RouterProvider className={styles.App} router={AppRouter}/>
    //</ApiProvider>
  );
}

export default App;
