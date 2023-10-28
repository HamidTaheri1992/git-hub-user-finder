import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, Box, Container } from "@mui/material";
import { styled } from "@mui/material";

//Style
const StyledBox = styled(Box)(() => ({
  width: "100%",
  margin: "20px",
  textAlign: "-webkit-center",
}));

const StyledCard = styled(Card)(() => ({
  width: "100%",
  margin: "10px",
}));

const NotButton = styled(Button)(() => ({
  cursor: "default",
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  margin: "10px",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
}));

//Function
export default function UserCard({
  loginName,
  avatar,
  following,
  followers,
  publicGists,
  publicRepos,
  name,
  location,
  bio,
  company,
  website,
  hireable,
}) {
  const openGitHubPage = () => {
    const githubUrl = `https://github.com/${loginName}`;
    window.open(githubUrl, "_blank");
  };

  const openGitHubRepositories = () => {
    const githubRepoUrl = `https://github.com/${loginName}?tab=repositories`;
    window.open(githubRepoUrl, "_blank");
  };

  return (
    <Container>
      <StyledCard>
        <Stack direction="row">
          <StyledBox sm={6}>
            <StyledCardMedia image={avatar} title={loginName} alt={loginName} />
            <Typography>{name}</Typography>
            <Typography>{location}</Typography>
          </StyledBox>
          <Box width={"100%"} sm={6}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {loginName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bio: {bio}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hireable: {hireable ? "✓" : "×"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Login: {loginName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Company: {company}
              </Typography>
              <Typography pb={2} variant="body2" color="text.secondary">
                Website: {website}
              </Typography>

              <Button
                variant="contained"
                size="medium"
                onClick={openGitHubPage}
              >
                Visit Github Page
              </Button>
            </CardContent>
          </Box>
        </Stack>
      </StyledCard>
      <StyledCard>
        <Stack p={1} gap={1} justifyContent={"center"} direction="row">
          <NotButton color="error" variant="outlined" size="small">
            Followers : {followers}
          </NotButton>
          <NotButton color="secondary" variant="outlined" size="small">
            Following : {following}
          </NotButton>
          <NotButton color="success" variant="outlined" size="small">
            Public Repos : {publicRepos}
          </NotButton>
          <NotButton variant="outlined" size="small">
            Public Gists : {publicGists}
          </NotButton>
        </Stack>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="h6">
            Repositories :{" "}
            <Button
              variant="contained"
              color="success"
              onClick={openGitHubRepositories}
            >
              View Repositories
            </Button>
          </Typography>
        </CardContent>
      </StyledCard>
      <StyledBox>
        <Button href="/" color="error" variant="contained" size="medium">
          Back To Home
        </Button>
      </StyledBox>
    </Container>
  );
}
