import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { BoothTitle } from "../booth/BoothTitle";
import { SponsorTitle } from "../sponsor/SponsorTitle";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="booths"
          reference="Booth"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BoothTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="sponsors"
          reference="Sponsor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SponsorTitle} />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
