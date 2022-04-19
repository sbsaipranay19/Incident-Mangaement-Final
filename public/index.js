const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  let incident_num = document.getElementById("incident_num").value;
    let incident_manager = document.getElementById("incident_manager").value;
    let estimated_time = document.getElementById("estimated_time").value;
    let bridge_details = document.getElementById("bridge_details").value;
    let services_impacted = document.getElementById("services_impacted").value;
    let incident_details = document.getElementById("incident_details").value;
    let incident_timeline = document.getElementById("incident_timeline").value;
    // console.log(incident_num,incident_manager,estimated_time,bridge_details,services_imp);

  // console.log(mail.incident_num);
  sendMail(mail);
});

const sendMail = (mail) => {
  fetch("/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
};
