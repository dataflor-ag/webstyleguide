import { Container } from "@mui/material"
import Box from "@mui/material/Box"

import {
  ButtonExamples,
  InputExamples,
  CardExamples,
  AvatarExamples,
  DialogExamples,
  AppbarExamples,
  LinkExamples,
  PaginationExamples,
  FormExamples,
  TabsExamples,
  ToggleButtonExamples,
  DropdownExamples,
  SwitchExamples,
  ChipExamples,
  DividerExamples,
  DrawerExamples,
  ButtonGroupExamples,
} from "./examples"

function App() {
  return (
    <Box padding={12} mb={40}>
      <Container>
        <ButtonExamples />
        <InputExamples />
        <CardExamples />
        <AvatarExamples />
        <DialogExamples />
        <AppbarExamples />
        <LinkExamples />
        <PaginationExamples />
        <FormExamples />
        <TabsExamples />
        <ToggleButtonExamples />
        <DropdownExamples />
        <SwitchExamples />
        <ChipExamples />
        <DividerExamples />
        <DrawerExamples />
        <ButtonGroupExamples />
      </Container>
    </Box>
  )
}

export default App
