import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import StyledPageWrapper from '../../components/StyledPageWrapper';

export default function TablePaginationDemo() {
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <StyledPageWrapper category="navigation" title="Table Pagination" subtitle="Pagination component for data tables" customColor="#ffab91">
            <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </StyledPageWrapper>
    );
}
