import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BOOTH_TITLE_FIELD } from "./BoothTitle";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";
import { EXHIBITOR_TITLE_FIELD } from "../exhibitor/ExhibitorTitle";

export const BoothShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <ReferenceField label="Event" source="event.id" reference="Event">
          <TextField source={EVENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Exhibitor"
          source="exhibitor.id"
          reference="Exhibitor"
        >
          <TextField source={EXHIBITOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Exhibitor"
          target="boothId"
          label="Exhibitors"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Booth" source="booth.id" reference="Booth">
              <TextField source={BOOTH_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="company" source="company" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="phone" source="phone" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
