import React from 'react';
import StickyBox from 'react-sticky-box';
import { connect } from 'react-redux';
import MenuItem from '../../components/MenuItem/index'
import {LinkWrap,MainWrapper, Heading} from './style'

const Sidebar = ({allCategories, selected, staticCategories}) => {
    return (
        <StickyBox>
            <MainWrapper>
                <Heading>Feature</Heading>
                {renderStatic(staticCategories, selected)}
                <Heading>Category</Heading>                
                {renderCategories(allCategories, selected)}
            </MainWrapper>
        </StickyBox>
    );
}

const renderStatic = (categories, selected, setIsOpened) => {
    return categories.map((category) => (
        <LinkWrap
            to={`/${category.link}`}
            key={category.id}
            onClick={setIsOpened ? () => setIsOpened(false) : null}
        >
            <MenuItem
                title={category.name}
                selected={category.name === selected ? true : false}
            />
        </LinkWrap>
    ));
}

const renderCategories = (allCategories, selected, setIsOpened) => {
    return allCategories.map((category) => (
        <LinkWrap
            to={`/${category}`}
            key={category.id}
            onClick={setIsOpened ? () => setIsOpened(false) : null}
        >
            <MenuItem
                title={category.name}
                selected={category.name === selected ? true : false}
            />
        </LinkWrap>
    ));
}

const mapStateToProps = ({categories}) => {    
    return {
        allCategories: categories.data,
        selected: 'Home',
        staticCategories: categories.staticCategories,
    };
};

export default connect(
    mapStateToProps,
    null,
)(Sidebar);