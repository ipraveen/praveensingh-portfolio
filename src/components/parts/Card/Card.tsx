import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//     &:hover {
//         box-shadow: 0 1px 2px 0 rgb(60 64 67 / 15%), 0 1px 2px 1px rgb(60 64 67 / 10%);
//     }
//     p {
//         font-family: Roboto, system-ui, sans-serif;
//     }
// `;
interface Props {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={`${className} bg-white dark:bg-slate-800 dark:border-0 rounded-md px-6 py-4 border border-gray-200 border-solid  text-slate-900 dark:text-white`}>
            {children}
        </div>
    );
};

export default Card;
