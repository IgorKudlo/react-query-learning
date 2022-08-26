import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Films = () => {
    const { data: {results = []} = {}, isLoading, isError, error } = useQuery(
        ['key'],
        async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            return fetch('http://swapi.dev/api/films').then(res => res.json())
        },
        {
            refetchOnWindowFocus: false
        }

    );

    return (
        <div>
            {
                isLoading
                ? 'Loading ...'
                : isError
                ? error.message
                : results.map(film => (
                    <div key={film.title}>{film.title}</div>
                ))}
        </div>
    );
};

export default Films;