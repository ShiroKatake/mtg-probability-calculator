"use client";
import { AppContextProvider } from "./context/AppContext";
import { DataInput } from "./modules/DataInput/DataInput";
import { TabView, TabPanel } from "primereact/tabview";
import { OpeningHandStat } from "./modules/OpeningHandStat/OpeningHandStat";

export default function Home() {
  return (
    <main className="grid">
      <AppContextProvider>
        <DataInput className="col-12 lg:col" />
        <div className="col-12 lg:col max-w-full">
          <TabView className="surface-50 border-round" scrollable>
            <TabPanel header="Opening Hand">
              <OpeningHandStat />
            </TabPanel>
            <TabPanel header="Mulligan">
              <p>Coming soon!</p>
            </TabPanel>
            <TabPanel header="Drop Miss">
              <p>Coming soon!</p>
            </TabPanel>
          </TabView>
        </div>
      </AppContextProvider>
    </main>
  );
}
