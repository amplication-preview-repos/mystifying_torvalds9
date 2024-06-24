import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SponsorList } from "./sponsor/SponsorList";
import { SponsorCreate } from "./sponsor/SponsorCreate";
import { SponsorEdit } from "./sponsor/SponsorEdit";
import { SponsorShow } from "./sponsor/SponsorShow";
import { ExhibitorList } from "./exhibitor/ExhibitorList";
import { ExhibitorCreate } from "./exhibitor/ExhibitorCreate";
import { ExhibitorEdit } from "./exhibitor/ExhibitorEdit";
import { ExhibitorShow } from "./exhibitor/ExhibitorShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { BoothList } from "./booth/BoothList";
import { BoothCreate } from "./booth/BoothCreate";
import { BoothEdit } from "./booth/BoothEdit";
import { BoothShow } from "./booth/BoothShow";
import { AttendeeList } from "./attendee/AttendeeList";
import { AttendeeCreate } from "./attendee/AttendeeCreate";
import { AttendeeEdit } from "./attendee/AttendeeEdit";
import { AttendeeShow } from "./attendee/AttendeeShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"EventManagementService"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Sponsor"
          list={SponsorList}
          edit={SponsorEdit}
          create={SponsorCreate}
          show={SponsorShow}
        />
        <Resource
          name="Exhibitor"
          list={ExhibitorList}
          edit={ExhibitorEdit}
          create={ExhibitorCreate}
          show={ExhibitorShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Booth"
          list={BoothList}
          edit={BoothEdit}
          create={BoothCreate}
          show={BoothShow}
        />
        <Resource
          name="Attendee"
          list={AttendeeList}
          edit={AttendeeEdit}
          create={AttendeeCreate}
          show={AttendeeShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
