import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function DisabledTabs() {
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <StyledPageWrapper category="navigation" title="Disabled Tabs" subtitle="Tabs with disabled state" customColor="#9fa8da">
            <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                <Tab label="Active" />
                <Tab label="Disabled" disabled />
                <Tab label="Active" />
            </Tabs>
        </StyledPageWrapper>
    );
}
