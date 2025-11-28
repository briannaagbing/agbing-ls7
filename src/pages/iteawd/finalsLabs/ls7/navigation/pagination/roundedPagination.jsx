import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function PaginationRounded() {
    return (
        <StyledPageWrapper category="navigation" title="Rounded Pagination" subtitle="Pagination with rounded shape" customColor="#bcaaa4">
            <Stack spacing={2}>
                <Pagination count={10} shape="rounded" />
                <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>
        </StyledPageWrapper>
    );
}
