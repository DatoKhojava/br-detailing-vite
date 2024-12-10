import coverCar from "@/assets/car.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";

export default function MainSection() {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      vin: "",
    },
    onSubmit: ({ value }) => {
      navigate({
        to: "/history",
        search: () => ({ vin: value.vin }),
      });
    },
  });
  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-b from-sky-100 to-white mt-16 lg:mt-0 flex items-center justify-center"
        id="main"
      >
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                ავტომობილების ყველაზე სრულყოფილი
                <span className="block text-blue-500">
                  ისტორია საქართველოში.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                დააღწიეთ თავი ზედმეტ პრობლემებს, იარეთ მშვიდათ აკონტროლეთ თქვენი
                ავტომობილის რეპორტები
              </p>

              <form
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0"
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit();
                }}
              >
                <form.Field
                  name="vin"
                  children={(field) => (
                    <Input
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      type="text"
                      placeholder="შეიყვანეთ vin-კოდი"
                      className="text-lg h-12"
                    />
                  )}
                />
                <Button className="h-12 px-8 text-lg bg-blue-500 hover:bg-blue-600">
                  Go
                </Button>
              </form>
            </div>

            <div className="flex relative h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src={coverCar}
                alt="Car Fox mascot with blue sedan"
                className="object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
