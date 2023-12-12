import { TextField } from "@mui/material";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Add({ onAddUser }) {
  // First Initializing an empty data's for all field
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  // Function to send the data to the onAddUser function in the App Component
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(formData);
    setFormData({ name: "", username: "", email: "", phone: "", website: "" });
  };

  return (
    <div className="container">
      <h1 className="sub-heading">ADD NEW USER</h1>
      {/* Displaying a form to get all required details from the user */}
      <form onSubmit={handleSubmit}>
        <TextField
          required
          sx={{
            width: "75%",
          }}
          margin="normal"
          id="outlined-basic"
          type="text"
          label="NAME"
          style={{ backgroundColor: "#FFFFFF" }}
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
        <TextField
          required
          sx={{
            width: "75%",
          }}
          margin="normal"
          id="outlined-basic"
          type="text"
          label="USERNAME"
          style={{ backgroundColor: "#FFFFFF" }}
          value={formData.username}
          onChange={(event) =>
            setFormData({ ...formData, username: event.target.value })
          }
        />
        <TextField
          required
          
          sx={{
            width: "75%",
          }}
          margin="normal"
          id="outlined-basic"
          type="text"
          label="EMAIL ADDRESS"
          style={{ backgroundColor: "#FFFFFF" }}
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <TextField
          required
          sx={{
            width: "75%",
          }}
          margin="normal"
          id="outlined-basic"
          type="text"
          label="PHONE NUMBER"
          style={{ backgroundColor: "#FFFFFF" }}
          value={formData.phone}
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }
        />
        <TextField
          required
          sx={{
            width: "75%",
          }}
          margin="normal"
          id="outlined-basic"
          type="text"
          label="WEBSITE"
          style={{ backgroundColor: "#FFFFFF" }}
          value={formData.website}
          onChange={(event) =>
            setFormData({ ...formData, website: event.target.value })
          }
        />
        <Stack direction="row" spacing={2}></Stack>
        <Button variant="contained" color="success">
          ADD USER
        </Button>
      </form>
    </div>
  );
}

export default Add;
