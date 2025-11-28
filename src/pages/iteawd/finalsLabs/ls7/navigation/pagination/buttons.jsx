import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function PaginationButtons() {
    return (
        <StyledPageWrapper category="navigation" title="Pagination Buttons" subtitle="Pagination with first/last and show/hide buttons" customColor="#c5e1a5">
            <Stack spacing={2}>
                <Pagination count={10} showFirstButton showLastButton />
                <Pagination count={10} hidePrevButton hideNextButton />
            </Stack>
        </StyledPageWrapper>
    );
}
