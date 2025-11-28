import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import StyledPageWrapper from '../../../components/StyledPageWrapper';

export default function CircularColor() {
    return (
        <StyledPageWrapper
            category="feedback"
            title="Circular Progress Color"
            subtitle="Customize circular progress indicators with different color variants"
        >
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Stack>
        </StyledPageWrapper>
    );
}
