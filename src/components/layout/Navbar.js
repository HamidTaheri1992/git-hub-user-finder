import { Box, Stack, styled, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

//Styles
const StyledWrapper = styled(Box)(() => ({
  backgroundColor: "#dc3545",
}));

const StyledLink = styled(Link)(() => ({
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
}));

const StyledStack = styled(Stack)(() => ({
  justifyContent: "space-between",
  alignItems: "center",
}));

//Function
export default function Navbar() {
  return (
    <StyledWrapper component="header">
      <Box component="nav" p={2} gap={1} justifyContent={"center"}>
        <StyledStack direction="row">
          <StyledStack direction="row" color="white" gap={2}>
            <GitHubIcon />
            <Typography component="h1" variant="h5" fontWeight="bold">
              Github Search
            </Typography>
          </StyledStack>
          <StyledStack direction="row" gap={3} fontSize={20}>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/about">About</StyledLink>
          </StyledStack>
        </StyledStack>
      </Box>
    </StyledWrapper>
  );
}
