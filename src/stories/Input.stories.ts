import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/input";

const meta = {
  title: "ShadCN/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: { placeholder: "Placeholder", type: "text" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
export const Disabled: Story = {
  args: { disabled: true },
};
export const Number: Story = {
  args: { type: "number" },
};
export const Checkbox: Story = {
  args: { type: "checkbox" },
};
export const Time: Story = {
  args: { type: "time" },
};
export const Color: Story = {
  args: { type: "color", className: "w-20 h-20" },
};
export const Date: Story = {
  args: { type: "date" },
};
export const Password: Story = {
  args: { type: "password" },
};
export const Range: Story = {
  args: { type: "range" },
};
export const File: Story = {
  args: { type: "file" },
};
export const Search: Story = {
  args: { type: "search" },
};
