import { apiConfig } from "./api-config.js";

export async function newAppointment({ id, name, pet, phone, service, when }) {
  try {
    if (apiConfig.useLocalStorage) {
      const data = JSON.parse(localStorage.getItem("schedules") || "[]");
      data.push({ id, name, pet, phone, service, when });
      localStorage.setItem("schedules", JSON.stringify(data));
      alert("Appointment successfully scheduled.");
      return;
    }

    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name, pet, phone, service, when }),
    });

    alert("Appointment successfully scheduled.");
  } catch (error) {
    console.log(error);
    alert("It was not possible to schedule an appointment. Try again later.");
  }
}
