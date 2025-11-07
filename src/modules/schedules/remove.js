import { appointmentRemove } from "../../services/appointment-cancel.js";
import { schedulesDay } from "./load.js";
import { formFields } from "../form/form-load.js";

const periods = document.querySelectorAll(".card-period");

// Add click event to each period list
periods.forEach((period) => {
  // Capture the click event in list items
  period.addEventListener("click", async (event) => {
    if (event.target.hasAttribute("data-remove")) {
      // Gets the clicked element parent
      const item = event.target.parentElement;

      // Gets the id from the appointment
      const { id } = item.dataset;

      // Checks if the id is selected
      if (id) {
        // Checks if the appointment should be canceled
        const isConfirm = confirm(
          "Are you sure you want to remove this appointment?"
        );

        if (isConfirm) {
          // Makes the API requisition to cancel the appointment
          await appointmentRemove({ id });

          // Reload the daily appontments
          schedulesDay();

          // Reload the available hours in form
          formFields();
        }
      }
    }
  });
});
