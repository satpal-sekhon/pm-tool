import React from 'react';
import { Grid, Typography, Button, Modal, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, CardContent, Card, IconButton, CardMedia, useTheme } from '@mui/material';
import { Dayjs } from 'dayjs';
import Box from '@mui/material/Box';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


export default function EditEmployee() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();


  const [designation, setDesignation] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setDesignation(event.target.value as string);
  };

  const [date_of_joining, setDateOfJoining] = React.useState<Dayjs | null>(null);


  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen} className='mr-2'>
        <VisibilityOutlinedIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box className='modal' >
          <Typography id="modal-modal-title" variant="h6" component="h2" className='mb-3'>
            View Employee
          </Typography>
          <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="assets/img/profiles/avatar-02.jpg"
        alt="Live from space album cover"
      />
    </Card>
        </Box>
      </Modal>

    </>
  )
}
