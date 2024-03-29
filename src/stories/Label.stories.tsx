import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const meta: Meta = {
  title: "ShadCN/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { children: "Example label" },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ForInput: Story = {
  render: () => {
    return (
      <>
        <Label htmlFor="item-1">Label 1</Label>
        <Input
          id="item-1"
          placeholder="placeholder-1"
          className="col-span-2 h-8"
        />
      </>
    );
  },
};
