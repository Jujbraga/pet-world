import dayjs from "dayjs";

// Select the section by period
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodEvening = document.getElementById("period-evening");

export function showAppointments({ dailyAppointments }) {
  try {
    // Clear the lists
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodEvening.innerHTML = "";

    dailyAppointments.forEach((appointment) => {
      const item = document.createElement("li");
      const p = document.createElement("p");
      const time = document.createElement("strong");
      const name = document.createElement("span");
      const service = document.createElement("p");
      const removeItem = document.createElement("small");

      // Add appointment id
      item.setAttribute("data-id", appointment.id);

      // Fill the elements
      time.textContent = dayjs(appointment.when).format("HH:mm");
      name.innerHTML = `<strong>${appointment.pet}</strong> / ${appointment.name}`;
      service.textContent = appointment.service;
      removeItem.textContent = "Remove appointment";
      removeItem.setAttribute("data-remove", "true");

      // Add time and name to p
      p.append(time, name);

      // Add the elements to the list
      item.append(p, service, removeItem);

      // Get only the hour
      const hour = dayjs(appointment.when).hour();

      // Render the appointments by period
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour < 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodEvening.appendChild(item);
      }
    });
  } catch (error) {
    console.log(error);
    alert("It was not possible to get the daily appointments. Try again later");
  }
}
