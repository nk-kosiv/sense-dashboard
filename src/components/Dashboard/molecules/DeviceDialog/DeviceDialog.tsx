import List from "@mui/material/List";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { DeviceDataType } from "../../../../types/dashboard";
import { Device } from "../../atoms";

export type DeviceDialogProps = {
  open: boolean;
  onClose: (value: string) => void;
  deviceData: DeviceDataType[];
  deviceType: string;
};

export const DeviceDialog: React.FC<DeviceDialogProps> = ({
  open,
  onClose,
  deviceData,
  deviceType,
}) => {
  return (
    <Dialog maxWidth="lg" onClose={onClose} open={open}>
      <DialogTitle>All devices by {deviceType} type</DialogTitle>
      <List sx={{ pt: 0 }}>
        {deviceData.map((device, deviceIndex) => (
          <Device key={deviceIndex.toString()} device={device} />
        ))}
      </List>
    </Dialog>
  );
};
