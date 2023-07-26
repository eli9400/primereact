import "./App.css";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { TabView, TabPanel } from "primereact/tabview";
const data = [
  {
    date: "01/01/2020",
    time: "10:30",
    name: "user1",
    component: "תמונה",
    action: "לחיצה",
    tips: "אפליקצייה",
  },
  {
    date: "01/02/2020",
    time: "9:30",
    name: "user2",
    component: "דוח",
    action: "העלאה",
    tips: "אפליקצייה",
  },
  {
    date: "01/03/2020",
    time: "8:30",
    name: "user3",
    component: "שרטוט",
    action: "עדכון",
    tips: "אתר",
  },
  {
    date: "01/04/2020",
    time: "7:30",
    name: "user4",
    component: "מפה",
    action: "הורדה",
    tips: "אתר",
  },
  {
    date: "01/01/2021",
    time: "6:30",
    name: "user5",
    component: "טופס",
    action: "התחברות",
    tips: "אפליקצייה",
  },
  {
    date: "01/02/2021",
    time: "5:30",
    name: "user6",
    component: "טופס",
    action: "התנתקות",
    tips: "אתר",
  },
];
function App() {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const dataWithCombinedDateTime = data.map((item) => ({
    ...item,
    dateTime: `${item.date} ${item.time}`,
  }));
  return (
    <div className="App">
      <TabView>
        <TabPanel header="דוח מפורט">
          <InputText
            onInput={(e) => {
              setFilters({
                global: {
                  value: e.target.value,
                  matchMode: FilterMatchMode.CONTAINS,
                },
              });
            }}
            placeholder="הזן כן לסינון"
          />
          <DataTable value={dataWithCombinedDateTime} filters={filters}>
            <Column field="name" header="שם משתמש" />
            <Column field="component" header="רכיב" />
            <Column field="tips" header="סוג" />
            <Column field="action" header="פעולה" />
            <Column field="dateTime" header="תאריך ושעה" />
          </DataTable>
        </TabPanel>

        <TabPanel header="דוח מצומצם">
          <InputText
            onInput={(e) => {
              setFilters({
                global: {
                  value: e.target.value,
                  matchMode: FilterMatchMode.CONTAINS,
                },
              });
            }}
            placeholder="הזן כן לסינון"
          />
          <DataTable value={data} filters={filters}>
            <Column field="name" header="שם משתמש" />
            <Column field="time" header="שעה" />
            <Column field="date" header="תאריך" />
          </DataTable>
        </TabPanel>
      </TabView>
    </div>
  );
}

export default App;
