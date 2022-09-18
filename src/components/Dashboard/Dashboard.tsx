import { Paper } from "@mui/material";
import _ from "lodash";

import { DeviceGroup } from "./molecules";
import "./Dashboard.scss";
import { useFetchData } from "../../hooks/useFetchData";

export const Dashboard = () => {
  const data = useFetchData();

  const groupByType = _.mapValues(_.groupBy(data, "deviceType"), (deviseList) =>
    deviseList.map((devise) => _.omit(devise, "deviceType"))
  );

  return (
    <div className="dashboard">
      <Paper variant="outlined">
        <section className="dashboard__groups">
          {Object.entries(groupByType).map(
            ([deviceType, deviceData], deviceIndex) => (
              <DeviceGroup
                key={deviceIndex.toString()}
                deviceType={deviceType}
                deviceData={deviceData}
              />
            )
          )}
        </section>
      </Paper>
    </div>
  );
};
