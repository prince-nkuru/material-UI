import { Box, TextField, MenuItem } from "@mui/material"
import { useState } from "react"
const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setCountries(typeof value === 'string'? value.split(',') : value)
  }
  return (
    <Box width={'250px'}>
    <TextField label= 'select country' select value={countries} onChange={handleChange} fullWidth SelectProps={
      {multiple:true}
    }
    helperText= 'please select your country'
    color="secondary">
      <MenuItem value= 'In'>India</MenuItem>
      <MenuItem value= 'US'>USA</MenuItem>
      <MenuItem value= 'fr'>France</MenuItem>
      <MenuItem value= 'rw'>Rwanda</MenuItem>
    </TextField>
    </Box>
  )
}

export default MuiSelect
