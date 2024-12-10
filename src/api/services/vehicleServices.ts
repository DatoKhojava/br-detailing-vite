import { VehicleResponse, VinCode } from "../types";
import { axiosInstance } from "./axiosInstance";

export const vehicleServices = {
  getVehicles: async () => {
    const res = await axiosInstance.get<VehicleResponse>("/vehicles");
    return res.data;
  },

  getVehicleById: async ({ vin }: VinCode) => {
    const res = await axiosInstance.get<VehicleResponse>(
      `/vehicles/vin/${vin}`
    );

    return res.data;
  },
};
