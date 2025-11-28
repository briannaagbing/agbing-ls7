import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

import StyledPageWrapper from '../../../components/StyledPageWrapper';

export default function AutohideSnackbar() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <StyledPageWrapper
            title="Automatic Dismiss"
            subtitle="Configure snackbars to automatically dismiss after a specified duration."
            category="Feedback"
            subcategory="Snackbar > Basics"
        >
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message="This Snackbar will be dismissed in 5 seconds."
            />
        </StyledPageWrapper>
    );
}
