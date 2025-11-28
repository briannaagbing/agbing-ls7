import Alert from '@mui/material/Alert';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function ColorAlerts() {
    return (
        <StyledPageWrapper
            category="feedback"
            title="Alert Color"
            subtitle="Customize alert colors independently from severity"
        >
            <Alert severity="success" color="warning">
                This is a success Alert with warning colors.
            </Alert>
        </StyledPageWrapper>
    );
}
