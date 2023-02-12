import MuiPaper from '@mui/material/Paper';

import React from 'react';

const Paper = ({ children, tabIndex, className, variant = 'outlined' }) => {
    return (
        <MuiPaper className={`${className} bg-white`} variant={variant} tabIndex={tabIndex}>
            {children}
        </MuiPaper>
    );
};

export default Paper;
