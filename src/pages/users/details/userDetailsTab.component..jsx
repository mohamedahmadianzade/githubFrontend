import * as React from "react";
import Tab from "@mui/material/Tab";
import FavoriteIcon from "@mui/icons-material/AllInbox";
import PhoneMissedIcon from "@mui/icons-material/Assignment";
import TabContext from "@mui/lab/TabContext";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OverView from "./overview.component";
import Repository from "./repository.component";
export default function UserDetailsTab({ userInfo }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", paddingLeft: 5 }}>
        <TabList onChange={handleChange} >
          <Tab
            icon={<PhoneMissedIcon />}
            iconPosition="start"
            label="Overview"
            value="1"
          />
          <Tab
            icon={<FavoriteIcon />}
            iconPosition="start"
            label="Repositories"
            value="2"
          />
        </TabList>
      </Box>
      <TabPanel value="1">
        <OverView userInfo={userInfo} />
      </TabPanel>
      <TabPanel value="2">
        <Repository userInfo={userInfo}  />
      </TabPanel>
    </TabContext>
  );
}
