import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Taxing Laughter: The Joke Tax Chronicles
      </h1>
    </div>
  );
}
