import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import StyledPageWrapper from '../../components/StyledPageWrapper';

function samePageLinkNavigation(event) {
    if (
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
}

function LinkTab({ selected, ...props }) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                // Routing libraries handle this, you can remove the onClick handle when using them.
                if (samePageLinkNavigation(event)) {
                    event.preventDefault();
                }
            }}
            aria-current={selected && 'page'}
            {...props}
        />
    );
}

LinkTab.propTypes = {
    selected: PropTypes.bool,
};

export default function NavTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        // event.type can be equal to focus with selectionFollowsFocus.
        if (
            event.type !== 'click' ||
            (event.type === 'click' && samePageLinkNavigation(event))
        ) {
            setValue(newValue);
        }
    };

    return (
        <StyledPageWrapper category="navigation" title="Nav Tabs" subtitle="Navigation tabs with link functionality" customColor="#c5e1a5">
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                    role="navigation"
                >
                    <LinkTab label="Page One" href="/drafts" />
                    <LinkTab label="Page Two" href="/trash" />
                    <LinkTab label="Page Three" href="/spam" />
                </Tabs>
            </Box>
        </StyledPageWrapper>
    );
}