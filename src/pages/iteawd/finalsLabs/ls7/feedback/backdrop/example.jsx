import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function SimpleBackdrop() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <StyledPageWrapper
            category="feedback"
            title="Backdrop Example"
            subtitle="Display a backdrop overlay with loading indicator to block user interaction"
        >
            <div>
                <Button onClick={handleOpen}>Show backdrop</Button>
                <Backdrop
                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                    open={open}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        </StyledPageWrapper>
    );
}
