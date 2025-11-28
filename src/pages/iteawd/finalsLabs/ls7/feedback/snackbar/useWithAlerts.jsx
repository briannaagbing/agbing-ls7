import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function CustomizedSnackbars() {
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
            title="Use with Alerts"
            subtitle="Combine snackbars with Alert components for enhanced notifications."
            category="Feedback"
            subcategory="Snackbar"
        >
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    This is a success Alert inside a Snackbar!
                </Alert>
            </Snackbar>
        </StyledPageWrapper>
    );
}
