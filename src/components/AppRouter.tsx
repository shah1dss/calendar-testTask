import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoute, publicRoute } from '../router';
import { UseTypedSelector } from '../hooks/useTypedSelector';

const AppRouter = () => {
  const { isAuth } = UseTypedSelector(state => state.auth)
  return (
    isAuth ? 
      <Routes>
        {privateRoute.map(route => 
          <Route path={route.path} element={<route.component/>} key={route.path}/>
          )}
      </Routes>
      :
      <Routes>
        {publicRoute.map(route => 
          <Route path={route.path} element={<route.component/>} key={route.path}/>
          )}
      </Routes>
  );
};

export default AppRouter;