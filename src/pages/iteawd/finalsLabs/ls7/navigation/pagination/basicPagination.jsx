import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function BasicPagination() {
    return (
        <StyledPageWrapper category="navigation" title="Basic Pagination" subtitle="Simple pagination components" customColor="#81d4fa">
            <Stack spacing={2}>
                <Pagination count={10} />
                <Pagination count={10} color="primary" />
                <Pagination count={10} color="secondary" />
                <Pagination count={10} disabled />
            </Stack>
        </StyledPageWrapper>
    );
}
