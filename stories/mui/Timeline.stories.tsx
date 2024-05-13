import React from "react";
import { Typography, Avatar, Stack } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

import { Meta } from "@storybook/react";

const meta: Meta = {
  title: "MUI/Timeline",
};

export default meta;

export function _Timeline() {
  return (
    <>
      <Typography variant="overline" mt={8}>
        Lab Component
      </Typography>
      <Typography variant="h2" mb={4}>
        Timeline
      </Typography>

      <h2>BASE</h2>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>

      <h2>Activity</h2>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <Avatar>PB</Avatar>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Typography variant="body2" fontWeight={600}>
                Phoenix Baker
              </Typography>
              <Typography variant="caption">Just now</Typography>
            </Stack>
            <Typography variant="body2">Added a file to Design</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <Avatar>OR</Avatar>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Typography variant="body2" fontWeight={600}>
                Olivia Rhye
              </Typography>
              <Typography variant="caption">2 mins ago</Typography>
            </Stack>
            <Typography variant="body2">
              Invited Alisa Hester to the team
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <Avatar>OR</Avatar>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Typography variant="body2" fontWeight={600}>
                Kate Morrison
              </Typography>
              <Typography variant="caption">3 hours ago</Typography>
            </Stack>
            <Typography variant="body2">
              Added 3 labels to the project Dataflor design system
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
