"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Separator } from "@/components/ui/separator";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { zodResolver } from "@hookform/resolvers/zod";
import { Store } from "@prisma/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2),
});

type SettingFormValues = z.infer<typeof formSchema>;

interface SettingFormProps {
  intialData: Store;
}

const SettingForm: React.FC<SettingFormProps> = ({ intialData }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<SettingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: intialData,
  });

  const onSubmit = async (data: SettingFormValues) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Store Setting" description="Manage store preferance" />
        <Button
          variant="destructive"
          size="sm"
          disabled={loading}
          onClick={() => {}}
        >
          <Trash className="w-4 h-4 " />
        </Button>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={loading}
                      placeholder="store name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            Save change
          </Button>
        </form>
      </Form>
      <Separator />
    </>
  );
};

export default SettingForm;
