import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import StyledPageWrapper from '../../../components/StyledPageWrapper';

export default function CircularSize() {
    return (
        <StyledPageWrapper
            category="feedback"
            title="Circular Progress Size"
            subtitle="Control circular progress indicator size with different unit measurements"
        >
            <Stack spacing={2} direction="row" alignItems="center">
                <CircularProgress size="30px" />
                <CircularProgress size={40} />
                <CircularProgress size="3rem" />
            </Stack>
        </StyledPageWrapper>
    );
}
