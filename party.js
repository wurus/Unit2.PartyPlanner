// var clg = console.log
// const apiUrl = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/Events';

// const getEventList = async () => {
//   try{
//     const response = await fetch(apiUrl);
//     const json = await response.json();
//     clg ("Jsone Object:", json)
//   } catch (error) {
//   clg("Error Occurred", error);
// }
// }

const apiUrl =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/Events";

const getEventList = async () => {
  try {
    const response = await fetch(apiUrl);
    const jSonn = await response.json();
    console.log (jSonn);
    displayEventList(jSonn.data);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};
const displayEventList = (events) => {
  const eventDivs = document.getElementById("eventlist");

  events.forEach((event) => {
    const eventDiv = document.createElement("div");
    eventDiv.innerHTML = `
      <h2>${event.name}</h2>
      <p>Date: ${event.date}</p>
      <p>Location: ${event.location}</p>
      <p>Description: ${event.description}</p>
    `;
    eventDivs.appendChild(eventDiv);
  });
};

getEventList();
