import { Label } from "@mui/icons-material";
import { 
  Box, 
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText

 } from "@mui/material";

 
 
 const MuiRadioButton = () => {
   return (
     <Box>
       <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
        name="job-experience-group"
        aria-labelledby="job-experience-group-label"
        row>
       <FormControlLabel control={<Radio size="medium" color="warning"/>} label={0-3} value={0-3}/>
       <FormControlLabel control={<Radio/>} label={4-6} value={4-6}/>
       
        </RadioGroup>
        <FormHelperText>invaild selection</FormHelperText>
       </FormControl>
     </Box>
   )
 }
 
 export default MuiRadioButton
 