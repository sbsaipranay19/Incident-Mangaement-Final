const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// instantiate an express app
const app = express();
// cors
app.use(cors({ origin: "*" }));

app.use("/public", express.static(process.cwd() + "/public")); //make public static

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("/send", (req, res) => {
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });
    let email = "sbsaipranay19@gmail.com"
    // console.log(data);
    const mail = {
      sender: email,
      to: process.env.EMAIL, // receiver email,
      subject: "testing",
      text: "testing",
      html:`
      <table
        border="0"
        cellspacing="0"
        cellpadding="0"
        align="left"
        width="99%"
        style="
          width: 99.02%;
          border-collapse: collapse;
          margin-left: 6.75pt;
          margin-right: 6.75pt;
        "
      >
        <tbody>
          <tr style="height: 23.75pt">
            <td
              width="100%"
              colspan="10"
              style="
                width: 100%;
                border: solid windowtext 1pt;
                background: #8eaadb;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 23.75pt;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="text-align: center"
              >
                <b
                  ><span
                    style="
                      font-size: 16pt;
                      font-family: 'Arial', sans-serif;
                    "
                    >Major Incident Management Notificatio<span
                      style="color: black"
                      >n</span
                    ></span
                  ></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
          </tr>
          <tr style="height: 35pt">
            <td
              width="11%"
              style="
                width: 11.48%;
                border: solid windowtext 1pt;
                border-top: none;
                background: #d9e2f3;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 35pt;
              "
            >
              <p class="MsoNormal">
                <b
                  ><span
                    style="
                      font-size: 11pt;
                      font-family: 'Arial', sans-serif;
                      color: black;
                    "
                    >Incident Number</span
                  ></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
            <td
              width="20%"
              style="
                width: 20.38%;
                border-top: none;
                border-left: none;
                border-bottom: solid windowtext 1pt;
                border-right: solid windowtext 1pt;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 35pt;
              "
            >
              <p class="MsoNormal">
                <b></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
            <td
              width="16%"
              colspan="2"
              style="
                width: 16.92%;
                border-top: none;
                border-left: none;
                border-bottom: solid windowtext 1pt;
                border-right: solid windowtext 1pt;
                background: #d9e2f3;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 35pt;
              "
            >
              <p class="MsoNormal">
                <b
                  ><span
                    style="
                      font-size: 11pt;
                      font-family: 'Arial', sans-serif;
                      color: black;
                    "
                    >Incident Status</span
                  ></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
            <td
              width="16%"
              style="
                width: 16.92%;
                border-top: none;
                border-left: none;
                border-bottom: solid windowtext 1pt;
                border-right: solid windowtext 1pt;
                background: red;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 35pt;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="text-align: center"
              >
                <b
                  ><input
                    id="status"
                    name="push-notifications"
                    type="radio"
                  />
                  <label
                    for="push-email"
                    class="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Open
                  </label>

                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    for="push-nothing"
                    class="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Closed
                  </label></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
            <td
              width="16%"
              colspan="3"
              style="
                width: 16.92%;
                border-top: none;
                border-left: none;
                border-bottom: solid windowtext 1pt;
                border-right: solid windowtext 1pt;
                background: #d9e2f3;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 35pt;
              "
            >
              <p class="MsoNormal">
                <b
                  ><span
                    style="
                      font-size: 11pt;
                      font-family: 'Arial', sans-serif;
                      color: black;
                    "
                    >Start Time</span
                  ></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
            <td
              width="17%"
              colspan="2"
              style="
                width: 17.4%;
                border-top: none;
                border-left: none;
                border-bottom: solid windowtext 1pt;
                border-right: solid windowtext 1pt;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 35pt;
              "
            >
              <p class="MsoNormal">
                <b
                  ><input
                    type="date"
                    id="date-time"
                    autocomplete="current-date-time" /><br />
                  <input
                    type="time"
                    id="time"
                    autocomplete="current-date-time" /></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
          </tr>
          <tr style="height: 28.25pt">
            <td
              width="11%"
              style="
                width: 11.48%;
                border: solid windowtext 1pt;
                border-top: none;
                background: #d9e2f3;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 28.25pt;
              "
            >
              <p class="MsoNormal">
                <b
                  ><span
                    style="
                      font-size: 11pt;
                      font-family: 'Arial', sans-serif;
                      color: black;
                    "
                    >Incident Manager</span
                  ></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
            <td
              width="20%"
              style="
                width: 20.38%;
                border-top: none;
                border-left: none;
                border-bottom: solid windowtext 1pt;
                border-right: solid windowtext 1pt;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 28.25pt;
              "
            >
              <p class="MsoNormal">
                <b><input name="incident_manager" type="text" id="incident_manager" /></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
            <td
              width="16%"
              colspan="2"
              style="
                width: 16.92%;
                border-top: none;
                border-left: none;
                border-bottom: solid windowtext 1pt;
                border-right: solid windowtext 1pt;
                background: #d9e2f3;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 28.25pt;
              "
            >
              <p class="MsoNormal">
                <b
                  ><span
                    style="
                      font-size: 11pt;
                      font-family: 'Arial', sans-serif;
                      color: black;
                    "
                    >Incident Priority</span
                  ></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
            <td
              width="16%"
              style="
                width: 16.92%;
                border-top: none;
                border-left: none;
                border-bottom: solid windowtext 1pt;
                border-right: solid windowtext 1pt;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 28.25pt;
              "
            >
              <p class="MsoNormal">
                <b
                  ><select id="priority" autocomplete="status-name">
                    <option disabled="" selected="">Select severity</option>
                    <option>Severity 1</option>
                    <option>Severity 2</option>
                    <option>Severity 3</option>
                  </select></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
            <td
              width="16%"
              colspan="3"
              style="
                width: 16.92%;
                border-top: none;
                border-left: none;
                border-bottom: solid windowtext 1pt;
                border-right: solid windowtext 1pt;
                background: #d9e2f3;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 28.25pt;
              "
            >
              <p class="MsoNormal">
                <b
                  ><span
                    style="
                      font-size: 11pt;
                      font-family: 'Arial', sans-serif;
                      color: black;
                    "
                    >Estimated End Time</span
                  ></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
            <td
              width="17%"
              colspan="2"
              style="
                width: 17.4%;
                border-top: none;
                border-left: none;
                border-bottom: solid windowtext 1pt;
                border-right: solid windowtext 1pt;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 28.25pt;
              "
            >
              <p class="MsoNormal">
                <b><input name="estimated_time" type="text" id="estimated_time" /></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
          </tr>
          <tr style="height: 28.25pt">
            <td
              width="11%"
              style="
                width: 11.48%;
                border: solid windowtext 1pt;
                border-top: none;
                background: #d9e2f3;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 28.25pt;
              "
            >
              <p class="MsoNormal">
                <b
                  ><span
                    style="
                      font-size: 11pt;
                      font-family: 'Arial', sans-serif;
                      color: black;
                    "
                    >Bridge Details</span
                  ></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
            <td
              width="54%"
              colspan="4"
              style="
                width: 54.22%;
                border-top: none;
                border-left: none;
                border-bottom: solid windowtext 1pt;
                border-right: solid windowtext 1pt;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 28.25pt;
              "
            >
              <p class="MsoNormal">
                <b><input name="bridge_details" type="text" id="bridge_details" /></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
            <td
              width="16%"
              colspan="3"
              style="
                width: 16.92%;
                border-top: none;
                border-left: none;
                border-bottom: solid windowtext 1pt;
                border-right: solid windowtext 1pt;
                padding: 0cm 0cm 0cm 0cm;
                height: 28.25pt;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="text-align: center"
              >
                <b
                  ><span
                    style="
                      font-size: 11pt;
                      font-family: 'Arial', sans-serif;
                    "
                    >Services Impacted</span
                  ></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
            <td
              width="17%"
              colspan="2"
              style="
                width: 17.4%;
                border-top: none;
                border-left: none;
                border-bottom: solid windowtext 1pt;
                border-right: solid windowtext 1pt;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 28.25pt;
              "
            >
              <p class="MsoNormal">
                <b><input name="service_impacted" type="text" id="services_impacted" /></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
          </tr>
          <tr>
            <td
              width="11%"
              style="width: 11.48%; padding: 0cm 0cm 0cm 0cm"
            ></td>
            <td
              width="20%"
              style="width: 20.38%; padding: 0cm 0cm 0cm 0cm"
            ></td>
            <td
              width="16%"
              colspan="2"
              style="width: 16.92%; padding: 0cm 0cm 0cm 0cm"
            ></td>
            <td
              width="16%"
              style="width: 16.92%; padding: 0cm 0cm 0cm 0cm"
            ></td>
            <td
              width="0%"
              style="width: 0.1%; padding: 0cm 0cm 0cm 0cm"
            ></td>
            <td
              width="16%"
              colspan="3"
              style="width: 16.92%; padding: 0cm 0cm 0cm 0cm"
            ></td>
            <td
              width="106"
              style="
                width: 79.5pt;
                border: none;
                border-bottom: solid windowtext 1pt;
                padding: 0cm 0cm 0cm 0cm;
              "
            >
              <p class="MsoNormal">
                <span style="font-size: 11pt">&nbsp;<u></u><u></u></span>
              </p>
            </td>
          </tr>
          <tr style="height: 25.55pt">
            <td
              width="32%"
              colspan="3"
              style="
                width: 32.06%;
                border: solid windowtext 1pt;
                background: #8eaadb;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 25.55pt;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="text-align: center"
              >
                <b
                  ><span
                    style="
                      font-size: 16pt;
                      font-family: 'Arial', sans-serif;
                      color: black;
                    "
                    >Incident Details</span
                  ></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
            <td
              width="35%"
              colspan="4"
              style="
                width: 35.84%;
                border: solid windowtext 1pt;
                border-left: none;
                background: #8eaadb;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 25.55pt;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="text-align: center"
              >
                <b
                  ><span
                    style="
                      font-size: 16pt;
                      font-family: 'Arial', sans-serif;
                      color: black;
                    "
                    >Business Impact</span
                  ></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
            <td
              width="32%"
              colspan="3"
              style="
                width: 32.1%;
                border: solid windowtext 1pt;
                border-left: none;
                background: #8eaadb;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 25.55pt;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="text-align: center"
              >
                <b
                  ><span
                    style="
                      font-size: 16pt;
                      font-family: 'Arial', sans-serif;
                      color: black;
                    "
                    >Incident Timeline</span
                  ></b
                ><span style="font-size: 11pt"><u></u><u></u></span>
              </p>
            </td>
          </tr>
          <tr style="height: 60.4pt">
            <td
              width="32%"
              colspan="3"
              valign="top"
              style="
                width: 32.06%;
                border: solid windowtext 1pt;
                border-top: none;
                background: white;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 10.4pt;
              "
            >
              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>

              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>

              <textarea
                name="incident_details"
                rows="24"
                cols="50"
                id="incident_details"
              ></textarea>

              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>

              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>

              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>

              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>

              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>

              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>

              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>

              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>

              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>

              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>

              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>

              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>
            </td>
            <td
              width="35%"
              colspan="4"
              valign="top"
              style="
                width: 35.84%;
                border-top: none;
                border-left: none;
                border-bottom: solid windowtext 1pt;
                border-right: solid windowtext 1pt;
                background: white;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 10.4pt;
              "
            >
              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                  background: white;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>

              <textarea
                name="business_impact"
                rows="24"
                cols="50"
                id="business_impact"
              ></textarea
              ><span style="font-size: 11pt"><u></u><u></u></span>
            </td>
            <td
              width="32%"
              colspan="3"
              valign="top"
              style="
                width: 32.1%;
                border-top: none;
                border-left: none;
                border-bottom: solid windowtext 1pt;
                border-right: solid windowtext 1pt;
                background: white;
                padding: 0cm 5.4pt 0cm 5.4pt;
                height: 10.4pt;
              "
            >
              <span
                style="
                  font-size: 11pt;
                  font-family: 'Calibri', sans-serif;
                  color: black;
                  background: white;
                "
                >&nbsp;</span
              ><span style="font-size: 11pt"><u></u><u></u></span>

              <textarea
                name="incident_timeline"
                rows="24"
                cols="50"
                id="incident_timeline"
              ></textarea
              ><span style="font-size: 11pt"><u></u><u></u></span>
            </td>
          </tr>
          <tr>
            <td
              width="80"
              style="width: 60pt; padding: 0cm 0cm 0cm 0cm"
            ></td>
            <td
              width="143"
              style="width: 107.25pt; padding: 0cm 0cm 0cm 0cm"
            ></td>
            <td
              width="1"
              style="width: 0.75pt; padding: 0cm 0cm 0cm 0cm"
            ></td>
            <td
              width="117"
              style="width: 87.75pt; padding: 0cm 0cm 0cm 0cm"
            ></td>
            <td
              width="118"
              style="width: 88.5pt; padding: 0cm 0cm 0cm 0cm"
            ></td>
            <td
              width="1"
              style="width: 0.75pt; padding: 0cm 0cm 0cm 0cm"
            ></td>
            <td
              width="15"
              style="width: 11.25pt; padding: 0cm 0cm 0cm 0cm"
            ></td>
            <td
              width="103"
              style="width: 77.25pt; padding: 0cm 0cm 0cm 0cm"
            ></td>
            <td
              width="1"
              style="width: 0.75pt; padding: 0cm 0cm 0cm 0cm"
            ></td>
            <td
              width="121"
              style="width: 90.75pt; padding: 0cm 0cm 0cm 0cm"
            ></td>
          </tr>
        </tbody>
      </table>`
    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
      } else {
        res.status(200).send("Email successfully sent to recipient!");
      }
    });
  });
});

//Index page (static HTML)
app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

/*************************************************/
// Express server listening...
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
