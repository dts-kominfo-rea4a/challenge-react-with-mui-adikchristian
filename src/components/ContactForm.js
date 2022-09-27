// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Button, Card, CardActions, CardContent, FormControl, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = ({ addContact }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    const initialState = {
        name: "",
        email: "",
        phone: "",
        photo: "",
    }

    const [contact, setContact] = useState(initialState)

    const handleChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        addContact(contact)
        setContact(initialState)
    }

    return (
        <>
            <Card sx={{ margin: "auto", backgroundColor: "#F3F1EB" }}>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <FormControl fullWidth margin="normal">
                            <TextField required id="filled-basic" variant="filled" name="name" label="Name" value={contact.name} onChange={handleChange} />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField required id="filled-basic" variant="filled" name="phone" label="Phone" value={contact.phone} onChange={handleChange} />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField required id="filled-basic" variant="filled" name="email" label="email" value={contact.email} onChange={handleChange} />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField required id="filled-basic" variant="filled" name="photo" label="photo" value={contact.photo} onChange={handleChange} />
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Button size="small" type="submit" color="success">ADD NEW</Button>
                    </CardActions>
                </form>
            </Card>
        </>
    );
}

export default ContactForm;