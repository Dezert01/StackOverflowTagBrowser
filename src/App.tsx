import { api, mockData } from "./api";
import { Input } from "./components/ui/input";
import { TTag, TTagsRequest } from "./model";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { z } from "zod";
import {
  Form,
  FormControl,
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
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const sortType = [
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Popularity",
    value: "popular",
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
  // states
  const [openSort, setOpenSort] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const [page, setPage] = useState<number>(0);
  const [sort, setSort] = useState<string>("name");
  const [order, setOrder] = useState<string>("asc");
  const [pageSize, setPageSize] = useState<number>(10);

  // form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sort: "name",
      order: "asc",
      pageSize: 10,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSort(values.sort);
    setOrder(values.order);
    setPageSize(values.pageSize);
  }

  // const getMockTags = (size: number, page: number) => {
  //   const data = { ...mockData };
  //   data.items = data.items.slice(page * size, (page + 1) * size);
  //   return data;
  // };

  // query
  const tagsQuery = useQuery({
    queryKey: ["tags", page, pageSize, sort, order],
    queryFn: () => getTags(pageSize, page, sort, order),
    // queryFn: () => getMockTags(pageSize, page),
    // placeholderData: keepPreviousData, // uncomment if wanna prevent flickering between fetching
  });

  const getTags = async (
    pageSize: number,
    page: number,
    sort: string,
    order: string,
  ) => {
    const res = await api.get<TTagsRequest>(
      "/tags?page=" +
        (page + 1) +
        "&pagesize=" +
        pageSize +
        "&order=" +
        order +
        "&sort=" +
        sort +
        "&site=stackoverflow",
    );
    console.log(res);
    return res.data;
  };

  // table

  return (
    <div className="container absolute left-1/2 top-1/2 mx-auto -translate-x-1/2 -translate-y-1/2 overflow-hidden">
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

      <div className="mx-auto my-4 flex max-h-[40rem] w-2/3 overflow-y-auto border-2">
        <Table className="w-full ">
          <TableHeader>
            <TableRow>
              <TableHead>Tag Name</TableHead>
              <TableHead>Count</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tagsQuery.status === "pending" ? (
              <TableRow>
                <TableCell>Loading ...</TableCell>
              </TableRow>
            ) : tagsQuery.status === "error" ? (
              <TableRow>
                <TableCell className="text-red-600">
                  Error: {tagsQuery.error.message}
                </TableCell>
              </TableRow>
            ) : (
              tagsQuery.data?.items.map((tag) => (
                <TableRow>
                  <TableCell>{tag.name}</TableCell>
                  <TableCell>{tag.count}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex w-full items-center justify-center space-x-8 px-8">
        <Button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
        >
          Previous Page
        </Button>
        <span>Current Page: {page + 1}</span>
        <Button
          onClick={() =>
            setPage((prev) => (tagsQuery.data?.has_more ? prev + 1 : prev))
          }
          disabled={!tagsQuery.data?.has_more}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
}

export default App;
