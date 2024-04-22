import React from "react"
import { Meta } from "@storybook/react"
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Button,
} from "@mui/material"
import Icon from "../../packages/df-ui-icons"

const meta: Meta = {
  title: "MUI/Accordion",
}

export default meta

export function _Accordion() {
  return (
    <>
      <Typography variant="h2" mb={4} mt={8}>
        Accordion
      </Typography>
      <Accordion>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary aria-controls="panel3-content" id="panel3-header">
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </>
  )
}
