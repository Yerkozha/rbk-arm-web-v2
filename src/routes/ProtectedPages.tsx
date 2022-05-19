import React, { FC } from 'react';
import { Switch } from 'react-router-dom';
import { MainRootPage } from '../presentation/container/AppContainer';
import ProtectedRoutes from './ProtectedRoutes';

const ProtectedPages: FC = () => {
    return (
          <Switch>
            <ProtectedRoutes exact path="/" component={MainRootPage} />
          </Switch>
    );
  };
  
  export default ProtectedPages;