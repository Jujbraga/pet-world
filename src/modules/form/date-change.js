import { hoursLoad } from "./hours-load.js";

const selectedDate = document.getElementById("appointment-date");

// Reload hours when input date changes
selectedDate.onchange = () => {
  const date = selectedDate.value;
  hoursLoad({ date });
};
