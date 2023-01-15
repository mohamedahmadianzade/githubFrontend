import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <Card sx={{ maxWidth: 345, cursor: "pointer" }}>
      <Link to={`/users/${user.login}`}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {user.login[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={user.login}
        />
        <CardMedia
          component="img"
          height="194"
          image={user.avatar_url}
          alt={user.login}
        />
      </Link>
      <CardContent style={{textAlign:'center'}}>
        <Typography variant="body2" color="text.secondary">
          <a href={user.html_url}  target="_blank" rel="noreferrer">View profile on github</a>
        </Typography>
      </CardContent>
    </Card>
  );
}
