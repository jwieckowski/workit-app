import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function LanguageSelection() {
  const [lang, setLang] = React.useState('PL');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 70 }}>
      <FormControl fullWidth>
        <Select
          value={lang}
          onChange={handleChange}
        >
          <MenuItem value={'EN'}>EN</MenuItem>
          <MenuItem value={'PL'}>PL</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
