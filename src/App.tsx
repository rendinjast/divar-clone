import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ParentContext from './context';
import { Home, Post } from './pages';
// import { Home } from './pages';
import './assets/styles/global.scss';
import { Header, Footer, Toast } from './components';
import { BROWSE, CATEGORY, HOME, POST, NEW } from './constants/routes';
import { LoadCategories } from './redux/features/categories/categoriesSlice';
import { LoadCities } from './redux/features/cities/citiesSlice';

const Browse = lazy(() => import('./pages/browse/Browse'));
const New = lazy(() => import('./pages/new/New'));
// const Ad = lazy(() => import('./pages/ad/Ad'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadCategories());
    dispatch(LoadCities());
  }, []);
  return (
    <div className="main">
      <ParentContext>
        <Toast />
        <Router>
          <Suspense fallback={<div>loading...</div>}>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path={HOME} component={Home} />
                <Route path={POST} component={Post} />
                <Route exact path={BROWSE} component={Browse} />
                <Route exact path={CATEGORY} component={Browse} />
                <Route path={NEW} component={New} />
              </Switch>
            </div>
            <Footer />
          </Suspense>
        </Router>
      </ParentContext>
    </div>
  );
};

export default App;
