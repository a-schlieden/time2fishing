
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import Layout from 'components/Layout/Layout';
import RuImg from 'components/RuImg/RuImg';

import tackles from 'api/tackle.json';

const Home = lazy(() => import('pages/home/home'));
const FischArtDetails = lazy(() => import('pages/fischArtDetails/fischArtDetails'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home tackleArr={tackles} />} />
          <Route path="ru" element={<RuImg />} />
          <Route path="fishes/:fishId" element={<FischArtDetails tackleArr={tackles} />}>
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};