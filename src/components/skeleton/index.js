import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Skeleton from "@mui/joy/Skeleton";
import { Container, styled } from "@mui/material";

//Style
const StyledCardContent = styled(CardContent)(() => ({
  alignItems: "center",
  justifyContent: "center",
}));

const StyledCard = styled(Card)(() => ({
  margin: "5px",
}));

export default function SkeletonCard() {
  return (
    <Container>
      <StyledCard>
        <StyledCardContent
          style={{ justifyContent: "space-around" }}
          orientation="horizontal"
        >
          <Skeleton variant="circular" width={70} height={70} />
          <div>
            <Skeleton variant="text" width={200} />
            <Skeleton variant="text" width={200} />
            <Skeleton variant="text" width={200} />
            <Skeleton level="h2" variant="text" width={150} />
          </div>
        </StyledCardContent>
      </StyledCard>
      <StyledCard>
        <StyledCardContent orientation="horizontal">
          <Skeleton level="h2" variant="text" width={130} />
          <Skeleton level="h2" variant="text" width={130} />
          <Skeleton level="h2" variant="text" width={130} />
          <Skeleton level="h2" variant="text" width={130} />
        </StyledCardContent>
      </StyledCard>
      <StyledCard>
        <StyledCardContent orientation="horizontal">
          Repositories :
          <Skeleton level="h1" variant="text" width={130} />
        </StyledCardContent>
      </StyledCard>
    </Container>
  );
}
