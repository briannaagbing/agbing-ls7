import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function Animations() {
    return (
        <StyledPageWrapper
            category="feedback"
            title="Skeleton Animations"
            subtitle="Control skeleton loading animation styles including wave, pulse, and none"
        >
            <Box sx={{ width: 300 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
        </StyledPageWrapper>
    );
}
