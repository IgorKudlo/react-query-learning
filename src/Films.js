import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Films = () => {
    const { data: {results = []} = {} } = useQuery(['key'], () => {
        return fetch('http://swapi.dev/api/films').then(res => res.json())
    });

    return (
        <div>
            {results.map(film => (
                <div key={film.title}>{film.title}</div>
            ))}
        </div>
    );
};

export default Films;