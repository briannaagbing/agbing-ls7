import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function SimpleAlert() {
    return (
        <StyledPageWrapper
            category="feedback"
            title="Alert Introduction"
            subtitle="A simple alert component with an icon and success severity"
        >
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Here is a gentle confirmation that your action was successful.
            </Alert>
        </StyledPageWrapper>
    );
}