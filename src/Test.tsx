import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { TabView, TabPanel } from "primereact/tabview";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

interface DataItem {
  date: string;
  time: string;
  name: string;
  component: string;
  action: string;
  tips: string;
}

const data: DataItem[] = [
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

const App: React.FC = () => {
  const [globalFilter, setGlobalFilter] = useState<string | null>(null);
  const [dateTimeFilter, setDateTimeFilter] = useState<string | null>(null);

  const dataWithCombinedDateTime: DataItem[] = data.map((item) => ({
    ...item,
    dateTime: `${item.date} ${item.time}`,
  }));

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
            value={dataWithCombinedDateTime}
            globalFilter={globalFilter}
          >
            <Column
              field="name"
              header="שם משתמש"
              filter
              filterMatchMode={FilterMatchMode.CONTAINS}
            />
            <Column
              field="component"
              header="רכיב"
              filter
              filterMatchMode={FilterMatchMode.CONTAINS}
            />
            <Column
              field="tips"
              header="סוג"
              filter
              filterMatchMode={FilterMatchMode.CONTAINS}
            />
            <Column
              field="action"
              header="פעולה"
              filter
              filterMatchMode={FilterMatchMode.CONTAINS}
            />
            <Column
              field="dateTime"
              header="תאריך ושעה"
              filter
              filterMatchMode={FilterMatchMode.CONTAINS}
            />
          </DataTable>
        </TabPanel>

        <TabPanel header="דוח מצומצם">
          <InputText
            value={dateTimeFilter || ""}
            onInput={(e) =>
              setDateTimeFilter((e.target as HTMLInputElement).value)
            }
            placeholder="Filter by date/time"
          />
          <DataTable value={data} globalFilter={dateTimeFilter}>
            <Column
              field="name"
              header="שם משתמש"
              filter
              filterMatchMode={FilterMatchMode.CONTAINS}
            />
            <Column
              field="time"
              header="שעה"
              filter
              filterMatchMode={FilterMatchMode.CONTAINS}
            />
            <Column
              field="date"
              header="תאריך"
              filter
              filterMatchMode={FilterMatchMode.CONTAINS}
            />
          </DataTable>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default App;
