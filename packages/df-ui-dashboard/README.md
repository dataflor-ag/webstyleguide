# `@dataflor-ag/df-ui-dashboard`

> Provides various components that can be used to create a dashboard.

## Usage

```tsx
import { Dashboard, Sidebar, SidebarFooter, Content, Submenu } from "@dataflor-ag/df-ui-dashboard"

const MyApp = () => {
  <Dashboard>
    <Dashboard>
      <Sidebar>

        <p>Hello Sidebar</p>

        <SidebarFooter>
          <p>Footer</p>
        </SidebarFooter>

      </Sidebar>
      <Submenu title="Hello World!" subtitle="Hello Subtitle!">
        <p>Hello Submenu!</p>
      </Submenu>
      <Content>
        <h1>Hello Content!</h1>
      </Content>
    </Dashboard>
  </Dashboard>
}
```