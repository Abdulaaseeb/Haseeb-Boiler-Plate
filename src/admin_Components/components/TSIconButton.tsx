import * as React from 'react';
import Button from '@mui/material/Button';

type iconprops = {
    iconvalue : string,
    iconclick : any,
    iconposition : any
}

export default function IconsButtons(props:iconprops) {
    const {iconclick , iconvalue , iconposition} = props
  return (
     <Button className='mt-5 mx-2 ' startIcon = {iconposition} variant="contained" onClick={iconclick}>{iconvalue}</Button>
  );
}