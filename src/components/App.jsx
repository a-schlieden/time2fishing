
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import Layout from 'components/Layout/Layout';
import RuImg from 'components/RuImg/RuImg';
import Impressum from 'components/Impressum/Impressum';

//import tackles from 'api/tackle.json';
import { fetchAllTacklesAndFishes } from 'api/Fetch';

const Home = lazy(() => import('pages/home/home'));
const FischArtDetails = lazy(() => import('pages/fischArtDetails/fischArtDetails'));


export const App = () => {

  const [allTacklesAndFishes, setAllTacklesAndFishes] = useState([]);

  useEffect(() => {
    fetchAllTacklesAndFishes().then(result => {
      setAllTacklesAndFishes(result);
    });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home fishesArr={allTacklesAndFishes} />} />
          <Route path="ru" element={<RuImg />} />
          <Route path="fishes/:fishId" element={<FischArtDetails tacklesArr={allTacklesAndFishes} />}>
          </Route>
          <Route path="impressum" element={<Impressum />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
