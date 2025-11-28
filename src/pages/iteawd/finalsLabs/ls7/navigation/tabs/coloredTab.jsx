import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function ColorTabs() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <StyledPageWrapper category="navigation" title="Colored Tabs" subtitle="Tabs with custom color schemes" customColor="#b39ddb">
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="one" label="Item One" />
                    <Tab value="two" label="Item Two" />
                    <Tab value="three" label="Item Three" />
                </Tabs>
            </Box>
        </StyledPageWrapper>
    );
}
