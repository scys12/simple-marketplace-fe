import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectMenu } from '../App/actions';
import { BottomWrapper, HomePageWrapper, ProductItemWrapper, ButtonWrapper } from './style'
import ProductItem from '../../components/ProductItem/index';

const HomePage = ({ selectMenu, latestItem }) =>{
    useEffect(() => {
        selectMenu('Home')
    }, [selectMenu]);

    if (latestItem.loading) {
        return <div>Loading...</div>
    }

    return(
        <HomePageWrapper>
            <ProductItemWrapper>
                {renderProductList(latestItem.items)}
            </ProductItemWrapper>
            <BottomWrapper>
                <ButtonWrapper to={'/'}>
                    Lihat Semua Produk
                </ButtonWrapper>
            </BottomWrapper>
        </HomePageWrapper>
    )
};

const renderProductList = (latestItem) => {
    return latestItem.map( (item,idx) => (
        <ProductItem item={item} key={idx}/>
    ));
};

const mapStateToProps = ({ latestItem }) => {
    return { latestItem };
};

export default connect(
    mapStateToProps,
    { selectMenu }
)(HomePage);