export interface LoginUser {
  email: string;
  password: string;
}

export interface AuthLoginResponse {
  message: string;
  access_token: string;
}

export interface VinCode {
  vin: string;
}

export interface VehicleResponse {
  _id: string;
  manufacturer: string;
  carModel: string;
  status: boolean;
  year: string;
  fuel: string;
  engine: number;
  mileage: number;
  category: string;
  transmission: string;
  steeringWheel: string;
  driveWheels: string;
  serialNumber: string;
  airbags: boolean;
  vinCode: string;
  createdAt: string;
  updatedAt: string;
}
