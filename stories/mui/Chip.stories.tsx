import React from "react";
import { Typography, Stack, Chip, Divider } from "@mui/material";
import { Meta } from "@storybook/react";
import Icon from "../../packages/df-ui-icons/lib";

const meta: Meta = {
  title: "MUI/Chips",
};

export default meta;

export function Chips() {
  const handleChipDelete = () => {
    console.info("Clicked Chip delete");
  };
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Chips
      </Typography>
      <Typography variant="h3" mb={4} mt={8}>
        Basic
      </Typography>
      <Stack direction={"row"} gap={2}>
        <Chip label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
      </Stack>
      <Typography variant="h3" mb={4} mt={8}>
        Clickable
      </Typography>
      <Stack direction={"row"} gap={2}>
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          clickable
        />
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
      </Stack>
      <Typography variant="h3" mb={4} mt={8}>
        Deletable
      </Typography>
      <Stack direction={"row"} gap={2}>
        <Chip label="Deletable" onDelete={handleChipDelete} />
        <Chip
          label="Deletable"
          variant="outlined"
          onDelete={handleChipDelete}
        />
      </Stack>
      <Typography variant="h3" mb={4} mt={8}>
        Sizes
      </Typography>
      <Stack direction={"row"} gap={2}>
        <Chip label="Small" size="small" />
        <Chip label="Medium" size="medium" />
      </Stack>
      <Typography variant="h3" mb={4} mt={8}>
        Colors
      </Typography>

      <Stack direction={"row"} gap={2} mb={2}>
        <Chip label="Label" color="default" />
        <Chip label="Label" color="primary" />
        <Chip label="Label" color="secondary" />
        <Chip label="Label" color="success" />
        <Chip label="Label" color="warning" />
        <Chip label="Label" color="error" />
        <Chip label="Label" color="info" />
      </Stack>
      <Stack direction={"row"} gap={2} mb={2}>
        <Chip
          href="#basic-chip"
          component="a"
          clickable
          label="Label"
          color="default"
        />
        <Chip
          href="#basic-chip"
          component="a"
          clickable
          label="Label"
          color="primary"
        />
        <Chip
          href="#basic-chip"
          component="a"
          clickable
          label="Label"
          color="secondary"
        />
        <Chip
          href="#basic-chip"
          component="a"
          clickable
          label="Label"
          color="success"
        />
        <Chip
          href="#basic-chip"
          component="a"
          clickable
          label="Label"
          color="warning"
        />
        <Chip
          href="#basic-chip"
          component="a"
          clickable
          label="Label"
          color="error"
        />
        <Chip
          href="#basic-chip"
          component="a"
          clickable
          label="Label"
          color="info"
        />
      </Stack>
      <Stack direction={"row"} gap={2} mb={8}>
        <Chip label="Label" color="default" onDelete={handleChipDelete} />
        <Chip label="Label" color="primary" onDelete={handleChipDelete} />
        <Chip label="Label" color="secondary" onDelete={handleChipDelete} />
        <Chip label="Label" color="success" onDelete={handleChipDelete} />
        <Chip label="Label" color="warning" onDelete={handleChipDelete} />
        <Chip label="Label" color="error" onDelete={handleChipDelete} />
        <Chip label="Label" color="info" onDelete={handleChipDelete} />
      </Stack>

      <Divider />

      <Typography variant="h3" mb={4} mt={8}>
        With icon
      </Typography>
      <Stack direction={"row"} gap={2} mb={8}>
        <Chip icon={<Icon.checkSmall />} label="Label" color="default" />
        <Chip icon={<Icon.checkSmall />} label="Label" color="primary" />
        <Chip icon={<Icon.checkSmall />} label="Label" color="secondary" />
        <Chip icon={<Icon.checkSmall />} label="Label" color="success" />
        <Chip icon={<Icon.checkSmall />} label="Label" color="warning" />
        <Chip icon={<Icon.checkSmall />} label="Label" color="error" />
        <Chip icon={<Icon.checkSmall />} label="Label" color="info" />
      </Stack>
    </>
  );
}
