"use client";
import { AppContextProvider } from "./context/AppContext";
import DataInput from "./modules/DataInput/DataInput";

import { TabView, TabPanel } from "primereact/tabview";
import { OpeningHandStat } from "./modules/OpeningHandStat/OpeningHandStat";

export default function Home() {
  return (
    <main>
      <AppContextProvider>
        <DataInput />
        <br />
        <TabView className="surface-50 border-round">
          <TabPanel header="Opening Hand">
            <OpeningHandStat />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </TabPanel>
          <TabPanel header="Mulligan">
            <p>Coming soon!</p>
          </TabPanel>
          <TabPanel header="Drop Miss">
            <p>Coming soon!</p>
          </TabPanel>
        </TabView>
      </AppContextProvider>
    </main>
  );
}
