import {Stack, Button, IconButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
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
    </Stack>
  )
}

export default MuiButton
