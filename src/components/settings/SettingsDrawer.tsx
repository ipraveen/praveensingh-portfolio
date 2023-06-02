import React from 'react';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';

interface Props {
    open: boolean;
    children: React.ReactNode;
    onClose: () => void;
}

interface StyleProps {
    open: boolean;
}

const Container = styled.div<StyleProps>`
    display: relative;
    position: fixed;
    width: 20rem;
    right: 0;
    top: 0;
    transition: all 400ms ease-in;
    transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(150%)')};
`;

const CloseIconStyled = styled(CloseIcon)`
    position: absolute;
    top: 1rem;
    right: 1rem;
`;

// '100%' : '150%')

function SettingsDrawer({ open, children, onClose }: Props) {
    return (
        <Container className="bg-slate-200 dark:bg-slate-400 p-4 pt-8 h-full" open={open}>
            <CloseIconStyled onClick={onClose} />
            <h1 className='text-lg content-center flex items-center gap-1'>  <SettingsIcon   />Settings</h1>
            <div  className='py-6'>{children}</div>
        </Container>
    );
}

export default SettingsDrawer;
