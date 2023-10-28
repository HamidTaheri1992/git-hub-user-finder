import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";

//Styled
const StyledCard = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: 345,
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  padding: "10px",
  width: "70px",
  height: "70px",
  borderRadius: "50%",
}));

//Function
function ProfileCard({ loginName, avatar }) {
  return (
    <StyledCard>
      <StyledCardMedia component="img" alt={loginName} image={avatar} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {loginName}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/user/${loginName}`}>
          <Button size="small">More</Button>
        </Link>
      </CardActions>
    </StyledCard>
  );
}

export default ProfileCard;
