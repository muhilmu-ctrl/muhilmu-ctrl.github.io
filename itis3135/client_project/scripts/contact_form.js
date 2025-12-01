function validatePhoneNum(p){
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(p);
}

function validateDate(d){
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(d);
}


document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const phoneNum = document.getElementById("phoneNum").value.trim();
    const eventDate = document.getElementById("eventDate").value.trim();
    const eventTime = document.getElementById("eventTime").value.trim();
    const eventLocation = document.getElementById("eventLocation").value.trim();

    let errorMsg = "";
    const msg = `
        <strong>First Name: </strong> ${firstName}<br>
        <strong>Last Name: </strong> ${lastName}<br>
        <strong>Phone Number: </strong> ${phoneNum}<br>
        <strong>Event Date: </strong> ${eventDate}<br>
        <strong>Event Time: </strong> ${eventTime}<br>
        <strong>Event Location: </strong> ${eventLocation}<br>
    `;

    if (!firstName || !lastName || !phoneNum || !eventDate || !eventTime || !eventLocation){
        errorMsg = "Please fill in all fields.";
    } else if (!validatePhoneNum(phoneNum)){
        errorMsg = "Please enter a valid phone number.";
    } else if (!validateDate(eventDate)){
        errorMsg = "Please enter a valid date.";
    }

    if (errorMsg){
        alert(errorMsg);
        return;
    }

    document.getElementById("confirmText").innerHTML = msg;
    document.getElementById("confirmationPopup").style.display = "block";
    
});

document.getElementById("confirmBtn").addEventListener("click", function(){
    document.getElementById("confirmationPopup").style.display = "none";
    alert("Thank you! Your information has been confirmed!");
    document.querySelector("form").reset();
});
document.getElementById("editBtn").addEventListener("click", function(){
    document.getElementById("confirmationPopup").style.display = "none";
});