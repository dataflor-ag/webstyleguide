import React from "react";
import { Typography, Stack, Avatar, AvatarGroup } from "@mui/material";
import { Meta } from "@storybook/react";

const meta: Meta = {
  title: "MUI/Avatar",
};

export default meta;

export function _Avatar() {
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Avatar
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ width: 24, height: 24, fontSize: "0.625rem" }}>NA</Avatar>
        <Avatar sx={{ width: 32, height: 32, fontSize: "0.75rem" }}>NA</Avatar>
        <Avatar sx={{ width: 40, height: 40, fontSize: "1rem" }}>NA</Avatar>
        <Avatar sx={{ width: 48, height: 48, fontSize: "1.125rem" }}>NA</Avatar>
        <Avatar sx={{ width: 56, height: 56, fontSize: "1.25rem" }}>NA</Avatar>
        <Avatar sx={{ width: 64, height: 64, fontSize: "1.5rem" }}>NA</Avatar>
        <Avatar sx={{ width: 72, height: 72, fontSize: "1.5rem" }}>NA</Avatar>
        <Avatar sx={{ width: 80, height: 80, fontSize: "1.5rem" }}>NA</Avatar>
      </Stack>
      <Stack>
        <Avatar variant="rounded" />
      </Stack>

      <Typography variant="h2" mb={4} mt={8}>
        Avatar group
      </Typography>
      <Stack direction="row">
        <AvatarGroup total={8}>
          <Avatar alt="Remy Sharp" src={"/assets/img/avatar.jpg"} />
          <Avatar alt="Travis Howard" src={"/assets/img/avatar.jpg"} />
          <Avatar alt="Agnes Walker" src={"/assets/img/avatar.jpg"} />
          <Avatar alt="Trevor Henderson" src={"/assets/img/avatar.jpg"} />
        </AvatarGroup>
      </Stack>
    </>
  );
}
