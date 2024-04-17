import React from "react";
import { Meta } from "@storybook/react";
import { IconButton, Typography, Tooltip } from "@mui/material";
import Icon from "../../packages/df-ui-icons/lib";

const meta: Meta = {
  title: "MUI/Tooltips",
};

export default meta;

export function Tooltips() {
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Tooltips
      </Typography>
      <Tooltip title="Dashboard">
        <IconButton>
          <Icon.home />
        </IconButton>
      </Tooltip>
      <Tooltip title="Show password">
        <IconButton>
          <Icon.eye />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton>
          <Icon.trash />
        </IconButton>
      </Tooltip>
      <Tooltip title="Settings">
        <IconButton>
          <Icon.settings />
        </IconButton>
      </Tooltip>
    </>
  );
}
