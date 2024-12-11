import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { useAuthStore } from "../../lib/store/useAuthStore";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

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
    <SidebarProvider>
      <AppSidebar />
      <main className="mt-2 mx-2 w-full">
        <SidebarTrigger />
        <div className="my-6">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
