import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
    padding: 10px 15px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width:100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 23px;
    width:100%;
`;

const SearchPresenter = ({
    movieResults, 
    tvResults, 
    searchTerm, 
    error,
    loading,
    handleSubmit,
    updateTerm
}) => (
    <Container>
        <Helmet>
            <title>Search | 1405</title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
            <Input 
                placeholder="Search Movies or TV Shows..." 
                value={searchTerm} 
                onChange={updateTerm}
            />
        </Form>
        {loading ? (
        <Loader /> ) : ( 
            <>
                {movieResults && movieResults.length > 0 && (
                <Section title="Movie Results">
                    {movieResults.map(movie => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title} 
                            imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0, 4)}
                            isMovie={true}
                        />
                    ))}
                </Section>
                )}
                {tvResults && tvResults.length > 0 && (
                <Section title="TV Results">
                    {tvResults.map(tv => (
                        <Poster 
                            key={tv.id}
                            id={tv.id}
                            title={tv.original_name}
                            imageUrl={tv.poster_path}
                            rating={tv.vote_average}
                            year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                        />
                    ))}
                </Section>
                )}
                {error && <Message color="#ff4d4d" text={error} />}
                {tvResults && 
                    movieResults && 
                    tvResults.length === 0 && 
                    movieResults.length === 0 && (
                    <Message text="Nothing Found" color="#dcdde1" />
                )}
            </>
        )}
    </Container>
    );
    
SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;