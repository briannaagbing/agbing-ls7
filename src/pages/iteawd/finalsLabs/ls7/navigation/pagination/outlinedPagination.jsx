import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function PaginationOutlined() {
    return (
        <StyledPageWrapper category="navigation" title="Outlined Pagination" subtitle="Pagination with outlined variant" customColor="#80cbc4">
            <Stack spacing={2}>
                <Pagination count={10} variant="outlined" />
                <Pagination count={10} variant="outlined" color="primary" />
                <Pagination count={10} variant="outlined" color="secondary" />
                <Pagination count={10} variant="outlined" disabled />
            </Stack>
        </StyledPageWrapper>
    );
}
