export enum DeviceStatus {
  Failed = "Failed",
  Ok = "Ok",
}

export enum ConnectionStatus {
  Online = "Online",
  Offline = "Offline",
}

export type DeviceDataType = {
  id: number;
  name: string;
  serialNumber: string;
  status: DeviceStatus;
  connectionStatus: ConnectionStatus;
};
