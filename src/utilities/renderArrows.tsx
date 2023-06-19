import React from 'react';
import { ButtonBase } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface IRenderArrows {
  direction: string;
  slider: React.MutableRefObject<any>;
}

const RenderArrows = ({ direction, slider }: IRenderArrows) => {
  return (
    <ButtonBase
      sx={{
        backgroundColor: '#FFFD82',
        height: '50px',
        width: '50px',
        display: 'flex',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={() =>
        direction === 'forward'
          ? slider.current?.slickNext()
          : slider.current?.slickPrev()
      }
    >
      {direction === 'forward' ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
    </ButtonBase>
  );
};
export default RenderArrows;
