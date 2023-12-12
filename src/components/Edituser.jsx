import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function Edit({ user, onEditUser }) {
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...user
    }));
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditUser(formData);
  };

  return (
    <div className="container">
      <h1 className="sub-heading">EDIT USER</h1>
      {/* Displaying all field for which the edit button is clicked */}
      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-basic"
          type="text"
          label="NAME"
          style={{ backgroundColor: "#FFFFFF" }}
          sx={{
            width: "75%",
          }}
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-basic"
          type="text"
          label="USERNAME"
          style={{ backgroundColor: "#FFFFFF" }}
          sx={{
            width: "75%",
          }}
          value={formData.username}
          onChange={(event) =>
            setFormData({ ...formData, username: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-basic"
          type="text"
          label="EMAIL ADDRESS"
          style={{ backgroundColor: "#FFFFFF" }}
          sx={{
            width: "75%",
          }}
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-basic"
          type="text"
          label="PHONE NUMBER"
          style={{ backgroundColor: "#FFFFFF" }}
          sx={{
            width: "75%",
          }}
          value={formData.phone}
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-basic"
          type="text"
          label="WEBSITE"
          style={{ backgroundColor: "#FFFFFF" }}
          sx={{
            width: "75%",
          }}
          value={formData.website}
          onChange={(event) =>
            setFormData({ ...formData, website: event.target.value })
          }
        />
        <Stack direction="row" spacing={2}></Stack>
        <Button type="submit"variant="contained">EDIT USER</Button>
        
      </form>
    </div>
  );
}

export default Edit;