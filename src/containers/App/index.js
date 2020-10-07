import React, { useEffect } from 'react'
import { AppWrapper, MainWrapper } from './style'
import { Switch, Router, Route } from 'react-router-dom';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import history from '../../utils/history';
import HomePage from '../HomePage/index'
import Sidebar from '../Sidebar/index'
import { getTenLatestItem, getCategories } from './actions'
import { connect } from 'react-redux';

const App = ({getTenLatestItem, getCategories, isLoading}) => {
    useEffect(() => {
        getTenLatestItem();
    }, [getTenLatestItem])
    useEffect(() => {
        getCategories();
    }, [getCategories])
    return isLoading ? <MainWrapper>Loading...</MainWrapper> : (
        <Router history={history}>
            <AppWrapper>
                <Sidebar />
                <MainWrapper>
                    <Header />
                    <Switch>
                        <Route exact path={'/'} component={HomePage} />
                    </Switch>
                    <Footer />
                </MainWrapper>
            </AppWrapper>
        </Router>
    )
}

const mapStateToProps = ({ latestItem, categories }) => {
    return { isLoading: latestItem.loading && categories.loading}
}

export default connect(
    mapStateToProps,
    { getTenLatestItem, getCategories },
)(App)