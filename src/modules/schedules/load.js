import dayjs from "dayjs";
import { appointmentsFetchByDay } from "../../services/appointment-fetch.js";
import { showAppointments } from "./show.js";

const selectedDate = document.getElementById("date");

// Show the current date to input field
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD");

// Reload hours when input of appointment date changes
selectedDate.onchange = async () => {
  schedulesDay();
};

export async function schedulesDay() {
  const date = selectedDate.value;

  // Search in api the appointments
  const dailyAppointments = await appointmentsFetchByDay({ date });

  // Show the appointments
  showAppointments({ dailyAppointments });
}
