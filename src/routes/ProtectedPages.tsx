import React, { FC } from 'react';
import { Switch } from 'react-router-dom';
import { AppContainer } from '../presentation/container/AppContainer';
import ProtectedRoutes from './ProtectedRoutes';

const ProtectedPages: FC = () => {
    return (
          <Switch>
            <ProtectedRoutes exact path="/" component={AppContainer} />
          </Switch>
    );
  };
  
  export default ProtectedPages;