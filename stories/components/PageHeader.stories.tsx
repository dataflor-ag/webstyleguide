import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { PageHeader } from "../../packages/df-ui-page-header/lib/"
import { Button, Stack, Tabs, Tab } from "@mui/material"

const meta: Meta<typeof PageHeader> = {
  title: "Components/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  argTypes: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    children: {
      type: "function",
    },
  },
}

export default meta

type Story = StoryObj<typeof PageHeader>

export const Default: Story = {
  args: {
    title: "Hey, Ahoi & Welcome!",
  },
}

export const Content: Story = {
  args: {
    title: "Welcome back, Olivia",
    description:
      "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
  },
}
 
export function WithChildren() {
  const [value, setValue] = React.useState(0);
  const handleChangeTabs = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs =  ( <Tabs value={value} onChange={handleChangeTabs}>
        <Tab label="General" />
        <Tab label="Password" />
        <Tab label="Appearance" />
        <Tab label="Billing" />
        <Tab label="Notifications" />
      </Tabs>);

  return (
    <>
    
    <PageHeader
      title="Welcome back, Peter"
      description="Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
    >
      <Stack gap={4} direction={"row"}>
        <Button variant="outlined">Import</Button>
        <Button color="primary">Add</Button>
      </Stack>
    </PageHeader>
    <PageHeader
      title="Page Header with Tabs in description"
      description={tabs}
    >
      <Stack gap={4} direction={"row"}>
        <Button variant="outlined">Import</Button>
        <Button color="primary">Add</Button>
      </Stack>
    </PageHeader>

    </>
  )
}
