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

export default function Variants() {
    return (
        <StyledPageWrapper
            category="surfaces"
            title="Paper Variants"
            subtitle="Paper styles including default elevation and outlined variants"
        >
            <Stack direction="row" spacing={2}>
                <DemoPaper variant="elevation">default variant</DemoPaper>
                <DemoPaper variant="outlined">outlined variant</DemoPaper>
            </Stack>
        </StyledPageWrapper>
    );
}
