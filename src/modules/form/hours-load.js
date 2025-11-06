import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

const hours = document.getElementById("appointment-hour");

export function hoursLoad({ date, dailyAppointments }) {
  // Clear the hours list
  hours.innerHTML = "";

  // Gets the list with all hours that has appointments
  const unavailableHours = dailyAppointments.map((schedule) =>
    dayjs(schedule.when).format("H:mm")
  );

  // Gets the list with all hours
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    // Adds hour and checks if is in the past
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    // Check if hour is available
    const available = !unavailableHours.includes(hour) && !isHourPast;

    return {
      hour,
      available,
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
