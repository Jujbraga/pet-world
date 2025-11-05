import dayjs from "dayjs";
import { hoursLoad } from "./hours-load.js";
import { appointmentsFetchByDay } from "../../services/appointment-fetch.js";

const appointmentDate = document.getElementById("appointment-date");

export async function formFields() {
  // Show the current date to input field
  const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

  // Search in api the appointments
  const dailyAppointments = await appointmentsFetchByDay({ date });

  // Load the current date and sets the minimum date to the current date
  appointmentDate.value = inputToday;
  appointmentDate.min = inputToday;

  const date = appointmentDate.value;

  // Load the availables hours
  hoursLoad({ date, dailyAppointments });
}
