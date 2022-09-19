import { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {
  ConnectionStatus,
  DeviceDataType,
  DeviceStatus,
} from "../../../../types/dashboard";
import { DeviceDialog } from "../DeviceDialog/DeviceDialog";

export type DeviceGroupProps = {
  deviceType: string;
  deviceData: DeviceDataType[];
};

export const DeviceGroup: React.FC<DeviceGroupProps> = ({
  deviceType,
  deviceData,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const totalNumberOfDevices = deviceData.length;

  const devicesOnline = deviceData.filter(
    ({ connectionStatus }) => connectionStatus === ConnectionStatus.Online
  );
  const percentageOfDevicesOnline = Math.round(
    (devicesOnline.length / totalNumberOfDevices) * 100
  );

  const failedDevices = deviceData.filter(
    ({ status }) => status === DeviceStatus.Failed
  );
  const percentageOfDevicesFailed = Math.round(
    (failedDevices.length / totalNumberOfDevices) * 100
  );

  return (
    <div className="device-group">
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            Device Type: {deviceType}
          </Typography>
          <Typography variant="h5" component="div" gutterBottom>
            Total number of devices {totalNumberOfDevices}
          </Typography>
          <Typography sx={{ mb: 1.5 }}>
            Percentage of devices online: {percentageOfDevicesOnline}%
          </Typography>
          <Typography variant="body2">
            Percentage of devices failed: {percentageOfDevicesFailed}%
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleClickOpen} size="medium">
            See all devices
          </Button>
        </CardActions>
      </Card>
      <DeviceDialog
        deviceType={deviceType}
        open={open}
        onClose={handleClose}
        deviceData={deviceData}
      />
    </div>
  );
};
