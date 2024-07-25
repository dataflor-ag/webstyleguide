import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DialogDelete } from "../../packages/df-ui-dialog-delete";
import { Box, Button, Typography } from "@mui/material";
import Icon from "@dataflor-ag/df-ui-icons";

const meta: Meta<typeof DialogDelete> = {
  title: "Components/DialogDelete",
  component: DialogDelete,
  tags: ["autodocs"],
  argTypes: {
    title: {
      type: "string",
    },

  },
};

export default meta;

type Story = StoryObj<typeof DialogDelete>;


export function DeleteDialogExampleWithText() {
  const [open, setOpen] = React.useState(false);
  const toggleDialog = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  function onDelete() {
    console.log("save");
  }
  function onClose() {
    console.log("close");
    setOpen(false);
  }
  return (
    <Box sx={{ width: "100%", height: "400px" }} role="presentation" p={4}>
      <Button onClick={toggleDialog(true)}>Open Dialog</Button>
      <DialogDelete
        onDelete={onDelete}
        onClose={onClose}
        open={open}
        title="title"
        buttonTextClose={"buttontext close"}
        buttonTextDelete={"buttontext delete"}
        text={"some text, lorem impsum etc."}
      />
    </Box>
  );
}

export function DeleteDialogExampleWithSecondaryTextAndCustomIcon() {
  const [open, setOpen] = React.useState(false);
  const toggleDialog = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  function onDelete() {
    console.log("save");
  }
  function onClose() {
    console.log("close");
    setOpen(false);
  }
  return (
    <Box sx={{ width: "100%", height: "400px" }} role="presentation" p={4}>
      <Button onClick={toggleDialog(true)}>Open Dialog</Button>
      <DialogDelete
        onDelete={onDelete}
        onClose={onClose}
        open={open}
        title="title"
        icon={<Icon.bill/>}
        buttonTextClose={"buttontext close"}
        buttonTextDelete={"buttontext delete"}
        text={"some text, lorem impsum etc."}
        secondaryText={"some secondary text, lorem impsum etc."}
      />
    </Box>
  );
}

export function DeleteDialogExampleWithWarningBox() {
  const [open, setOpen] = React.useState(false);
  const toggleDialog = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  function onDelete() {
    console.log("save");
  }
  function onClose() {
    console.log("close");
    setOpen(false);
  }
  return (
    <Box sx={{ width: "100%", height: "400px" }} role="presentation" p={4}>
      <Button onClick={toggleDialog(true)}>Open Dialog</Button>
      <DialogDelete
        onDelete={onDelete}
        onClose={onClose}
        open={open}
        title="Remove user"
        buttonTextClose={"Cancel"}
        buttonTextDelete={"Delete"}
        text={
          "Are you sure you want to remove the user? Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
        }
        warningBoxText={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
        }
      ></DialogDelete>
    </Box>
  );
}
export function DeleteDialogExampleWithCustomChildContent() {
  const [open, setOpen] = React.useState(false);
  const toggleDialog = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  function onDelete() {
    console.log("save");
  }
  function onClose() {
    console.log("close");
    setOpen(false);
  }
  return (
    <Box sx={{ width: "100%", height: "400px" }} role="presentation" p={4}>
      <Button onClick={toggleDialog(true)}>Open Dialog</Button>
      <DialogDelete
        onDelete={onDelete}
        onClose={onClose}
        open={open}
        title="title"
        buttonTextClose={"buttonTextClose"}
        buttonTextDelete={"buttonTextDelete"}
        icon={<Icon.trash />}
      >
        <Box
          height="10rem"
          sx={{
            border: "2px solid grey",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4">custom child Content</Typography>
        </Box>
      </DialogDelete>
    </Box>
  );
}

export function DeleteDialogFullscreenAndCustomChildContent() {
  const [open, setOpen] = React.useState(false);
  const toggleDialog = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  function onDelete() {
    console.log("save");
  }
  function onClose() {
    console.log("close");
    setOpen(false);
  }
  return (
    <Box sx={{ width: "100%", height: "400px" }} role="presentation" p={4}>
      <Button onClick={toggleDialog(true)}>Open Dialog</Button>
      <DialogDelete
        onDelete={onDelete}
        onClose={onClose}
        open={open}
        title="title"
        buttonTextClose={"buttonTextClose"}
        buttonTextDelete={"buttonTextDelete"}
        fullScreen
        icon={<Icon.trash />}
      >
        <Box
            sx={{
            height: "77vh",
            border: "2px solid grey",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4">Child Content</Typography>
        </Box>
      </DialogDelete>
    </Box>
  );
}

