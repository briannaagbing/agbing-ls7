import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import StyledPageWrapper from '../../../components/StyledPageWrapper';

export default function LinearIndeterminate() {
    return (
        <StyledPageWrapper
            category="feedback"
            title="Linear Progress Indeterminate"
            subtitle="Display continuous loading animation for processes with unknown duration"
        >
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        </StyledPageWrapper>
    );
}
