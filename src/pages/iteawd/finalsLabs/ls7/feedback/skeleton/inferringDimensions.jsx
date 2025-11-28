import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import StyledPageWrapper from '../../components/StyledPageWrapper';

const variants = ['h1', 'h3', 'body1', 'caption'];

function TypographyDemo(props) {
    const { loading = false } = props;

    return (
        <div>
            {variants.map((variant) => (
                <Typography component="div" key={variant} variant={variant}>
                    {loading ? <Skeleton /> : variant}
                </Typography>
            ))}
        </div>
    );
}

TypographyDemo.propTypes = {
    loading: PropTypes.bool,
};

export default function SkeletonTypography() {
    return (
        <StyledPageWrapper
            category="feedback"
            title="Inferring Dimensions"
            subtitle="Skeleton automatically infers dimensions from typography"
        >
            <Grid container spacing={8}>
                <Grid item sx={{ flexGrow: 1 }}>
                    <TypographyDemo loading />
                </Grid>
                <Grid item sx={{ flexGrow: 1 }}>
                    <TypographyDemo />
                </Grid>
            </Grid>
        </StyledPageWrapper>
    );
}
