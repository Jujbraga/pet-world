import dayjs from "dayjs";
import { appointmentsFetchByDay } from "../../services/appointment-fetch.js";

const selectedDate = document.getElementById("date");

// Show the current date to input field
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD");

export async function schedulesDay() {
  const date = selectedDate.value;

  // Search in api the appointments
  const dailyAppointments = await appointmentsFetchByDay({ date });
  console.log(dailyAppointments);
}
