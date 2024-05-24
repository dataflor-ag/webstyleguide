import React from "react";
import { Meta } from "@storybook/react";
import { Typography, Button, Menu, MenuItem } from "@mui/material";
import Icon from "../../packages/df-ui-icons/lib";

const meta: Meta = {
  title: "MUI/Dropdown",
};

export default meta;

export function Dropdown() {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openDropdown = Boolean(anchorEl);
  const handleDropdownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Dropdown
      </Typography>
      <div>
        <Button
          variant="outlined"
          id="basic-button"
          aria-controls={openDropdown ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openDropdown ? "true" : undefined}
          onClick={handleDropdownClick}
        >
          Dashboard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openDropdown}
          onClose={handleDropdownClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleDropdownClose}>
            <Icon.user /> Profile
          </MenuItem>
          <MenuItem divider onClick={handleDropdownClose}>
            <Icon.settings /> Settings
          </MenuItem>
          <MenuItem onClick={handleDropdownClose}>
            <Icon.logout /> Logout
          </MenuItem>
        </Menu>
      </div>
    </>
  );
}
