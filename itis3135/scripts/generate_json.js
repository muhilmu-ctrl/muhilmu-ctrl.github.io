/*document.addEventListener("DOMContentLoaded",() => {
    const genJsonBtn = document.getElementById("generateJson");
    if (genJsonBtn){
        genJsonBtn.addEventListener("click",generateJSON);
    }
});*/

function generateJSON(){
    //const form = document.getElementById("introForm");

    const courses = [];
    const courseElements = document.querySelectorAll(".course-group");

    courseElements.forEach((ce) => {
        const dept = ce.querySelector(".course-dept").value.trim();
        const num = ce.querySelector(".course-num").value.trim();
        const name = ce.querySelector(".course-name").value.trim();
        const reason = ce.querySelector(".course-reason").value.trim();

        if (dept && num && name && reason){
            courses.push({
                department: dept,
                number: num,
                name: name,
                reason: reason
            });
        }
    });

    const links = [
        {name: "Charlotte Webpages", href: document.getElementById("unccWebpage").value.trim()},
        {name: "LinkedIn", href: document.getElementById("linkedIn").value.trim()},
        {name: "GitHub", href: document.getElementById("gitHub").value.trim()},
        {name: "GitHubIO", href: document.getElementById("gitHubIo").value.trim()},
        {name: "ITIS", href: document.getElementById("itis").value.trim()}
    ].filter((link) => link.href);

    const jsonFile = {
        firstName: document.getElementById("firstName").value.trim(),
        preferredName: document.getElementById("nickname").value.trim(),
        middleName: document.getElementById("middleName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        acknowledgementStatement: document.getElementById("acknStmt").value.trim(),
        acknowledgementDate: document.getElementById("acknDate").value.trim(),
        mascotAdjective: document.getElementById("mascotAdj").value.trim(),
        mascotAnimal: document.getElementById("mascotAnimal").value.trim(),
        divider: document.getElementById("divider").value.trim(),
        image: document.getElementById("pic").getAttribute("src").trim(),
        imageCaption: document.getElementById("picCaption").value.trim(),
        personalStatement: document.getElementById("personalStmt").value.trim(),
        personalBackground: document.getElementById("personalBg").value.trim(),
        professionalBackground: document.getElementById("profBg").value.trim(),
        academicBackground: document.getElementById("academicBg").value.trim(),
        subjectBackground: document.getElementById("subjectBg").value.trim(),
        primaryComputer: document.getElementById("primaryComp").value.trim(),
        graduationDate: document.getElementById("graduation").value.trim(),
        courses: courses,
        links: links
    };
    const jsonStr = JSON.stringify(jsonFile,null,2);
    document.getElementById("introForm").style.display = "none";

    const pageHeading = document.getElementById("pageHeading");
    if (pageHeading){
        pageHeading.textContent = "Introduction HTML";
    }

    const instructionHeading = document.getElementById("instructionHeading");
    if (instructionHeading){
        instructionHeading.style.display = "none";
    }

    const output = document.getElementById("jsonOutput");
    const jsonData = document.getElementById("jsonData");

    output.style.display = "block";
    jsonData.textContent = jsonStr;

    hljs.highlightElement(jsonData);
}

document.addEventListener("DOMContentLoaded",() => {
    const genJsonBtn = document.getElementById("generateJson");
    if (genJsonBtn){
        genJsonBtn.addEventListener("click",generateJSON);
    }
});