import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function CustomIcons() {
    return (
        <StyledPageWrapper category="navigation" title="Pagination Custom Icons" subtitle="Pagination with custom arrow icons" customColor="#80deea">
            <Stack spacing={2}>
                <Pagination
                    count={10}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />
            </Stack>
        </StyledPageWrapper>
    );
}
