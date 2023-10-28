import { TextField, Stack, Grid, Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import axios from "axios";
import ProfileCard from "../card";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    if (searchTerm.trim() === "") {
      setErrorMessage("Please enter a search term.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    setIsLoading(true);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${searchTerm}`
    );
    const data = response.data;
    if (data.total_count === 0) {
      setErrorMessage("Not found profile with this term.");
      setUsers([]);
    } else {
      setUsers(data.items);
      setErrorMessage("");
    }
    setIsLoading(false);
  };

  const clearData = () => {
    setUsers([]);
    setSearchTerm("");
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Stack mt={3} gap={3}>
      <TextField
        label="Search Users..."
        variant="outlined"
        fullWidth
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={handleEnterKey}
        value={searchTerm}
      />
      <LoadingButton
        type="button"
        loading={isLoading}
        variant="contained"
        fullWidth
        onClick={handleSubmit}
      >
        Submit
      </LoadingButton>
      {errorMessage && (
        <Typography variant="body2" color="error">
          {errorMessage}
        </Typography>
      )}
      {users.length > 0 && (
        <Button color="error" variant="outlined" onClick={clearData}>
          Clear Data
        </Button>
      )}
      <Grid container>
        {users.map((user, index) => (
          <Grid
            style={{ textAlign: "-webkit-center" }}
            pb={2}
            item
            xs={12}
            md={4}
            key={index}
          >
            <ProfileCard loginName={user.login} avatar={user.avatar_url} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
