import React from 'react'
import header from './style'
import { Switch, Router, Route } from 'react-router-dom';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import history from '../../utils/history';
import HomePage from '../HomePage/index'

const AppWrapper = header

export default function App() {
    return (
        <Router history={history}>
            <AppWrapper>
                <Header />
                <Switch>
                    <Route exact path={'/'} component={HomePage} />
                </Switch>
                <Footer />
            </AppWrapper>
        </Router>
    )
}