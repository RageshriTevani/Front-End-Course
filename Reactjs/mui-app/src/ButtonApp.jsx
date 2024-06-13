import React from "react";
import { Button,Badge,Alert,Card } from "@mui/material";
import { MailSharp } from "@mui/icons-material";

function ButtonApp()
{
    return(
        <>
        <Button variant="contained" color="success">Success</Button>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
        
        <Badge badgeContent={4} color="primary">
        <MailSharp color="action" />
        </Badge>

        <Alert severity="success">This is a success Alert.</Alert>
<Alert severity="info">This is an info Alert.</Alert>
<Alert severity="warning">This is a warning Alert.</Alert>
<Alert severity="error">This is an error Alert.</Alert>


        </>
    )
}
export default ButtonApp

// import React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// function ButtonApp()
//   {const theme = useTheme();

//   return (
//     <Card sx={{ display: 'flex' }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <CardContent sx={{ flex: '1 0 auto' }}>
//           <Typography component="div" variant="h5">
//             Live From Space
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" component="div">
//             Mac Miller
//           </Typography>
//         </CardContent>
//         <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
//           <IconButton aria-label="previous">
//             {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//           </IconButton>
//           <IconButton aria-label="play/pause">
//             <PlayArrowIcon sx={{ height: 38, width: 38 }} />
//           </IconButton>
//           <IconButton aria-label="next">
//             {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//           </IconButton>
//         </Box>
//       </Box>
//       <CardMedia
//         component="img"
//         sx={{ width: 250 }}
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Balrzz8W7IXGNtvBn4hblEF4GfOSJTKkiQ&s"
//         alt="Live from space album cover"
//       />
//     </Card>
//   );
// }
// export default ButtonApp
