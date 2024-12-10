import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { useAuthStore } from "@/lib/store/useAuthStore";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { LoginSchema } from "@/api/validators";
import { useMutation } from "@tanstack/react-query";
import { authServices } from "@/api/services/authServices";
import { LoginUser } from "@/api/types";

export const Route = createFileRoute("/login")({
  beforeLoad: ({ location }) => {
    const isLogged = useAuthStore.getState().isLogged;

    if (isLogged) {
      throw redirect({
        to: "/dashboard",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const setIsLogged = useAuthStore.getState().setIsLogged;
  const setToken = useAuthStore.getState().setToken;

  const mutation = useMutation({
    mutationKey: ["getAuthToken"],
    mutationFn: (data: LoginUser) =>
      authServices.getAuthToken({ email: data.email, password: data.password }),
  });

  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "t@gmail.com",
      password: "123",
    },
    validatorAdapter: zodValidator(),
    validators: {
      onChange: LoginSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const res = await mutation.mutateAsync({
          email: value.email,
          password: value.password,
        });

        if (res) {
          const { access_token } = res ?? {};

          setToken(access_token);
          setIsLogged(true);

          navigate({
            to: "/dashboard",
          });
        }

        console.log(value);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="bg-slate-200 h-dvh flex flex-col justify-center items-center">
      <Card className="w-[310px] sm:w-[500px]">
        <CardHeader>
          <CardTitle>სისტემაში შესვლა</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <div>
              <Label htmlFor="email">შეიყვანეთ თქვენი ელ-ფოსტა*</Label>
              <form.Field
                name="email"
                children={(field) => (
                  <>
                    <Input
                      placeholder="name@gmail.com"
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
            <div>
              <Label htmlFor="password">შეიყვანეთ თქვენი პაროლი*</Label>
              <form.Field
                name="password"
                children={(field) => (
                  <>
                    <Input
                      placeholder="*********"
                      type="password"
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
            <Button className="mt-4" type="submit">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
