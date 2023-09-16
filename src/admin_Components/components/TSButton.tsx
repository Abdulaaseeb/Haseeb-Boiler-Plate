import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type btnprops = {
    btnvalue : string,
    btnclick : any
}

export default function BasicButtons(props:btnprops) {
    const {btnclick , btnvalue} = props
  return (
     <Button className='mt-5 mx-2 ' variant="outlined" onClick={btnclick}>{btnvalue}</Button>
  );
}

