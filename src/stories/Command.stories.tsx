import type { Meta, StoryObj } from "@storybook/react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
const meta: Meta = {
  title: "ShadCN/Command",
  component: Command,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

const commandGroups = [
  {
    label: "Group 1",
    items: ["Item 1", "Item 2", "Item 3"],
  },
  {
    label: "Group 2",
    items: ["Item 1", "Item 2", "Item 3"],
  },
  {
    label: "Group 3",
    items: ["Item 1", "Item 2", "Item 3"],
  },
  // ...
];

export const Default: Story = {
  render: () => {
    return (
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {commandGroups.map((group) => (
            <CommandGroup heading={group.label}>
              {group.items.map((item) => (
                <CommandItem>{group.label + " - " + item}</CommandItem>
              ))}
              <CommandSeparator />
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    );
  },
};
