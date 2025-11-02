function generateHTML(){
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

    const data = {
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
        userFrom: document.getElementById("userFrom").value.trim(),
        quote: document.getElementById("quote").value.trim(),
        quoteAuthor: document.getElementById("quoteAuthor").value.trim(),
        courses: courses,
        links: links
    };

    let htmlOutput = `
    <section>
        <h2>Introduction HTML</h2>
        <h3>${data.firstName} ${data.preferredName ? `"${data.preferredName}"` : ''} ${data.lastName} ${data.divider} ${data.mascotAdjective} ${data.mascotAnimal}</h3>
        <figure>
            <img 
                src="${data.image}" 
                alt="Headshot of ${data.firstName} ${data.lastName}"/>
            <figcaption>
                ${data.imageCaption}
            </figcaption>
        </figure>
        ${data.personalStatement ? `<p><strong>Personal Statement:</strong> ${data.personalStatement}</p>` : ''}
        <ul>
            <li><strong>Acknowledgement Statement:</strong> ${data.acknowledgementStatement}</li>
            <li><strong>Personal Statement:</strong> ${data.personalStatement}</li>
            <li><strong>Personal Background:</strong> ${data.personalBackground}</li>
            <li><strong>Professional Background:</strong> ${data.professionalBackground}</li>
            <li><strong>Academic Background:</strong> ${data.academicBackground}</li>
            <li><strong>Subject Background:</strong> ${data.subjectBackground}</li>
            <li><strong>Primary Computer:</strong> ${data.primaryComputer}</li>
            <li><strong>Graduation Date:</strong> ${data.graduationDate}</li>
            <li><strong>From:</strong> ${data.userFrom}</li>
        </ul>
        
        ${courses.length > 0 ? '<h4>Current Courses:</h4>' : ''}
        ${courses.length > 0 ? '<ul>' : ''}
        ${courses.map((c) => `
        <li>
            <strong>${c.department} ${c.number} - ${c.name}:</strong> ${c.reason}
        </li>`).join('')}
        ${courses.length > 0 ? '</ul>' : ''}

        ${data.funnyThing ? `<p><strong>Funny Fact:</strong> ${data.funnyThing}</p>` : ''}
        ${data.shareStatement ? `<p><strong>To Share:</strong> ${data.shareStatement}</p>` : ''}
        ${data.quote ? `<p><strong>Quote:</strong> ${data.quote} — <em>${data.quoteAuthor}</em></p>` : ''}
        
        ${links.length > 0 ? '<ul>' : ''}
        ${links.map((l) => `
        <li>
            <a href="${l.href}" target="_blank">${l.name}</a>
        </li>`).join('')}
        ${links.length > 0 ? '</ul>' : ''}
        
    </section>
    `;

    document.getElementById("introForm").style.display = "none";
    //document.getElementById("jsonOutput").style.display = "none";
    const pageHeading = document.getElementById("pageHeading");
    if (pageHeading){
        pageHeading.textContent = "Introduction HTML";
    }

    const instructionHeading = document.getElementById("instructionHeading");
    if (instructionHeading){
        instructionHeading.style.display = "none";
    }

    const output = document.getElementById("htmlOutput");
    const htmlData = document.getElementById("htmlData");

    output.style.display = "block";
    htmlData.textContent = htmlOutput;

    hljs.highlightElement(htmlData);
}

document.addEventListener("DOMContentLoaded",() => {
    const genHtmlBtn = document.getElementById("generateHtml");
    if (genHtmlBtn){
        genHtmlBtn.addEventListener("click",generateHTML);
    }
});