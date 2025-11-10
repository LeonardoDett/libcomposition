import { useState } from "react";
import { Calendar } from "./components/Layout/Calendar/Calendar";
import { Input } from "./components/Forms/Input";

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="p-8 bg-gray-50 min-h-screen ">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div>
          <h1 className="text-3xl font-bold">Calendar Component</h1>
          <p className="text-gray-600 mt-2">
            This is a standalone calendar component.
          </p>
        </div>
        <div className="p-8 rounded-lg flex flex-col items-center justify-center gap-8">
          <div className="w-1xl">
            <Calendar selectedDate={date} onDateSelect={setDate} />
          </div>

          <p className="text-sm">
            Selected date: {date?.toLocaleDateString()}
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Calendar Input Component</h1>
          <p className="text-gray-600 mt-2">
            This is a calendar component used as a date picker input.
          </p>
        </div>
        <div className="p-8 h-72 rounded-lg flex items-start justify-center gap-8">

          <div className="w-64">
            <Input.Root>
              <Input.Label floating >Select a date</Input.Label>
              <Input.Box>
                <Input.Date />
              </Input.Box>
            </Input.Root>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
