import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

const hours = document.getElementById("appointment-hour");

export function hoursLoad({ date }) {
  // Gets the list with all hours
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    // Adds hour and checks if is in the past
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isHourPast,
    };
  });

  // Render the available hours in select
  opening.forEach(({ hour, available }) => {
    if (available) {
      const option = document.createElement("option");
      option.textContent = hour;
      hours.append(option);
    }
  });
}
