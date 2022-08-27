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

const useGetPlanets = () => (
    useQuery(
        ['planets'],
        () => {
            return fetch('http://swapi.dev/api/planets').then(res => res.json());
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

const Planets = () => {
    const { data: {results = []} = {}, isLoading, isError, error } = useGetPlanets();
    return (
        <div>
            {
                isLoading
                ? 'Loading ...'
                : isError
                    ? error.message
                    : results.map(planet => (
                        <div key={planet.name}>{planet.name}</div>
                ))
            }
        </div>
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
            <Planets/>
        </div>
    );
};

export default Films;