import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function appointmentsFetchByDay({ date }) {
  try {
    if (apiConfig.useLocalStorage) {
      const data = JSON.parse(localStorage.getItem("schedules") || "[]");
      return data.filter((schedule) =>
        dayjs(date).isSame(schedule.when, "day"),
      );
    }

    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    const data = await response.json();
    return data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"));
  } catch (error) {
    console.log(error);
    alert(
      "It was not possible to get the daily appointments. Try again later.",
    );
  }
}
