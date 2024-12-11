import { vehicleServices } from "@/api/services/vehicleServices";
import { Loader } from "@/components/custom";
import { PageLayout } from "@/components/layouts";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/history")({
  component: RouteComponent,
});

function RouteComponent() {
  const { vin }: { vin: string } = Route.useSearch();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getVehicleInfo", vin],
    queryFn: () => vehicleServices.getVehicleById({ vin }),
  });

  if (isLoading) {
    return (
      <div className="bg-slate-200 h-dvh flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (isError) return <h1>Error</h1>;

  return (
    <PageLayout>
      <div className="h-dvh flex items-center justify-center">
        <p>{JSON.stringify(data)}</p>
      </div>
    </PageLayout>
  );
}
