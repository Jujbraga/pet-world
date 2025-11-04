import dayjs from "dayjs";
import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

// Show the current date to input field
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD");

export function schedulesDay() {
  const date = selectedDate.value;

  // Load the availables hours
  hoursLoad({ date });
}
