import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "@tanstack/react-form";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
// import { zodValidator } from "@tanstack/zod-form-adapter";
import { Input } from "@/components/ui/input";
// import { VehicleSchema } from "@/api/validators";

export default function FormModal() {
  const form = useForm({
    defaultValues: {
      manufacturer: "",
      carModel: "",
    },
    // validatorAdapter: zodValidator(),
    validators: {
    //   onChange: VehicleSchema,
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus /> ახალი ავტომობილის დამატება
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ახალი ავტომობილის დამატება</DialogTitle>
          <DialogDescription>
            გთხოვთ გაითვალისწინოთ <span className="text-red-500">*</span>{" "}
            აღნიშნული ველები არის სავალდებულო!
          </DialogDescription>
        </DialogHeader>
        {/* <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
          ავტომობილის ინფორმაცია
        </h3> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="my-2">
            <Label htmlFor="manufacturer">
              ავტომობილის მწარმოებელი
              <sup className="text-red-500">*</sup>
            </Label>
            <form.Field
              name="manufacturer"
              children={(field) => (
                <>
                  <Input
                    placeholder="მაგ: ნისანი"
                    type="text"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors ? (
                    <p className="text-red-400 text-sm italic">
                      {field.state.meta.errors.join(", ")}
                    </p>
                  ) : null}
                </>
              )}
            />
          </div>
          <DialogFooter>
            <Button type="submit">დამატება</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
