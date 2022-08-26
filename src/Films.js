import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Films = () => {
    const { data: {results = []} = {}, isLoading, isError, error, isFetching } = useQuery(
        ['key'],
        async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            return fetch('http://swapi.dev/api/films').then(res => res.json())
        },
        {
            refetchOnWindowFocus: false,
            staleTime: 'infinity',
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
            <br />
            {isFetching ? 'Обновление ...' : null}
        </div>
    );
};

export default Films;