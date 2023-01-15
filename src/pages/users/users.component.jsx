import { Header } from "../../components/Header.component";
import { Button, Grid } from "@mui/material";
import UserCard from "../../components/UserCard.component";
import Request from "../../axios";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
export default function Users(params) {
  const [nextPageLink, setNextPageLink] = useState("users?since=0");
  const [users, setData] = useState(null);

  const loadUsers = (first = false) => {
    Request(first ? "users?since=0" : nextPageLink).then((res) => {
      const nextPage = res?.links?.nextPage;
      setNextPageLink(`users?since=${nextPage}`);
      setData(res.data);
    });
  };

  useEffect(() => loadUsers(), []);

  if (!users) return <Alert severity="success">Data is Loading</Alert>;
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Header>List Github users ({users?.length || 0})</Header>
        <div>
        <Button variant="outlined" onClick={() => loadUsers(true)} style={{marginRight:2}}>
          First
        </Button>
        {nextPageLink && (
          <Button variant="outlined" onClick={()=> loadUsers(false)}>
            Next
          </Button>
        )}
        </div>
      </div>
      <hr />

      <Grid container>
        {users.map((user) => (
          <Grid item xs={4} key={user.login}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
