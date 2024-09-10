// import { Checkbox } from "@mui/icons-material"
import { Box, FormControlLabel, Checkbox } from "@mui/material"
import React, { useState } from "react"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const MuiCheckBox = () => {
  const [accept, setAccept] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
  setAccept(event.target.checked)
  }
  return (
    <Box>
      <Box>
        <FormControlLabel
        label= 'i accept terms and condition'
        control={<Checkbox checked= {accept} onChange = {handleChange}/>}/>
      </Box>

      <Box>
        <Checkbox
        icon= {<BookmarkBorderIcon/>}
        checkedIcon= {<BookmarkIcon/>}
        checked= {accept}
        onChange={handleChange}/>
      </Box>
    </Box>
  )
}

export default MuiCheckBox
