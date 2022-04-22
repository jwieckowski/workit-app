import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useTranslation } from 'react-i18next'

export default function LanguageSelection() {
  const { i18n }  = useTranslation()
  const [lang, setLang] = useState('pl');

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value)
    setLang(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 70 }}>
      <FormControl fullWidth>
        <Select
          value={lang}
          onChange={handleChange}
        >
          <MenuItem value={'en'}>EN</MenuItem>
          <MenuItem value={'pl'}>PL</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
