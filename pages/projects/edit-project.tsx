import React from 'react';
import { Grid, Typography, Button, Modal, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import {
    useAutocomplete,
    AutocompleteGetTagProps,
} from '@mui/base/AutocompleteUnstyled';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';




const Root = styled('div')(
    ({ theme }) => `
    color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
        };
    font-size: 14px;
  `,
);

const Label = styled('label')`
    padding: 0 0 4px;
    line-height: 1.5;
    display: block;
  `;

const InputWrapper = styled('div')(
    ({ theme }) => `
    width: 300px;
    border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'};
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    border-radius: 4px;
    padding: 1px;
    display: flex;
    flex-wrap: wrap;
  
    &:hover {
      border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    }
  
    &.focused {
      border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  
    & input {
      background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
      color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
        };
      height: 30px;
      box-sizing: border-box;
      padding: 4px 6px;
      width: 0;
      min-width: 30px;
      flex-grow: 1;
      border: 0;
      margin: 0;
      outline: 0;
    }
  `,
);

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
    label: string;
}

function Tag(props: TagProps) {
    const { label, onDelete, ...other } = props;
    return (
        <div {...other}>
            <span>{label}</span>
            <CloseIcon onClick={onDelete} />
        </div>
    );
}

const StyledTag = styled(Tag)<TagProps>(
    ({ theme }) => `
    display: flex;
    align-items: center;
    height: 24px;
    margin: 2px;
    line-height: 22px;
    background-color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : '#fafafa'
        };
    border: 1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e8e8e8'};
    border-radius: 2px;
    box-sizing: content-box;
    padding: 0 4px 0 10px;
    outline: 0;
    overflow: hidden;
  
    &:focus {
      border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
      background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    }
  
    & span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  
    & svg {
      font-size: 12px;
      cursor: pointer;
      padding: 4px;
    }
  `,
);

const Listbox = styled('ul')(
    ({ theme }) => `
    width: 300px;
    margin: 2px 0 0;
    padding: 0;
    position: absolute;
    list-style: none;
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    overflow: auto;
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1;
  
    & li {
      padding: 5px 12px;
      display: flex;
  
      & span {
        flex-grow: 1;
      }
  
      & svg {
        color: transparent;
      }
    }
  
    & li[aria-selected='true'] {
      background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
      font-weight: 600;
  
      & svg {
        color: #1890ff;
      }
    }
  
    & li.${autocompleteClasses.focused} {
      background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
      cursor: pointer;
  
      & svg {
        color: currentColor;
      }
    }
  `,
);



export default function EditEmployee() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [designation, setDesignation] = React.useState('');


    const handleChange = (event: SelectChangeEvent) => {
        setDesignation(event.target.value as string);
    };

    const [date_of_joining, setDateOfJoining] = React.useState<Dayjs | null>(null);

    const team = [
        { id: 1994, name: 'Lalit'},
        { id: 1972, name: 'Harjeet' }
    ];

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
                        Edit Project
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={6}>
                            <TextField id="project-name" label="Project Name" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="client-name" label="Client Name" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField id="rate" label="Rate" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <FormControl fullWidth margin="dense">
                                <InputLabel id="fixed"></InputLabel>
                                <Select
                                    labelId="fixed"
                                    id="fixed"

                                    label="fixed"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={1}>Fixed</MenuItem>
                                    <MenuItem value={2}>Hourly</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth margin="dense">
                                <InputLabel id="fixed">Priority</InputLabel>
                                <Select
                                    labelId="fixed"
                                    id="fixed"

                                    label="fixed"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={1}>High</MenuItem>
                                    <MenuItem value={2}>Medium</MenuItem>
                                    <MenuItem value={2}>Low</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="email-address" label="Add Project" variant="outlined" fullWidth margin="dense" />
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
                            <Autocomplete
                                multiple
                                id="team"
                                options={team}
                                getOptionLabel={(option) => option.name}
                                defaultValue={[team[1]]}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        label="Team"
                                        placeholder="Team"
                                        fullWidth margin="dense"/>
                                )}
                            />
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
                      
                        <Grid item xs={12} md={12}>
                            <Button variant="contained" color="primary">Submit</Button>
                        </Grid>
                    </Grid>

                </Box>
            </Modal>

        </>
    )
}
