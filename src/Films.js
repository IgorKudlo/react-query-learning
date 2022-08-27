import React from 'react';
import { useQuery } from '@tanstack/react-query';

const useGetFilms = () => (
    useQuery(
        ['films'],
        () => {
            return fetch('http://swapi.dev/api/films').then(res => res.json());
        }
    )
);

const FilmsLength = () => {
    const { data: {results = []} = {}, isLoading } = useGetFilms();
    return (
        isLoading
        ? 'Loading...'
        : <p>Колличество фильмов: {results.length}</p>
    )
}

const Films = () => {
    const { data: {results = []} = {}, isLoading, isError, error, isFetching } = useGetFilms();
    return (
        <div>
            <FilmsLength/>
            {
                isLoading
                ? 'Loading ...'
                : isError
                ? error.message
                : results.map(film => (
                    <div key={film.title}>{film.title}</div>
                ))}
            <br />
            {isFetching ? 'Обновление ...' : null}
        </div>
    );
};

export default Films;