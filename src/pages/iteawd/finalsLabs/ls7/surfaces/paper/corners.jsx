import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import StyledPageWrapper from '../../components/StyledPageWrapper';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

export default function SquareCorners() {
    return (
        <StyledPageWrapper
            category="surfaces"
            title="Paper Corners"
            subtitle="Toggle between rounded and square corners for paper components"
        >
            <Stack direction="row" spacing={2}>
                <DemoPaper square={false}>rounded corners</DemoPaper>
                <DemoPaper square>square corners</DemoPaper>
            </Stack>
        </StyledPageWrapper>
    );
}
