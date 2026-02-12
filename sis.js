const events = [
  {
    t: "TechNova Hackathon",
    d: "14 March 2026",
    v: "Campus",
    a: "Register",
    link: "https://unstop.com/hackathons/technova-2026-hrit-university-1638112",
  },
  {
    t: "Workhop",
    d: "Upcoming",
    v: "Campus",
    a: "coming soon",
  },
];

// Flagship Events (completed)

const flagshipEventsData = [
  {
    title: "UI UX ONLINE SESSION",
    date: "February 5 2026",
    speakers: "Tushar Bhati",
    attendees: "150+",
    about:
      "This interactive UI/UX Online Workshop helped students dive into the world of design, where creativity meets functionality. From understanding user behavior to crafting seamless interfaces, attendees gained practical insights into designing meaningful digital products.",
    poster: "/Event/ui-ux.png",
  },
];

const container = document.getElementById("events-container");

function createInfoBox(label, value) {
  return `
    <div class="event-info-box">
      <strong>${label}</strong>
      ${value}
    </div>
  `;
}

function createEventCard(event) {
  return `
    <div class="event-card">
      <div class="poster">
        <img src="${event.poster}" alt="${event.title}">
      </div>

      <div class="event-content">
        <div class="event-title">${event.title}</div>

        <div class="info-row">
          ${createInfoBox("Date ", event.date)}
          ${createInfoBox("Speakers ", event.speakers)}
          ${createInfoBox("Attendees ", event.attendees)}
        </div>

        <div class="about">${event.about}</div>

        <a href="#" class="view-link">View Event Gallery →</a>
      </div>
    </div>
  `;
}

function renderEvents() {
  const fragment = document.createDocumentFragment();

  flagshipEventsData.forEach((evt) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = createEventCard(evt);
    fragment.appendChild(wrapper.firstElementChild);
  });

  container.appendChild(fragment);
}

renderEvents();

const e = document.getElementById("events");
events.forEach((x) => {
  e.innerHTML += `
 <div class="card">
   <h3>${x.t}</h3>
   <p>${x.d}</p>
   <p>${x.v}</p>
   <a href=${x.link} class="event-btn">${x.a}</a>
   </div>`;
});

function toggleMode() {
  document.body.classList.toggle("dark");
  document.getElementById("navbar").classList.toggle("dark");
}

// Google Form Submission FOR CONTACT US
document.querySelector(".FormBtn").addEventListener("click", function () {
  window.open("https://forms.gle/rCZizbatrZexw7ij9", "_blank");
});

//TEAM DATA IN FORM OF ARRAY OF OBJECTS

const teammembers = [
  {
    name: "Mukul Yadav",
    role: "Organizer",
    img: "/members/mukul.jpg",
  },
  {
    name: "Farhan Akhtar",
    role: "Technical Lead",
    img: "members/farhan.jpg",
  },
  {
    name: "Sania Shamshad",
    role: "PR & Outreach Lead",
    img: "/members/sania.jpg",
  },
  {
    name: "Shivam Pathak",
    role: "Management Lead",
    img: "/members/shivam.jpg",
  },
  {
    name: "Tanu Tyagi",
    role: "Management Lead",
    img: "/members/tanuTyagi.jpg",
  },
  {
    name: "Lakshay Varma",
    role: "CO-Management Lead",
    img: "/members/lakshay.jpg",
  },
  {
    name: "Nikhil Bindal",
    role: "Organizer",
    img: "/members/nikhil.jpg",
  },
  {
    name: "Ishika Sharma",
    role: "Technical Lead",
    img: "/members/ishika.jpg",
  },
  {
    name: "Kashish Nagar",
    role: "Social Media Lead",
    img: "/members/kashish.jpeg",
  },
  {
    name: "Vandana",
    role: "UX Designer",
    img: "/members/vandana.jpg",
  },
  {
    name: "Manokamana",
    role: "UX Designer",
    img: "/members/manokamana.jpg",
  },
  {
    name: "Naveen",
    role: "Videography Lead",
    img: "/members/naveen.jpg",
  },
  {
    name: "Shital Jaiswar",
    role: "Videography Lead",
    img: "/members/shital.jpeg",
  },
];

//FNC TO SHOW TEAM MEMBERS & THERE DETAILS

function showTeamMembers() {
  let container = document.querySelector(".team-container");
  teammembers.forEach((members) => {
    let contentParent = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("h2");
    let role = document.createElement("p");

    img.setAttribute("src", members.img);
    name.textContent = members.name;
    role.textContent = members.role;

    container.appendChild(contentParent);
    contentParent.appendChild(img);
    contentParent.appendChild(name);
    contentParent.appendChild(role);

    contentParent.classList.add("boxes");
    name.classList.add("overlay2");
    role.classList.add("overlay2", "overlay3");
  });
}

showTeamMembers();
