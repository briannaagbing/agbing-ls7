import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import StyledPageWrapper from '../../../components/StyledPageWrapper';

export default function CircularDeterminate() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <StyledPageWrapper
            category="feedback"
            title="Circular Progress Determinate"
            subtitle="Display progress with a specific percentage value for determinate operations"
        >
            <Stack spacing={2} direction="row">
                <CircularProgress variant="determinate" value={25} />
                <CircularProgress variant="determinate" value={50} />
                <CircularProgress variant="determinate" value={75} />
                <CircularProgress variant="determinate" value={100} />
                <CircularProgress variant="determinate" value={progress} />
            </Stack>
        </StyledPageWrapper>
    );
}
