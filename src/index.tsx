import React from 'react'
import { createRoot } from 'react-dom/client';
import { connect, Provider } from 'react-redux'
import store from './redux/redux-store';
import { BrowserRouter as Router, Link, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import './scss/main.scss'
import ProtectedPages from './routes/ProtectedPages';
import { Login } from './presentation/view/login/Login';
import { ThemeProvider } from 'styled-components';
import { theme } from 'ui';
import StyledToastContainer from './presentation/view/components/StyledToastContainer';

const Root: React.FC = () => (
    <ThemeProvider theme={theme}>
    <Router>
        <Provider store={store}>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route component={ProtectedPages} />
            </Switch>
            <StyledToastContainer hideProgressBar autoClose={1000} />
        </Provider>
    </Router>
    </ThemeProvider>
)


const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<Root />);
