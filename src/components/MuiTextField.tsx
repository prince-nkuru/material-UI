import { Stack,TextField } from "@mui/material";
import { useState } from "react";
const MuiTextField = () => {

  const [value,setValue] = useState('')
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={'row'}>
        <TextField label='name' variant="outlined" size="small" color="primary"/>
        <TextField label='name' variant="filled" size="medium" color="warning"/>
        <TextField label='name' variant="standard" size="medium" color="error"/>
      </Stack>

      <Stack spacing={2} direction={'row'}> 
        <TextField
         label='Form Input' 
         required 
         color="success"
         value={value} 
         onChange={(e) => setValue(e.target.value)}
         error= {!value}
         helperText= {!value? 'Required': 'do not share your password'}/>
        <TextField label='Form Input' helperText='do not share your password to any one' disabled/>
        <TextField label='Read only' InputProps={{readOnly:true}}/>
      </Stack>
    </Stack>
  )
}

export default MuiTextField
