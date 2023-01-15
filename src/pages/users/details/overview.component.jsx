import { Grid } from "@mui/material";

export default function OverView({ userInfo }) {
  return (
    <Grid container>
      <Grid item xs={4}>
        <span>Created:</span>
      </Grid>
      <Grid item xs={8}>
        {userInfo?.created_at}
      </Grid>{" "}
      <Grid item xs={4}>
        <span>Follower:</span>
      </Grid>
      <Grid item xs={8}>
        {userInfo?.followers}
      </Grid>
      <Grid item xs={4}>
        <span>Following:</span> 
      </Grid>
      <Grid item xs={8}>
        {userInfo?.following}
      </Grid>
    </Grid>
  );
}
