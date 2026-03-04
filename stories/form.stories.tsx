import type { Meta, StoryObj } from "@storybook/react"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const meta: Meta = {
  title: "UI/Form",
}

export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Form className="w-96">
      <FormField>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="juliapavlova" />
        </FormControl>
        <FormDescription>This is your public display name.</FormDescription>
      </FormField>
      <Button type="submit">Submit</Button>
    </Form>
  ),
}

export const WithValidationError: Story = {
  render: () => (
    <Form className="w-96">
      <FormField>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" defaultValue="not-an-email" aria-invalid />
        </FormControl>
        <FormMessage>Please enter a valid email address.</FormMessage>
      </FormField>
      <Button type="submit">Continue</Button>
    </Form>
  ),
}

export const SignInForm: Story = {
  render: () => (
    <Form className="w-96">
      <FormField>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="you@example.com" />
        </FormControl>
      </FormField>
      <FormField>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input type="password" placeholder="••••••••" />
        </FormControl>
        <FormDescription>Must be at least 8 characters.</FormDescription>
      </FormField>
      <Button type="submit" className="w-full">
        Sign in
      </Button>
    </Form>
  ),
}

export const MultiField: Story = {
  render: () => (
    <Form className="w-96">
      <div className="grid grid-cols-2 gap-4">
        <FormField>
          <FormLabel>First name</FormLabel>
          <FormControl>
            <Input placeholder="Julia" />
          </FormControl>
        </FormField>
        <FormField>
          <FormLabel>Last name</FormLabel>
          <FormControl>
            <Input placeholder="Pavlova" />
          </FormControl>
        </FormField>
      </div>
      <FormField>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="you@example.com" />
        </FormControl>
      </FormField>
      <FormField>
        <FormLabel>Company</FormLabel>
        <FormControl>
          <Input placeholder="Acme Inc." />
        </FormControl>
        <FormDescription>Optional.</FormDescription>
      </FormField>
      <Button type="submit">Create account</Button>
    </Form>
  ),
}
