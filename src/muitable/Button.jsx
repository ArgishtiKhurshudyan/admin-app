import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons({handleCreate}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={handleCreate}  color="secondary">Submit</Button>
    </Stack>
  );
}