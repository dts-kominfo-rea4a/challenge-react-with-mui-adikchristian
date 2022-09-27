// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { Avatar, ListItem, ListItemAvatar, Typography } from "@mui/material";
import { Box } from "@mui/system"

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    const {name, phone, email, photo} = data
    return (
        <ListItem sx={{ paddingTop:"10px", paddingBottom:"10px" }} divider>
            <ListItemAvatar>
                <Avatar alt="Photo Contact" src={photo} sx={{ width:80, height:80 }} />
            </ListItemAvatar>
            <Box sx={{ marginLeft: "15px" }} textAlign="left">
                <Typography variant="body1">{name}</Typography>
                <Typography variant="subtitle1" color="text.secondary">{phone}</Typography>
                <Typography variant="subtitle1" color="text.secondary">{email}</Typography>
            </Box>
        </ListItem>
    );
};

export default Contact;
