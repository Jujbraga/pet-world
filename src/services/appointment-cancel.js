import { apiConfig } from "./api-config.js";

export async function appointmentRemove({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });

    alert("Appointment removed!");
  } catch (error) {
    console.log(error);
    alert("It was not possible to remove the appointment. Try again later.");
  }
}
