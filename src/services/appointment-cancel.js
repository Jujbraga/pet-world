import { apiConfig } from "./api-config.js";

export async function appointmentRemove({ id }) {
  try {
    if (apiConfig.useLocalStorage) {
      const data = JSON.parse(localStorage.getItem("schedules") || "[]");
      const filtered = data.filter((s) => s.id !== id);
      localStorage.setItem("schedules", JSON.stringify(filtered));
      alert("Appointment removed!");
      return;
    }

    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });

    alert("Appointment removed!");
  } catch (error) {
    console.log(error);
    alert("It was not possible to remove the appointment. Try again later.");
  }
}
