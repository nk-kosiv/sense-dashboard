import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import { blue } from "@mui/material/colors";

import { DeviceDataType } from "../../molecules";

export type DevicesProps = { device: DeviceDataType };

export const Device: React.FC<DevicesProps> = ({ device }) => {
  const { name, serialNumber, status, connectionStatus } = device;
  return (
    <ListItem divider>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
          {status === "Failed" ? (
            <DoNotDisturbIcon color="error" />
          ) : (
            <CheckCircleIcon color="success" />
          )}
        </Avatar>
      </ListItemAvatar>
      <ListItemText>
        <strong>Name: </strong> {name}
      </ListItemText>
      <ListItemText>
        <strong>Serial number: </strong> {serialNumber}
      </ListItemText>
      <ListItemText>
        <strong>Location: </strong> {connectionStatus}
      </ListItemText>
      <ListItemText>
        <strong>Status: </strong> {status}
      </ListItemText>
    </ListItem>
  );
};
