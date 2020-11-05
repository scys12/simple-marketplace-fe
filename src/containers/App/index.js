import React, { useEffect, useState } from 'react'
import { AppWrapper, MainWrapper, LoadWrapper } from './style'
import { Switch, Router, Route } from 'react-router-dom';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import history from '../../utils/history';
import HomePage from '../HomePage/index'
import Sidebar from '../Sidebar/index'
import { getTenLatestItem, getCategories } from './actions'
import { connect } from 'react-redux';
import Login from '../Login/index'
import Register from '../Register/index'
import Loader from '../../components/Loader/index'

const App = ({getTenLatestItem, getCategories, isLoadingItem, isLoadingCategory}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getTenLatestItem();
    }, [getTenLatestItem])
    useEffect(() => {
        getCategories();
    }, [getCategories])
    useEffect(() => {
        const res = isLoadingItem || isLoadingCategory
        setIsLoading(res)
    }, [isLoadingItem, isLoadingCategory])

    return isLoading ? 
        <LoadWrapper> 
            <Loader/> 
        </LoadWrapper> : (        
        <Router history={history}>
            <AppWrapper>
                <Sidebar />
                <MainWrapper>
                    <Header />
                    <Switch>
                        <Route exact path={'/'} component={HomePage} />
                        <Route exact path={'/login'} component={Login} />
                        <Route exact path={'/register'} component={Register} />
                    </Switch>
                    <Footer />
                </MainWrapper>
            </AppWrapper>
        </Router>
    )
}

const mapStateToProps = ({ latestItem, categories }) => {
    return { 
        isLoadingItem: latestItem.loading,
        isLoadingCategory: categories.loading,
    }
}

export default connect(
    mapStateToProps,
    { getTenLatestItem, getCategories }
)(App)