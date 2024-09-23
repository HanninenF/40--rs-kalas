console.log("script loaded");

const appendText = (element, text) => element.append(text);

// Hämta containern där tabellen ska läggas till med querySelector
const form = document.querySelector(".button");
console.log(`found ${form.innerHTML}`);

//skapa tabellen och dess innehåll dynamiskt
const table = document.createElement("table");
const tableBody = document.createElement("tbody");
console.log(tableBody);

//Data som ska läggas i tabellen
const time = ["Tid", "12:00", "13:00", "14:00"];
const activity = [
  "Aktivitet",
  "Fiskedamm",
  "Lunch (korv med bröd)",
  "Tårta och presenter",
];

/* for (let i = 0; i < time.length; i++) {
  data.push([time[i], activity[i]]);
} */

const tableData = time.map((timeItem, index) => [timeItem, activity[index]]);

// Loopa igenom data för att skapa rader och celler
tableData.forEach((rowData, rowIndex) => {
  const row = document.createElement("tr");
  rowData.forEach((cellData) =>
    row.appendChild(
      Object.assign(document.createElement(rowIndex === 0 ? "th" : "td"), {
        innerHTML: cellData,
      })
    )
  );
  tableBody.appendChild(row);
});
console.log(tableBody);

table.appendChild(tableBody);
console.log(table);

form.appendChild(table);

/* 
Detta är en metod som letar efter och returnerar det första elementet i DOM som matchar den specifika CSS-selektorn, i detta fall .rsvp-form. Selektorn .rsvp-form syftar på ett element med en HTML-klass som heter rsvp-form. Om det finns ett element med den klassen på sidan, kommer det elementet att väljas. */
const formMessage = document.querySelector(".button");
console.log(`found formMessage ${formMessage.innerHTML}`);
// Skapar behållare för att lagra en referens till elementet som innehåller feedback till användaren
const responseDiv = document.querySelector(".response");
console.log(`found responseDiv ${responseDiv.innerHTML}`);
// Förhindra standardformulärbeteendet (att skicka det)
formMessage.addEventListener("submit", function (event) {
  event.preventDefault();
  // hämtar användarens inmatade "name" och "message" från fältet med klassen name och message.
  const name = form.querySelector(".name").value;
  const message = form.querySelector(".message").value;

  // Skapa ett meddelande att visa efter att formuläret skickats
  let responseMessage = `<h2>Tack för ditt svar, ${name}!</h2>`;
  responseMessage += `<p>Du har anmält dig till kalaset.</p>`;

  //om användaren skriver något i meddelande så läggs användarens meddelande till i responseMessage
  if (message) {
    responseMessage += `<p>Ditt meddelande: ${message}</p>`;
  }

  // Visa meddelandet i responseDiv
  responseDiv.innerHTML = responseMessage;

  // Återställ formuläret efter att meddelandet har visats
  form.reset();
});

// Hitta section
const section = document.querySelector(".message-sec");

//hitta knappen
const button = section.querySelector(".message-btn");

// Kontrollera om knappen hittades
if (button) {
  /* logga */
  console.log(`found button ${button.innerHTML}`);

  // Logga knappens innehåll
  // Lägg till en "click"-eventlyssnare på knappen
  button.addEventListener("click", () => {
    //nytt meddelande skapa element p
    let newMessage = document.createElement("p");

    //newMessage innehåll
    newMessage.innerHTML = `Du har tryckt på Knappen!`;

    //skriv funktion append newMessage
    appendText(responseDiv, newMessage);
  });
}
