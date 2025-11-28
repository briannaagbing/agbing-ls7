import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function ActionAlerts() {
    return (
        <StyledPageWrapper
            category="feedback"
            title="Alert Actions"
            subtitle="Alert components with action buttons and close functionality"
        >
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="warning" onClose={() => { }}>
                    This Alert displays the default close icon.
                </Alert>
                <Alert
                    severity="success"
                    action={
                        <Button color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This Alert uses a Button component for its action.
                </Alert>
            </Stack>
        </StyledPageWrapper>
    );
}
