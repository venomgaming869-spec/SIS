const events = [
  {
    t: "UI UX Workshop",
    d: "5 Feb 2026",
    v: "Online",
    a: "Zoom Link Will Be Provided On SIS Whatsapp Group",
  },
  {
    t: "Tech Event",
    d: "Upcoming",
    v: "Campus",
    a: "Register",
  }
];
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
    name: "Kashish Nagar",
    role: "Social Media Lead",
    img: "/members/kashish.jpeg",
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
