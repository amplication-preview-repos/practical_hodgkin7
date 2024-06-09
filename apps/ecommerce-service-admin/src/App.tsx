import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProduitList } from "./produit/ProduitList";
import { ProduitCreate } from "./produit/ProduitCreate";
import { ProduitEdit } from "./produit/ProduitEdit";
import { ProduitShow } from "./produit/ProduitShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { CatGorieList } from "./catGorie/CatGorieList";
import { CatGorieCreate } from "./catGorie/CatGorieCreate";
import { CatGorieEdit } from "./catGorie/CatGorieEdit";
import { CatGorieShow } from "./catGorie/CatGorieShow";
import { CommandeList } from "./commande/CommandeList";
import { CommandeCreate } from "./commande/CommandeCreate";
import { CommandeEdit } from "./commande/CommandeEdit";
import { CommandeShow } from "./commande/CommandeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

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
        title={"EcommerceService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Produit"
          list={ProduitList}
          edit={ProduitEdit}
          create={ProduitCreate}
          show={ProduitShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="CatGorie"
          list={CatGorieList}
          edit={CatGorieEdit}
          create={CatGorieCreate}
          show={CatGorieShow}
        />
        <Resource
          name="Commande"
          list={CommandeList}
          edit={CommandeEdit}
          create={CommandeCreate}
          show={CommandeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
