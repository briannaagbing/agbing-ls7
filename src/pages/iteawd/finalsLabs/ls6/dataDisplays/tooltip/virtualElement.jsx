import * as React from 'react';

import Box from '@mui/material/Box';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTooltip } from '../../styles/dataDisplaysStyles/tooltipStyles';

export default function AnchorElTooltips() {
  const positionRef = React.useRef({ x: 0, y: 0 });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    // Update popper position
    if (popperRef.current) {
      popperRef.current.update();
    }
  };

  return (
    <ComponentWrapper title="Virtual Element Tooltips">
      <StyledTooltip
        title="Add"
        placement="top"
        arrow
        PopperProps={{
          popperRef,
          anchorEl: {
            getBoundingClientRect: () => {
              if (!areaRef.current) return new DOMRect();
              return new DOMRect(
                positionRef.current.x,
                areaRef.current.getBoundingClientRect().y,
                0,
                0
              );
            },
          },
        }}
      >
        <Box
          ref={areaRef}
          onMouseMove={handleMouseMove}
          sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            p: 2,
            display: 'inline-block',
            cursor: 'pointer',
          }}
        >
          Hover
        </Box>
      </StyledTooltip>
    </ComponentWrapper>
  );
}
