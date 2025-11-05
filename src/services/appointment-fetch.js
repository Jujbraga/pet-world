import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function appointmentsFetchByDay({ date }) {
  try {
    // Makes the api requisition
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // Converts to JSON
    const data = await response.json();

    // Filters appointments by the selected day
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia selecionado.");
  }
}
