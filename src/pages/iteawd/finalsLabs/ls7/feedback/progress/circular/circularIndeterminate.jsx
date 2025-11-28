import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import StyledPageWrapper from '../../../components/StyledPageWrapper';

export default function CircularIndeterminate() {
    return (
        <StyledPageWrapper
            category="feedback"
            title="Circular Progress Indeterminate"
            subtitle="Show continuous loading animation for operations with unknown duration"
        >
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </StyledPageWrapper>
    );
}
