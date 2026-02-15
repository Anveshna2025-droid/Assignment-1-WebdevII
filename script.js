const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");
const demoContent = document.getElementById("demoContent");

let sampleEvents = [
    {
        title: "New Application Launch",
        date: "2026-04-22",
        category: "Social",
        description: "An Event with Peers"
    },
    {
        title: "Techkriti Conference IITK",
        date: "2026-02-13",
        category: "Conference",
        description: "CA's Meeting/Conference"
    }
];

function createEventCard(eventData) {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span class="category-tag"><strong>${eventData.category}</strong></span>
        <p>${eventData.description}</p>
    `;

    return card;
}

function addEvent(eventData) {
    const emptyState = document.querySelector(".empty-state");
    if (emptyState) {
        emptyState.remove();
    }

    eventContainer.appendChild(createEventCard(eventData));
}

eventForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);
    eventForm.reset();
});

eventContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();

        if (eventContainer.children.length === 0) {
            eventContainer.innerHTML =
                '<div class="empty-state">No events yet. Add your first event!!</div>';
        }
    }
});

addSampleBtn.addEventListener("click", function () {
    sampleEvents.forEach(function (data) {
        addEvent(data);
    });
});

clearAllBtn.addEventListener("click", function () {
    eventContainer.innerHTML =
        '<div class="empty-state">No events yet. Add your first event!</div>';
});

window.addEventListener("keydown", function (event) {
    const rawHTML = "<strong>Pressed:</strong> " + event.key;

    demoContent.innerHTML = rawHTML;

    console.log("innerText:", demoContent.innerText);
    console.log("textContent:", demoContent.textContent);
    console.log("innerHTML:", demoContent.innerHTML);
});
