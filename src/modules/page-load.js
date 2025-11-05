import { openAndCloseModal } from "./modal.js";
import { formFields } from "./form/form-load.js";
import { schedulesDay } from "./schedules/load.js";

document.addEventListener("DOMContentLoaded", function () {
  schedulesDay();
  openAndCloseModal();
  formFields();
});
