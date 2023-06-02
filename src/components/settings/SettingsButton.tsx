import React, { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsDrawer from './SettingsDrawer';
import ColorScheme from './ColorScheme';

function SettingsButton() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <SettingsIcon className="text-white" onClick={() => setOpen(true)} />
            <SettingsDrawer open={open} onClose={() => setOpen(false)}>
                <ColorScheme />
            </SettingsDrawer>
        </>
    );
}

export default SettingsButton;
