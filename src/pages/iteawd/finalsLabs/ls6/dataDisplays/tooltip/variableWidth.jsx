import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTooltip, TooltipContainer } from '../../styles/dataDisplaysStyles/tooltipStyles';

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <StyledTooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

const NoMaxWidthTooltip = styled(({ className, ...props }) => (
  <StyledTooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
  },
});

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

export default function VariableWidth() {
  return (
    <ComponentWrapper title="Variable Width Tooltips">
      <TooltipContainer>
        <StyledTooltip title={longText}>
          <Button sx={{ m: 1 }}>Default Width [300px]</Button>
        </StyledTooltip>
        <CustomWidthTooltip title={longText}>
          <Button sx={{ m: 1 }}>Custom Width [500px]</Button>
        </CustomWidthTooltip>
        <NoMaxWidthTooltip title={longText}>
          <Button sx={{ m: 1 }}>No wrapping</Button>
        </NoMaxWidthTooltip>
      </TooltipContainer>
    </ComponentWrapper>
  );
}
