document.getElementById("picture").addEventListener("change",function(e){
    const file = e.target.files[0];
    if (file){
        document.getElementById("pic").src = URL.createObjectURL(file);
    } else {
        document.getElementById("pic").src = "images/muhilan_photo.jpeg";
    }
});

const form = document.getElementById("introForm");
const coursesContainer = document.getElementById("coursesContainer");
const addCourseBtn = document.querySelector(".addCourseBtn");
const removeCourseBtn = document.querySelector(".removeCourseBtn");
const clearBtn = document.getElementById("clearBtn");

let courseGroupCounter = 1;

const initialCourseGroup = coursesContainer.querySelector("div");
if (initialCourseGroup) {
    initialCourseGroup.classList.add("course-group");
    initialCourseGroup.setAttribute("data-id", courseGroupCounter++);
}

function createCourseInput(){
    const groupDiv = document.createElement("div");
    groupDiv.classList.add("course-group");
    groupDiv.setAttribute("data-id", courseGroupCounter++);
    
    groupDiv.innerHTML = `
        <label>Department: <input class="course-dept" type="text" placeholder="e.g., ITCS" required></label>
        <label>Number: <input class="course-num" type="text" placeholder="e.g., 3112" required></label>
        <label>Course Name: <input class="course-name" type="text" placeholder="e.g., Object Oriented Systems" required></label>
        <label>Reason: <input class="course-reason" type="text" placeholder="e.g., Concentration Elective" required></label>
    `;
    coursesContainer.appendChild(groupDiv);
}

addCourseBtn.addEventListener("click", () => {
    createCourseInput();
});

removeCourseBtn.addEventListener("click", () => {
    const groups = coursesContainer.querySelectorAll(".course-group");
    if (groups.length > 1){
        groups[groups.length - 1].remove();
    } else {
        alert("Have at least one course.");
    }
});


