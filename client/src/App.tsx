import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { TabView, TabPanel } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "./App.css";

import useData from "./hooks/useData";

const App: React.FC = () => {
  const { handelGetData, value } = useData();
  const { data, dateTime, error } = value;

  useEffect(() => {
    handelGetData();
  }, []);
  const [globalFilter, setGlobalFilter] = useState<string | undefined>(
    undefined
  );

  if (!data)
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  return (
    <div className="App">
      <TabView>
        <TabPanel header="דוח מפורט">
          <InputText
            value={globalFilter || ""}
            onInput={(e) =>
              setGlobalFilter((e.target as HTMLInputElement).value)
            }
            placeholder="הזן מילות חיפוש"
          />
          <DataTable
            value={dateTime!}
            globalFilter={globalFilter}
            paginator
            rows={data!.length}
            rowsPerPageOptions={[3, 6, 9]}
          >
            <Column field="name" header="שם משתמש" />
            <Column field="component" header="רכיב" />
            <Column field="tips" header="סוג" />
            <Column field="action" header="פעולה" />
            <Column field="dateTime" header="תאריך ושעה" />
          </DataTable>
        </TabPanel>

        <TabPanel header="דוח מצומצם">
          <InputText
            value={globalFilter || ""}
            onInput={(e) =>
              setGlobalFilter((e.target as HTMLInputElement).value)
            }
            placeholder="הזן מילות חיפוש"
          />
          <DataTable
            value={data!}
            globalFilter={globalFilter}
            paginator
            rows={data!.length}
            rowsPerPageOptions={[3, 6, 9]}
          >
            <Column field="name" header="שם משתמש" />
            <Column field="time" header="שעה" />
            <Column field="date" header="תאריך" />
          </DataTable>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default App;
