import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function PaginationRanges() {
    return (
        <StyledPageWrapper category="navigation" title="Pagination Ranges" subtitle="Pagination with sibling and boundary counts" customColor="#a5d6a7">
            <Stack spacing={2}>
                <Pagination count={11} defaultPage={6} siblingCount={0} />
                <Pagination count={11} defaultPage={6} /> {/* Default ranges */}
                <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} />
                <Pagination count={11} defaultPage={6} boundaryCount={2} />
            </Stack>
        </StyledPageWrapper>
    );
}