form.addEventListener("submit",function(e){
    e.preventDefault();
    let isValid = true;
    const requiredElements = form.querySelectorAll('[required]'); 
    
    requiredElements.forEach((e) => {
        if (!e.value.trim() && e.type !== 'file') {
            isValid = false;
            e.style.border = '2px solid red';
        } else {
            e.style.border = '2px solid rgb(41, 33, 95)';
        }
    });
    if (!isValid) {
        alert("Please fill out all required fields.");
        return;
    }

    const data = {
        firstName: document.getElementById("firstName").value.trim(),
        middleName: document.getElementById("middleName").value.trim(),
        nickname: document.getElementById("nickname").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        acknStmt: document.getElementById("acknStmt").value.trim(),
        acknDate: document.getElementById("acknDate").value.trim(),
        mascotAdj: document.getElementById("mascotAdj").value.trim(),
        mascotAnimal: document.getElementById("mascotAnimal").value.trim(),
        divider: document.getElementById("divider").value.trim(),
        picCaption: document.getElementById("picCaption").value.trim(),
        personalStmt: document.getElementById("personalStmt").value.trim(),
        personalBg: document.getElementById("personalBg").value.trim(),
        profBg: document.getElementById("profBg").value.trim(),
        academicBg: document.getElementById("academicBg").value.trim(),
        primaryComp: document.getElementById("primaryComp").value.trim(),
        hobbies: document.getElementById("hobbies").value.trim(),
        skills: document.getElementById("skills").value.trim(),        
        quote: document.getElementById("quote").value.trim(),
        quoteAuthor: document.getElementById("quoteAuthor").value.trim(),
        funnyThing: document.getElementById("funnyThing").value.trim(),
        shareStatement: document.getElementById("shareStatement").value.trim(),
        unccWebpage: document.getElementById("unccWebpage").value.trim() || "#",
        linkedIn: document.getElementById("linkedIn").value.trim() || "#",
        gitHub: document.getElementById("gitHub").value.trim() || "#",
        gitHubIo: document.getElementById("gitHubIo").value.trim() || "#",
        itis: document.getElementById("itis").value.trim() || "#"
    };

    const picFile = document.getElementById("picture").files[0];
    const finalImg = picFile ? URL.createObjectURL(picFile) : "images/muhilan_photo.jpeg";

    const collectedCourses = [];
    const courseGroups = coursesContainer.querySelectorAll(".course-group");
    courseGroups.forEach((group) => {
        const dept = group.querySelector(".course-dept").value.trim();
        const num = group.querySelector(".course-num").value.trim();
        const name = group.querySelector(".course-name").value.trim();
        const reason = group.querySelector(".course-reason").value.trim();
        if (dept && num && name && reason) {
            collectedCourses.push({ dept, num, name, reason });
        }
    });

    const main = document.querySelector("main");
    main.innerHTML = `
        <link rel="stylesheet" href="styles/default.css">
    <script src="https://lint.page/kit/4d0fe3.js" crossorigin="anonymous"></script>
    <style>
        body{
            background-color: rgb(173, 247, 190);
        }
        a{
            color:rgb(22, 4, 139)
        }
        a:hover{
    color:rgb(191, 26, 26);
        }
        h1{
            font-family:Tahoma;
        }
        h2{
            font-family:Tahoma;
        }
        p{
            font-family:Georgia;
        } 
    </style>
    <h2>Introduction</h2>
    <h2>${data.firstName} ${data.middleName ? `"${data.middleName}"`: ""} ${data.nickname ? `"${data.nickname}"`: ""} ${data.lastName}</h2>
    <figure>
        <img src="${finalImg}" alt="Profile Picture" style="max-width:200px;">
        <figcaption><i>${data.picCaption}</i></figcaption>
    </figure>
    <p>${data.personalStmt}</p>
    <ul>
        <li><b>Personal Background:</b> ${data.personalBg}</li>
        <li><b>Professional Background:</b> ${data.profBg}</li>
        <li><b>Academic Background:</b> ${data.academicBg}</li>
        <li><b>Primary Computer Platform:</b> ${data.primaryComp}</li>
        <li><b>Hobbies:</b> ${data.hobbies}</li>
        <li><b>Skills:</b> ${data.skills}</li>
    </ul>
    <h3>Courses I Have Taken & Why</h3>
    <ul>
        ${collectedCourses.map((c) => `<li>${c.dept} ${c.num} - ${c.name} (${c.reason})</li>`).join("")}
    </ul>
    <p>"${data.quote}" -${data.quoteAuthor}</p>
    ${data.funnyThing ? `<p>Funny Thing About Me: ${data.funnyThing}</p>` : ''}
    ${data.shareStatement ? `<p>Something I Would Like to Share: ${data.shareStatement}</p>` : ''}

    <p>
        <a href="${data.unccWebpage}" target="_blank">Charlotte Webpges</a>
        ${data.divider}
        <a href="${data.linkedIn}" target="_blank">LinkedIn</a>
        ${data.divider}
        <a href="${data.gitHub}" target="_blank">GitHub</a>
        ${data.divider}
        <a href="${data.gitHubIo}" target="_blank">GitHub.io</a>
        ${data.divider}
        <a href="${data.itis}" target="_blank">ITIS3135</a>
    </p>
    <p><a href="intro_form.html">Reset and Create Another Page</a></p>
    `;
});

//clear
clearBtn.addEventListener("click", function(){
    const elements = form.querySelectorAll("input, textarea");
    elements.forEach((e) => {
        e.value="";
        e.style.border = '2px solid rgb(41, 33, 95)';
    });
    document.getElementById("pic").src = "images/muhilan_photo.jpeg";
});

//reset
form.addEventListener("reset",function(){
    document.getElementById("pic").src = "images/muhilan_photo.jpeg";
    
    const groups = coursesContainer.querySelectorAll(".course-group:not(:first-child)");
    groups.forEach((group) => group.remove());
    courseGroupCounter = 2;
    
    const allInputs = form.querySelectorAll("input, textarea");
    allInputs.forEach((input) => {
        input.style.border = '2px solid rgb(41, 33, 95)';
    });
});