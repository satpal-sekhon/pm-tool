import React from 'react';
import { Grid, Typography, Button, Modal, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';


export default function EditEmployee() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [designation, setDesignation] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setDesignation(event.target.value as string);
    };

    const [date_of_joining, setDateOfJoining] = React.useState<Dayjs | null>(null);


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
                        Edit Employee
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={6}>
                            <TextField id="first-name" label="Fist Name" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="last-name" label="Last Name" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="user-name" label="Username" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="employee-id" label="Employee ID" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="email-address" label="Email Address" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="contact-number" label="Contact Number" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker
                                    label="Date of joining"
                                    value={date_of_joining}
                                    onChange={(newValue) => {
                                        setDateOfJoining(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} fullWidth margin="dense" />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth margin="dense">
                                <InputLabel id="designation">Designation</InputLabel>
                                <Select
                                    labelId="designation"
                                    id="designation"
                                    value={designation}
                                    label="Designation"
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
                            <FormControl fullWidth margin="dense">
                                <InputLabel id="team-leader">Team Leader</InputLabel>
                                <Select
                                    labelId="team-leader"
                                    id="team-leader"
                                    label="Team Leader">
                                    <MenuItem value={1}>Satpal Singh</MenuItem>
                                    <MenuItem value={2}>Rattan Singh</MenuItem>
                                    <MenuItem value={3}>Jitender</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="password" label="Password" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="confirm-password" label="Confirm Password" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Button variant="contained" color="primary">Submit</Button>
                        </Grid>
                    </Grid>

                </Box>
            </Modal>

        </>
    )
}
