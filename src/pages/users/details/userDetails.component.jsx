import { Button, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Request from "../../../axios";
import { Header } from "../../../components/Header.component";
import UserDetailsTab from "./userDetailsTab.component.";
import Alert from "@mui/material/Alert";


export default function UserDetails(params) {
  const { username } = useParams();
  const naviagte = useNavigate();
  const showList = () => {
    naviagte("/");
  };
  const {
    isLoading,
    error,
    data: userInfo,
  } = useQuery({
    queryKey: ["userdetails"],
    queryFn: () => Request(`users/${username}/details`),
  });

  if (isLoading) return <Alert severity="success">Data is Loading</Alert>;
  if (error) return <Alert severity="error">{error.message}</Alert>;
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Header>User Info </Header>
        <Button variant="outlined" onClick={showList}>
          Back to users list
        </Button>
      </div>
      <hr />
      <Grid container>
        <Grid item xs={12} sm={3}>
          <UserImage userInfo={userInfo} />
        </Grid>

        <Grid xs={12} sm={9}>
          <UserDetailsTab userInfo={userInfo} />
        </Grid>
      </Grid>
    </>
  );
}

const UserImage = ({ userInfo }) => (
  <a
    href={userInfo.html_url}
    target="_blank"
    rel="noreferrer"
    style={{ color: "black" }}
  >
    <img
      style={{ borderRadius: "50%", width: "100%" }}
      src={userInfo.avatar_url}
      alt="user"
    />
    <h2>{userInfo.name}</h2>
    <h3 style={{ fontWeight: "normal", marginTop: 0 }}>{userInfo?.login}</h3>
  </a>
);
