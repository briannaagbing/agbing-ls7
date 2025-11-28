import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import StyledPageWrapper from '../../../components/StyledPageWrapper';

export default function LinearColor() {
    return (
        <StyledPageWrapper
            category="feedback"
            title="Linear Progress Color"
            subtitle="Customize linear progress bars with different color variants"
        >
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                <LinearProgress color="secondary" />
                <LinearProgress color="success" />
                <LinearProgress color="inherit" />
            </Stack>
        </StyledPageWrapper>
    );
}
