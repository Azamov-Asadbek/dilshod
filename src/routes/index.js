import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { myRoutes } from './routes.path';

//layouts
const PrivateRoute = lazy(() => import('layout/privateRoute'));
const Routers = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<PrivateRoute />}>
            {myRoutes.map((item, index) => (
              <Route key={index} path={item.path} element={item.element} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default Routers;
