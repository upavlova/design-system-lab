import type { Meta, StoryObj } from "@storybook/react"
import { Cloud, CreditCard, Github, Keyboard, LogOut, Settings, User } from "lucide-react"
import {
  Dropdown,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSeparator,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownTrigger,
} from "@/components/ui/dropdown"
const meta: Meta = {
  title: "UI/Dropdown",
}

export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>Open menu</DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>My account</DropdownLabel>
        <DropdownSeparator />
        <DropdownGroup>
          <DropdownItem>
            <User />
            Profile
          </DropdownItem>
          <DropdownItem>
            <CreditCard />
            Billing
          </DropdownItem>
          <DropdownItem>
            <Settings />
            Settings
          </DropdownItem>
          <DropdownItem>
            <Keyboard />
            Keyboard shortcuts
          </DropdownItem>
        </DropdownGroup>
        <DropdownSeparator />
        <DropdownItem>
          <Github />
          GitHub
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem>
          <LogOut />
          Log out
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
}

export const WithSubMenu: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>More options</DropdownTrigger>
      <DropdownContent>
        <DropdownItem>New tab</DropdownItem>
        <DropdownItem>New window</DropdownItem>
        <DropdownSeparator />
        <DropdownSub>
          <DropdownSubTrigger>
            <Cloud />
            More cloud tools
          </DropdownSubTrigger>
          <DropdownSubContent>
            <DropdownItem>Save to Drive</DropdownItem>
            <DropdownItem>Save to Dropbox</DropdownItem>
            <DropdownItem>Export as PDF</DropdownItem>
          </DropdownSubContent>
        </DropdownSub>
        <DropdownSeparator />
        <DropdownItem disabled>Print (unavailable)</DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
}

export const WithCheckboxes: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>View options</DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>Visible columns</DropdownLabel>
        <DropdownSeparator />
        <DropdownCheckboxItem checked>Status</DropdownCheckboxItem>
        <DropdownCheckboxItem checked>Title</DropdownCheckboxItem>
        <DropdownCheckboxItem>Assignee</DropdownCheckboxItem>
        <DropdownCheckboxItem>Priority</DropdownCheckboxItem>
      </DropdownContent>
    </Dropdown>
  ),
}

export const WithRadioGroup: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>Sort by</DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>Sort order</DropdownLabel>
        <DropdownSeparator />
        <DropdownRadioGroup value="date">
          <DropdownRadioItem value="date">Date modified</DropdownRadioItem>
          <DropdownRadioItem value="name">Name</DropdownRadioItem>
          <DropdownRadioItem value="size">File size</DropdownRadioItem>
        </DropdownRadioGroup>
      </DropdownContent>
    </Dropdown>
  ),
}
