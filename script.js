document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("todayDate");
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
  
    const form = document.getElementById("dailyForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      let valid = true;
  
      // For Purpose
      const purpose = document.getElementById("visitPurpose");
      const purposeWarning = document.getElementById("purposeWarning");
      if (purpose.value === "") {
        purposeWarning.textContent = "Purpose of Visit is required.";
        purposeWarning.style.display = "block";
        valid = false;
      } else {
        purposeWarning.style.display = "none";
      }
  
      // For Temperature
      const temp = document.getElementById("temperature");
      const tempWarning = document.getElementById("tempWarning");
      if (temp.value.trim() === "") {
        tempWarning.textContent = "Temperature is required.";
        tempWarning.style.display = "block";
        valid = false;
      } else {
        tempWarning.style.display = "none";
      }
  
      // For Date
      const dateWarning = document.getElementById("dateWarning");
      if (dateInput.value === "") {
        dateWarning.textContent = "Date is required.";
        dateWarning.style.display = "block";
        valid = false;
      } else {
        dateWarning.style.display = "none";
      }
  
      // For Final Submission
      if (valid) {
        alert("Form submitted successfully!");
        form.reset();
        dateInput.value = today; // Set date back to today
      }
    });
  });
  