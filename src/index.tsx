import React from 'react'
import { createRoot } from 'react-dom/client';
import { connect, Provider } from 'react-redux'
import store from './redux/redux-store';
import { BrowserRouter as Router, Link, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import 'styles/scss/main.scss'
import ProtectedPages from './routes/ProtectedPages';

const Root: React.FC = () => (
    <Router>
        <Provider store={store}>
            <Switch>
                <Route component={ProtectedPages} />
            </Switch>
        </Provider>
    </Router>
)


const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<Root />);