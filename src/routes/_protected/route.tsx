import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { useAuthStore } from "../../lib/store/useAuthStore";

export const Route = createFileRoute("/_protected")({
  beforeLoad: ({ location }) => {
    const isLogged = useAuthStore.getState().isLogged;

    if (!isLogged) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
