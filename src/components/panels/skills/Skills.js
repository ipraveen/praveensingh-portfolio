import React from 'react';
import styled from 'styled-components';
import { skills } from './data';


function Skills() {
    return (
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-3">
                {skills.map(({ id, type, icon, info }) => (
                    <div
                        key={id}
                        className="bg-white rounded-md px-6 py-4 border border-gray-200 border-solid flex flex-col justify- items-center text-center"
                    >
                        <div className="w-48 h-48 mb-4 grid place-content-center">
                            <img className="object-fill" src={`/images/${icon}`} alt="React Logo" />
                        </div>
                        <div>
                            <h1 className="text-sm uppercase my-0 text-theme-500">{type}</h1>
                            <small className="text-xs text-slate-500">{info}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
