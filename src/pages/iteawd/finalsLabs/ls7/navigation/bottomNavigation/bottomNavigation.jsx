import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <StyledPageWrapper
            category="navigation"
            title="Bottom Navigation"
            subtitle="Fixed bottom navigation bar for mobile-first applications"
        >
            <Box sx={{ width: 500 }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </Box>
        </StyledPageWrapper>
    );
}
