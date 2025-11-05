import dayjs from "dayjs";
import { newAppointment } from "../../services/appointment-new.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client-name");
const petName = document.getElementById("pet-name");
const clientPhone = document.getElementById("phone");
const serviceDescription = document.getElementById("service-description");
const appointmentDate = document.getElementById("appointment-date");
const appointmentHour = document.getElementById("appointment-hour");

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    // Retrieve the info to be sent to the API
    const name = clientName.value.trim();
    const pet = petName.value.trim();
    const phone = clientPhone.value.trim();
    const service = serviceDescription.value.trim();
    const [hour, minute] = appointmentHour.value.split(":");

    // Insert hour and minute in the date
    const when = dayjs(appointmentDate.value).add(
      hour,
      "hour",
      minute,
      "minute"
    );

    // Generates an ID
    const id = new Date().getTime();

    // Check if they are not empty
    if (!name) {
      return alert("Provide the customer's name.");
    } else if (!pet) {
      return alert("Provide the pet's name.");
    } else if (!phone) {
      return alert("Provide the customer's phone number.");
    } else if (!service) {
      return alert("Provide the service to be performed.");
    } else if (!appointmentDate) {
      return alert("Select a date.");
    } else if (!hour) {
      return alert("Select a hour.");
    }

    await newAppointment({ id, name, pet, phone, service, when });
  } catch (error) {
    console.log(error);
    alert("It was not possible to schedule an appointment.");
  }
};
