import Card from 'components/parts/Card';
import React from 'react';
import { skills } from './data';
import styled from '@emotion/styled';


interface Props {
    variant: 'small' | 'large';
}

const Image = styled.img`
    .dark & {
        filter: brightness(60%);
    }
`;

function Skills({ variant }: Props) {
    return (
        <div className="container">
            <div
                className={`${
                    variant === 'small' ? 'max-w-screen-lg mx-auto' : ''
                } grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-3`}
            >
                {skills.map(({ id, type, icon, info }) => (
                    <Card key={id} className="rounded-md px-6 py-4 flex flex-col justify- items-center text-center">
                        <div
                            className={`mb-8 grid place-content-center ${
                                variant === 'small' ? 'w-36 h-24' : 'w-48 h-48'
                            } `}
                        >
                           {icon}
                        </div>
                        <div>
                            <h1 className="text-sm uppercase my-0 text-slate-900 dark:text-white">{type}</h1>
                            <small className="text-xs text-slate-900 dark:text-slate-300">{info}</small>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Skills;
