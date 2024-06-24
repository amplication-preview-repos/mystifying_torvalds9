import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BoothTitle } from "../booth/BoothTitle";

export const ExhibitorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="booth.id" reference="Booth" label="Booth">
          <SelectInput optionText={BoothTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="booths"
          reference="Booth"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BoothTitle} />
        </ReferenceArrayInput>
        <TextInput label="company" source="company" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
