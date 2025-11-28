import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import StyledPageWrapper from '../../components/StyledPageWrapper';

const preventDefault = (event) => event.preventDefault();

export default function Links() {
    return (
        <StyledPageWrapper category="navigation" title="Basic Links" subtitle="Fundamental link components with various styling options">
            <Box
                sx={{
                    typography: 'body1',
                    '& > :not(style) ~ :not(style)': {
                        ml: 2,
                    },
                }}
                onClick={preventDefault}
            >
                <Link href="#">Link</Link>
                <Link href="#" color="inherit">
                    color=&quot;inherit&quot;
                </Link>
                <Link href="#" variant="body2">
                    variant=&quot;body2&quot;
                </Link>
            </Box>
        </StyledPageWrapper>
    );
}
