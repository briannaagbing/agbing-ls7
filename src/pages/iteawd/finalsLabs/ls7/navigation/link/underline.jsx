import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import StyledPageWrapper from '../../components/StyledPageWrapper';

const preventDefault = (event) => event.preventDefault();

export default function UnderlineLink() {
    return (
        <StyledPageWrapper category="navigation" title="Link Underline Options" subtitle="Link components with different underline behaviors">
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    typography: 'body1',
                    '& > :not(style) ~ :not(style)': {
                        ml: 2,
                    },
                }}
                onClick={preventDefault}
            >
                <Link href="#" underline="none">
                    underline=&quot;none&quot;
                </Link>
                <Link href="#" underline="hover">
                    underline=&quot;hover&quot;
                </Link>
                <Link href="#" underline="always">
                    underline=&quot;always&quot;
                </Link>
            </Box>
        </StyledPageWrapper>
    );
}
