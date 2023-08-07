//import fishes from 'fisches.json';

//export const App = () => {
// return (
//    <div
//      style={{
//        height: '100vh',
//        display: 'flex',
//        justifyContent: 'center',
//        alignItems: 'center',
//        fontSize: 40,
//        color: '#010101'
//      }}
//    >
//      React Time 2 Fishing
//    </div>
//  );
//};

import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('pages/home/home'));
const FischTackleDetails = lazy(() => import('pages/fischArtComponents/fischArtComponents'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/:movieId" element={<FischTackleDetails />}>
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};