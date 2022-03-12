import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function TabsTodo({ tab, handleChangeTab, todoFilter }) {
  return (
    <div>
      <Tabs
        orientation="vertical"
        value={tab}
        onChange={(e, tabValue) => handleChangeTab(tabValue)}
        sx={{ borderRight: 1, borderColor: "divider" }}>
        <Tab
          label={<FormatListBulletedIcon />} onClick={() => todoFilter("all")}/ >
        <Tab label={<RadioButtonUncheckedIcon />} onClick={() => todoFilter(false)} />
        <Tab label={<CheckCircleIcon />} onClick={() => todoFilter(true)} />
      </Tabs>
    </div>
  );
}

export default TabsTodo;
