import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function SkeletonColor() {
    return (
        <StyledPageWrapper
            category="feedback"
            title="Skeleton Color"
            subtitle="Customize skeleton placeholder colors to match dark or themed backgrounds"
        >
            <Box
                sx={{
                    bgcolor: '#121212',
                    p: 8,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Skeleton
                    sx={{ bgcolor: 'grey.900' }}
                    variant="rectangular"
                    width={210}
                    height={118}
                />
            </Box>
        </StyledPageWrapper>
    );
}