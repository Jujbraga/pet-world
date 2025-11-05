import { apiConfig } from "./api-config.js";

export async function newAppointment({ id, name, pet, phone, service, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, pet, phone, service, when }),
    });

    alert("Appointment successfully scheduled.");
  } catch (error) {
    console.log(erros);
    alert("It was not possible to schedule an appointment. Try again later.");
  }
}
