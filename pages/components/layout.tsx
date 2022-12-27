import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Navbar from './navbar';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import Link from 'next/link';
import EventNoteIcon from '@mui/icons-material/EventNote';

export default function Layout(props: any) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const links: any = [
        { link: '/', name: 'Dashboard' },
        { link: null, name: null, help_text: 'Employees' },
        { link: '/employees', name: 'Employees' },
        { link: '/projects', name: 'Projects' },
        { link: null, name: null, help_text: 'HR' },
        { link: '/', name: 'Sales' },
        { link: '/project-reports', name: 'Project Reports' },
        { link: '/reports/leave-report', name: 'Leave Reports' },
        { link: '/policies', name: 'Policies' },
        { link: null, name: null, help_text: 'Administrator' },
        { link: '/jobs', name: 'Jobs' },
        { link: '/', name: 'Activities' },
        { link: '/', name: 'Settings' },
    ];

    const drawer = (
        <div>
            <List>
                {links.map((link: any, index: number) => (<div key={index}>
                    {!link.link && !link.name ? <div className='help_text'>
                        <p>{link.help_text}</p>
                        <Divider />
                    </div> :
                        <Link href={link.link}>
                            <ListItem disablePadding>

                                <ListItemButton>
                                    <ListItemIcon>
                                        {link.name == 'Dashboard' ? <DashboardOutlinedIcon /> :
                                            link.name == 'Employees' ? <GroupsOutlinedIcon /> :
                                                link.name == 'Projects' ? <RocketLaunchOutlinedIcon /> :
                                                    link.name == 'Sales' ? <CurrencyRupeeOutlinedIcon /> :
                                                        link.name == 'Project Reports' ? <FileCopyOutlinedIcon /> :
                                                          link.name == 'Leave Reports' ? <EventNoteIcon /> :
                                                            link.name == 'Policies' ? <PictureAsPdfOutlinedIcon /> :
                                                                link.name == 'Jobs' ? <BusinessCenterOutlinedIcon /> :
                                                                    link.name == 'Activities' ? <NotificationsNoneOutlinedIcon /> :
                                                                        <SettingsOutlinedIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={link.name} />
                                </ListItemButton>

                            </ListItem>
                        </Link>
                    }
                </div>))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Navbar handleDrawerToggle={handleDrawerToggle} />
            <Box
                component="nav"
                sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
                    }}
                    open
                    className='sidebar-under-header'
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}