import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const meta: Meta = {
  title: "ShadCN/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

const tableData = [
  { name: "Item 1", description: "Description 1", value: "Value 1" },
  { name: "Item 2", description: "Description 2", value: "Value 2" },
  { name: "Item 3", description: "Description 3", value: "Value 3" },
  // ...
];

export const Default: Story = {
  render: () => {
    const headerData = ["Name", "Description", "Value"];
    return (
      <Table>
        <TableCaption>Sample Table</TableCaption>
        <TableHeader>
          <TableRow>
            {headerData.map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((dataItem, index) => (
            <TableRow key={index}>
              <TableCell>{dataItem.name}</TableCell>
              <TableCell>{dataItem.description}</TableCell>
              <TableCell>{dataItem.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
