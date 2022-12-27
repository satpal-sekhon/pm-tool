import React from 'react';
import { Grid, Typography, Button, Modal, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


export default function EditPolicy() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [department, setDepartment] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setDepartment(event.target.value as string);
    };

   


    return (
        <>

            <Button variant="contained" color="primary" onClick={handleOpen} className='mr-2'>
                <ModeEditOutlineOutlinedIcon />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal'>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='mb-3'>
                        Edit Policy
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={12}>
                            <TextField id="first-name" label="Policy Name" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField id="last-name" label="Description" variant="outlined" fullWidth margin="dense" />
                        </Grid>



                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth margin="dense">
                                <InputLabel id="department">Department</InputLabel>
                                <Select
                                    labelId="department"
                                    id="department"
                                    value={department}
                                    label="department"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={1}>Web Developer</MenuItem>
                                    <MenuItem value={2}>Web Designer</MenuItem>
                                    <MenuItem value={3}>SEO</MenuItem>
                                    <MenuItem value={4}>HR</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>


                        <Grid item xs={12} md={6}>
                            <TextField id="upload-policy" label="Upload Policy" variant="outlined" fullWidth margin="dense" />
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Button variant="contained" component="label">
                                    Upload
                                    <input hidden accept="image/*" multiple type="file" />
                                </Button><span>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <input hidden accept="image/*" type="file" />
                                    <PictureAsPdfIcon/>
                                </IconButton>
                                </span>
                                
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Button variant="contained" color="primary">Save</Button>
                        </Grid>
                    </Grid>

                </Box>
            </Modal>

        </>
    )
}
