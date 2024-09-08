import { Typography } from "@mui/material"

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component={'h1'} >h4 heading</Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci architecto, enim delectus velit vero ipsum itaque rerum id, doloremque dicta vitae quibusdam! Ipsam excepturi laudantium voluptates aperiam, voluptate illum expedita laborum dolorem, qui facere error quam, molestias hic eos nihil aut cumque delectus aliquid in reprehenderit! Cupiditate, labore reiciendis?
    </Typography>

    <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeat magnam nihil saepe possimus consequuntur, tempora deleniti? Laborum error, veniam repellat cupiditate dolore molestias assumenda ex, voluptatem nemo dolores ad.

    </Typography>
    </div>
  )
}

export default MuiTypography
