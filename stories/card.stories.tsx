import type { Meta, StoryObj } from "@storybook/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
      </CardHeader>
      <CardContent>
        Card content example
      </CardContent>
    </Card>
  ),
}
