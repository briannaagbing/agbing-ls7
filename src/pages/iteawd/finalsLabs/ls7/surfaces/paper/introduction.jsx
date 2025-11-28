import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function SimplePaper() {
    return (
        <StyledPageWrapper
            category="surfaces"
            title="Paper Introduction"
            subtitle="Surface component with elevation for displaying content with depth"
        >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
                <Paper elevation={0} />
                <Paper />
                <Paper elevation={3} />
            </Box>
        </StyledPageWrapper>
    );
}
