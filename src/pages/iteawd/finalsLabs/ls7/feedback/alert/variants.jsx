import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function FilledAlerts() {
    return (
        <StyledPageWrapper
            category="feedback"
            title="Alert Variants"
            subtitle="Display filled variant alerts with enhanced visual emphasis"
        >
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="filled" severity="success">
                    This is a filled success Alert.
                </Alert>
                <Alert variant="filled" severity="info">
                    This is a filled info Alert.
                </Alert>
                <Alert variant="filled" severity="warning">
                    This is a filled warning Alert.
                </Alert>
                <Alert variant="filled" severity="error">
                    This is a filled error Alert.
                </Alert>
            </Stack>
        </StyledPageWrapper>
    );
}
