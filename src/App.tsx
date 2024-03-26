import { api } from "./api";
import { Input } from "./components/ui/input";
import { TTagsRequest } from "./model";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";

const sortType = [
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Popularity",
    value: "popualar",
  },
  {
    label: "Activity",
    value: "activity",
  },
] as const;

const sortOrder = [
  {
    label: "Ascending",
    value: "asc",
  },
  {
    label: "Descending",
    value: "desc",
  },
] as const;

const formSchema = z.object({
  sort: z.string({
    required_error: "Please select a sorting type",
  }),
  order: z.string({
    required_error: "Please select an order",
  }),
  pageSize: z.coerce
    .number()
    .min(1, {
      message: "Page size must be at least 1",
    })
    .max(20, {
      message: "Page size must be at most 20",
    }),
});

function App() {
  const [openSort, setOpenSort] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sort: "name",
      order: "asc",
      pageSize: 10,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  // const getRooms = async () => {
  //   const res = await api.get<TTagsRequest>(
  //     "/tags?order=asc&sort=name&site=stackoverflow",
  //   );
  //   console.log(res);
  //   return res.data;
  // };

  // getRooms();

  return (
    <div className="container mx-auto h-1/2 border-2 border-red-300">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full items-start justify-center space-x-8 px-8"
        >
          <FormField
            control={form.control}
            name="pageSize"
            render={({ field }) => (
              <FormItem className="flex w-24 flex-col">
                <FormLabel>Page Size</FormLabel>
                <Input {...field} type="number" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sort"
            render={({ field }) => (
              <FormItem className="flex w-[14rem] flex-col">
                <FormLabel>Sort Type</FormLabel>
                <Popover open={openSort} onOpenChange={setOpenSort}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        role="combobox"
                        className={cn(
                          !field.value && "text-muted-foreground",
                          "justify-between",
                        )}
                      >
                        {field.value
                          ? sortType.find(
                              (system) => system.value === field.value,
                            )?.label
                          : "Select sort"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[14rem] p-0">
                    <Command>
                      <CommandList>
                        <CommandGroup>
                          {sortType.map((type) => (
                            <CommandItem
                              value={type.label}
                              key={type.value}
                              onSelect={() => {
                                form.setValue("sort", type.value);

                                setOpenSort(false);
                              }}
                            >
                              {type.label}

                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  type.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="order"
            render={({ field }) => (
              <FormItem className="flex w-[14rem] flex-col">
                <FormLabel>Sort Order</FormLabel>
                <Popover open={openOrder} onOpenChange={setOpenOrder}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        role="combobox"
                        className={cn(
                          !field.value && "text-muted-foreground",
                          "justify-between",
                        )}
                      >
                        {field.value
                          ? sortOrder.find((dir) => dir.value === field.value)
                              ?.label
                          : "Select order"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[14rem] p-0">
                    <Command>
                      <CommandList>
                        <CommandGroup>
                          {sortOrder.map((dir) => (
                            <CommandItem
                              value={dir.label}
                              key={dir.value}
                              onSelect={() => {
                                form.setValue("order", dir.value);
                                setOpenOrder(false);
                              }}
                            >
                              {dir.label}

                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  dir.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-[1.375rem]">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default App;
