import React from 'react';
import { Container, Breadcrumbs, Grid, Typography, TableHead, Button, Modal, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import Head from 'next/head'
import Layout from '../components/layout';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import AddEmployee from '../employees/add-employee';
import EditEmployee from '../employees/edit-employee';
import DeleteEmployee from '../employees/delete-employee';
import ViewEmployee from '../employees/view-employee';

const drawerWidth = 240;

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

function createData(id: string, employeename: string, designation: string, joiningDate:string) {
    return { id, employeename,  designation, joiningDate};
}

const rows = [
    createData('AFD3544RE',  'Satpal Singh', 'Web Developer', '15 Jan 2019'),
    createData('BI6578F33', 'Sahil', 'Web Designer', '23 Dec 2021')
]


export default function ProjectReport() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [department, setDepartment] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setDepartment(event.target.value as string);
    };

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout drawerWidth={drawerWidth} />
            <main>
                <h1>Project Reports</h1>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" className='breadcrumb-link'>
                        Dashboard
                    </Link>

                    <Typography color="text.primary">Project Report</Typography>
                </Breadcrumbs>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='mt-3'>
                        <Grid item xs={12} sm={5}>
                            <TextField id="employee" label="Project" variant="outlined" fullWidth margin="dense" />
                        </Grid>
                        <Grid item xs={12} md={5}>
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

                        <Grid item xs={12} sm={2}> 
                        <Button variant="contained" style={{marginTop:'16px'}}>Search</Button>
                        </Grid>
                       
                        </Grid>
                <TableContainer component={Paper} className='mt-4'>
                    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Employee ID</TableCell>
                                <TableCell>Employee Name</TableCell>
                                <TableCell>Designation</TableCell>
                                <TableCell>Joining Date</TableCell>
                               
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : rows
                            ).map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row" style={{width:15}}>
                                        {index+1}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }}>
                                        {row.id}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }}>
                                        {row.employeename}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }}>
                                        {row.designation}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }}>
                                        {row.joiningDate}
                                    </TableCell>
                                </TableRow>
                            ))}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={5}
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                            'aria-label': 'rows per page',
                                        },
                                        native: true,
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </main>
        </>
    )
}
