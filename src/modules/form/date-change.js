import { appointmentsFetchByDay } from "../../services/appointment-fetch.js";
import { hoursLoad } from "./hours-load.js";

const appointmentSelectedDate = document.getElementById("appointment-date");

// Reload hours when input of appointment date changes
appointmentSelectedDate.onchange = async () => {
  const date = appointmentSelectedDate.value;

  // Search in api the appointments
  const dailyAppointments = await appointmentsFetchByDay({ date });

  // Load the availables hours
  hoursLoad({ date, dailyAppointments });
};
