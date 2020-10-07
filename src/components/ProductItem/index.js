import React from 'react';
import { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { Price, Title, ProductItemImg, ProductItemWrapper, ImgLoading, DetailsWrapper } from './style'
import Loading from '../Loading/index'
import NothingSVG from '../../svg/nothing.svg'

const ProductItem = ({item}) => {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false);

    return (
        <LazyLoad
            height={200}
            offset={200}
        >
            <ProductItemWrapper to={`/item/${item.id}`}>
                {!loaded ? (
                    <ImgLoading>
                        <Loading/>
                    </ImgLoading>
                ) : null}
                <ProductItemImg
                    error={error ? 1 : 0}
                    onLoad={ () => setLoaded(true) }
                    style={!loaded ? { display: 'none' } : {}}
                    src= {`${item.image}`}
                    onError={ e => {
                        setError(true);
                        if(e.target.src !== `${NothingSVG}`){
                            e.target.src = `${NothingSVG}`
                        }
                    }}
                />
                <DetailsWrapper>
                    <Title>{item.name}</Title>
                    <Price>Rp { item.price }</Price>
                </DetailsWrapper>
            </ProductItemWrapper>
        </LazyLoad>
    )
}

export default ProductItem