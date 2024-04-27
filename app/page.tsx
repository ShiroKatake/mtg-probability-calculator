"use client";
import { AppContextProvider } from "./context/AppContext";
import { DataInput } from "./modules/DataInput/DataInput";
import { TabView, TabPanel } from "primereact/tabview";
import { OpeningHandStat } from "./modules/OpeningHandStat/OpeningHandStat";
import { DropMiss } from "./modules/DropMiss/DropMiss";

export default function Home() {
  return (
    <main className="grid">
      <AppContextProvider>
        <div className="col-12 xl:col-6">
          <DataInput />
        </div>
        <div className="col max-w-full">
          <TabView className="surface-50 border-round" scrollable>
            <TabPanel header="Opening Hand">
              <OpeningHandStat />
            </TabPanel>
            <TabPanel header="Drop Miss">
              <DropMiss />
            </TabPanel>
            <TabPanel header="Thrumming Stone">
              <p>Coming soon!</p>
            </TabPanel>
          </TabView>
        </div>
      </AppContextProvider>
    </main>
  );
}
