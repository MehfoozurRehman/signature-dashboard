import React from "react";
import BuildInfoHeadingRow from "../Components/BuildInfoHeadingRow";
import BuildingInfoEntryRow from "../Components/BuildingInfoEntryRow";

export default function BuildingInformation() {
  const tableRowEntry = [
    { heading: "Floor#" },
    { heading: "Floor Name" },
    { heading: "12" },
    { heading: "56" },
    {
      heading: "Details",
      type: "button",
      path: "/dashboard/spaces",
    },
    {
      heading: "Edit",
      type: "button",
      path: "/dashboard/building-information-edit",
    },
  ];
  const tableEntryHead = [
    { heading: "Floor" },
    { heading: "Floor Name" },
    { heading: "Total Spaces" },
    { heading: "Booked Spaces" },
    { heading: "" },
    { heading: "" },
  ];
  return (
    <div className="panel__container">
      <div className="panel__container__header">Building Information</div>
      <div className="panel__container__table">
        <BuildInfoHeadingRow tableEntryHeading={tableEntryHead} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
        <BuildingInfoEntryRow tableEntry={tableRowEntry} />
      </div>
    </div>
  );
}
