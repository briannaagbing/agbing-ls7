import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';

import StyledPageWrapper from '../../../components/StyledPageWrapper';

const action = (
    <Button color="secondary" size="small">
        lorem ipsum dolorem
    </Button>
);

export default function LongTextSnackbar() {
    return (
        <StyledPageWrapper
            title="Content"
            subtitle="Customize snackbar content including long text messages."
            category="Feedback"
            subcategory="Snackbar > Basics"
        >
            <Stack spacing={2} sx={{ maxWidth: 600 }}>
                <SnackbarContent message="I love snacks." action={action} />
                <SnackbarContent
                    message={
                        'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
                    }
                />
                <SnackbarContent
                    message="I love candy. I love cookies. I love cupcakes."
                    action={action}
                />
                <SnackbarContent
                    message={
                        'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
                    }
                    action={action}
                />
            </Stack>
        </StyledPageWrapper>
    );
}
