import { Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useQuery } from "@tanstack/react-query";
import { styled } from "@mui/system";
import Alert from "@mui/material/Alert";
import Request from "../../../axios";

export default function Repository({ userInfo }) {
  const { isLoading, data: repositories } = useQuery({
    queryKey: ["repositories"],
    queryFn: () =>
      Request(`http://localhost:4000/api/users/${userInfo.login}/repos`),
  });
  if (isLoading) return <Alert severity="success">Data is Loading</Alert>;

  return (
    <Grid container columnSpacing={2} rowSpacing={2}>
      {repositories?.map((rep) => (
        <Grid item xs={12} md={6}>
          <RepItem rep={rep} />
        </Grid>
      ))}
    </Grid>
  );
}

const RepItem = ({ rep }) => (
  <a href={rep.html_url} target="_blank" rel="noreferrer">
    <RepItemParent>
      <h4 style={{ color: "#0969da" }}>
        {rep.name}
        <VisibilitySpan>{rep.visibility}</VisibilitySpan>
      </h4>
      <span style={{ color: "black", overflow: "auto" }}>
        {rep.description || "No description"}
      </span>
      <StatusSpanParent>
        <StatusSpan info={rep.language} />
        <StatusSpan info={rep.watchers_count} />
      </StatusSpanParent>
    </RepItemParent>
  </a>
);

const StatusSpan = ({ info }) => (
  <span style={{ margin: "0 10px" }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <StarBorderIcon style={{ marginRight: 2, fontSize: "15px" }} />
      {info}
    </div>
  </span>
);

const StatusSpanParent = styled("div")({
  display: "flex",
  direction: "row",
  margin: "10px 0",
  fontSize: "12px",
  alignItems: "center",
});

const VisibilitySpan = styled("span")({
  border: "1px solid #d0d7de",
  borderRadius: "10px",
  fontSize: 12,
  padding: 3,
  marginLeft: 5,
  color: "#57606a",
});

const RepItemParent = styled("div")({
  border: "1px solid #d0d7de",
  paddingLeft: "20px",
  cursor: "pointer",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
