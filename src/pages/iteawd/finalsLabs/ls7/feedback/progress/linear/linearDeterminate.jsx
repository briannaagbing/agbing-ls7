import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import StyledPageWrapper from '../../../components/StyledPageWrapper';

export default function LinearDeterminate() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <StyledPageWrapper
            category="feedback"
            title="Linear Progress Determinate"
            subtitle="Show linear progress with specific percentage values for measurable tasks"
        >
            <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={progress} />
            </Box>
        </StyledPageWrapper>
    );
}
