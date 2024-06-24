import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";
import { ExhibitorTitle } from "../exhibitor/ExhibitorTitle";

export const BoothEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="event.id" reference="Event" label="Event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="exhibitor.id"
          reference="Exhibitor"
          label="Exhibitor"
        >
          <SelectInput optionText={ExhibitorTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="exhibitors"
          reference="Exhibitor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExhibitorTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
