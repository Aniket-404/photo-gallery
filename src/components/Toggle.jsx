// Toggle.js
import React from 'react';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';

const Toggle = ({ checked, onChange }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={checked} onChange={onChange} />}
        label="Client Artworks"
      />
    </FormGroup>
  );
};

export default Toggle;
