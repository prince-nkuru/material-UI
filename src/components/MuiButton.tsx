import {Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";

const MuiButton = () => {
  const [formats, setFormats] = useState< null | string[]>(null)
  const handleFormatChange = (_event:React.MouseEvent<HTMLElement>, updatedFormats: null|string[]) => {
      setFormats(updatedFormats)
  }
  return (
    <Stack spacing={4}>
    <Stack spacing={2} direction={'row'}>
      <Button variant="text" href="http://google.com">text</Button>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>
    </Stack>

    <Stack spacing={2} direction={'row'}>
      <Button variant="contained" color="primary">primary</Button>
      <Button variant="text" color="secondary">secondary</Button>
      <Button variant="contained" color="error">error</Button>
      <Button variant="outlined" color="warning">warning</Button>
      <Button variant="contained" color="info">info</Button>
      <Button variant="contained" color="success" disableElevation>success</Button>
    </Stack>

    <Stack display={'block'} spacing={2} direction={'row'}>
      <Button variant="contained" size="small">small</Button>
      <Button variant="contained" size="medium">medium</Button>
      <Button variant="contained" size="large">large</Button>
    </Stack>

    <Stack spacing={2} direction={'row'}>
       <Button variant="contained" startIcon= {<SendIcon/>} disableRipple>send</Button>
       <Button variant="outlined" endIcon= {<SendIcon/>} disableElevation onClick={() => alert('clicked')}>send</Button>
       <IconButton aria-label="send" color="success" size="large">
        <SendIcon/>
       </IconButton>
    </Stack>

    <Stack direction={'row'}>
     <ButtonGroup variant="outlined" orientation="vertical" color="warning" size="small" aria-label="alignment button group">
      <Button onClick={() => alert('left clicked')}>left</Button>
      <Button onClick={() => alert('center clicked')}>center</Button>
      <Button onClick={() => alert('right clicked')}>right</Button>
     </ButtonGroup>
    </Stack>

    <Stack direction={'row'}>
      <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} exclusive>
        <ToggleButton value={'bold'}><FormatBoldIcon/></ToggleButton>
        <ToggleButton  value={'italic'}><FormatItalicIcon/></ToggleButton>
        <ToggleButton  value={'underlined'}><FormatUnderlinedIcon/></ToggleButton>
      </ToggleButtonGroup>
    </Stack>
    </Stack>
  )
}

export default MuiButton
