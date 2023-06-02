import React, { ReactEventHandler, useEffect, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// const colorSchemeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && colorSchemeMatchMedia.matches)) {
//     document.documentElement.classList.add('dark');
// } else {
//     document.documentElement.classList.remove('dark');
// }


function ColorSchemeButton() {
    const [mode, setMode] = useState(localStorage.theme);

    const handleColorSchemeChange = (e: any) => {
        if (e.matches) {
            console.info('[SYSTEM] Switching to Dark Mode');
            document.documentElement.classList.add('dark');
        } else {
            console.info('[SYSTEM] Switching to Light Mode');
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect(() => {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        mql.addEventListener('change', handleColorSchemeChange);

        return () => {
            mql.removeEventListener('change', handleColorSchemeChange);
        };
    }, []);

    return <div></div>;
}

export default ColorSchemeButton;
