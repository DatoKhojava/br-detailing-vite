import { vehicleServices } from "@/api/services/vehicleServices";
import { FormModal, Loader, SearchInput } from "@/components/custom";
import { VehiclesListSection } from "@/components/custom/sections";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/dashboard/list")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["getVehicles"],
    queryFn: vehicleServices.getVehicles,
  });

  if (isError) return <h1>Error</h1>;

  if (isLoading) {
    return (
      <div className="bg-slate-200 h-dvh flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Perform search operation or update state in parent component
  };

  console.log(data);

  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 min-[320px]:text-xl min-[375px]:text-2xl text-3xl font-semibold tracking-tight first:mt-0">
        ავტომობილების სრული სია
      </h2>

      <div className="mt-4">
        <SearchInput
          placeholder="ავტომობილის VIN ან სერიული ნომერი"
          onSearch={handleSearch}
        />
      </div>

      <div className="mt-4 flex justify-end">
        <FormModal />
      </div>

      <div className="mt-4 my-10">
        <VehiclesListSection />
      </div>
    </div>
  );
}
