import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function PaginationSize() {
    return (
        <StyledPageWrapper category="navigation" title="Pagination Size" subtitle="Pagination in different sizes" customColor="#ffcc80">
            <Stack spacing={2}>
                <Pagination count={10} size="small" />
                <Pagination count={10} />
                <Pagination count={10} size="large" />
            </Stack>
        </StyledPageWrapper>
    );
}
