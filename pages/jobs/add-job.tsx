import React from 'react';
import { Grid, Typography, Button, Modal, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


export default function AddJob() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [jobTitle, setJobTitle] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setJobTitle(event.target.value as string);
    };
    const [department, setDepartment] = React.useState('');

    const handleOnChange = (event: SelectChangeEvent) => {
        setDepartment(event.target.value as string);
    };

    const [status, setStatus] = React.useState('');

    const handleChanged = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
    };

    return (
        <>

            <Button variant="contained" color="primary" onClick={handleOpen} style={{float:'right'}}>
                Add Job
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal'>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='mb-3'>
                        Add Job
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={6}>
                            <TextField id="job-title" label="Job Title" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth margin="dense">
                                <InputLabel id="department">Department</InputLabel>
                                <Select
                                    labelId="department"
                                    id="department"
                                    value={department}
                                    label="department"
                                    onChange={handleOnChange}
                                >
                                    <MenuItem value={1}>Web Developer</MenuItem>
                                    <MenuItem value={2}>Web Designer</MenuItem>
                                    <MenuItem value={3}>SEO</MenuItem>
                                    <MenuItem value={4}>HR</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="vacancies" label="No. of Vacancies" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="experience" label="Experience" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth margin="dense">
                                <InputLabel id="fixed">Job Type</InputLabel>
                                <Select
                                    labelId="Job Type"
                                    id="jobTitle"
                                    value={jobTitle}
                                    label="Job Type"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={1}>Permanent</MenuItem>
                                    <MenuItem value={2}>Intern</MenuItem>
                                    <MenuItem value={2}>Trainee</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth margin="dense">
                                <InputLabel id="fixed">Status</InputLabel>
                                <Select
                                    labelId="Status"
                                    id="status"
                                    value={status}
                                    label="Status"
                                    onChange={handleChanged}
                                >
                                    <MenuItem value={1}>Open</MenuItem>
                                    <MenuItem value={2}>Closed</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField id="description" label="Description" variant="outlined" fullWidth margin="dense" />
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
