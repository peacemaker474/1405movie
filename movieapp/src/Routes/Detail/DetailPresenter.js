import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import { Helmet } from 'react-helmet';
import Message from 'Components/Message';

const Container = styled.div`
    height: calc(100vh - 70px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.6;
    z-index: 0;
`;

const Content = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    border-radius: 10px;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 25px;
`;

const Title = styled.h3`
    font-size: 32px;
`;

const ItemContainer = styled.div`
    margin: 20px 0;
`;

const Item = styled.span`

`;

const Divider = styled.span`
    margin: 0 8px;
`;

const Overview = styled.p`
    font-size: 14px;
    opacity: 0.7;
    line-height: 2;
    width: 50%;
    word-break: break-all;
`;

const DetailPresenter = ({ result, loading, error }) => (
    loading ? (
        <>
        <Helmet>
            <title>Loading | 1405</title>
        </Helmet>
        <Loader />
        </>
    ) : (
        error 
        ? <Message /> 
        : <Container>
            <Helmet>
                <title>
                    {result.original_title || result.original_name} | 1405</title>
            </Helmet>
            <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}/>
            <Content>
                <Cover 
                    bgImage={
                        result.poster_path
                        ? `https://image.tmdb.org/t/p/original${result.poster_path}` 
                        :  require("Components/assets/파이리.jpg")
                    }
                />
                <Data>
                    <Title> 
                        {result.original_title || result.original_name}
                    </Title>
                    <ItemContainer>
                        <Item>
                            {result.release_date
                                ? result.release_date && result.release_date.substring(0, 4)
                                : result.first_air_date && result.first_air_date.substring(0, 4)}년
                        </Item>
                        <Divider>◽</Divider>
                        <Item>
                            {result.runtime || result.episode_run_time}분
                        </Item>
                        <Divider>◽</Divider>
                        <Item>
                            {result.genres && 
                                result.genres.map((genre, index) => 
                                    index === result.genres.length - 1 
                                        ? genre.name 
                                        : `${genre.name} / `
                            )}
                        </Item>
                    </ItemContainer>
                    <Overview> {result.overview} </Overview>
                </Data>
            </Content>
        </Container>
    )
);

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;