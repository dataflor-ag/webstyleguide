import React from "react";
import { Typography, Box } from "@mui/material";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

import { Meta } from "@storybook/react";

const meta: Meta = {
  title: "MUI X/TreeView",
};

export default meta;

export function _TreeView() {
  return (
    <div>
      <Typography variant="h2" mb={4} mt={8}>
        TreeView (MUI X)
      </Typography>
      <Box sx={{ height: 220, flexGrow: 1, maxWidth: 400 }}>
        <SimpleTreeView>
          <TreeItem itemId="grid" label="Data Grid">
            <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
            <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
            <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
          </TreeItem>
          <TreeItem itemId="pickers" label="Date and Time Pickers">
            <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
            <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
          </TreeItem>
        </SimpleTreeView>
      </Box>
    </div>
  );
}
