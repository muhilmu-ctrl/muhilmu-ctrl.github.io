function validatePhoneNum(p){
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(d);
}

function validateDate(d){
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    return dateRegex.test(p);
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

    if (!firstName || !lastName || !phoneNum || !eventDate || !eventTime || !eventLocation){
        errorMsg = "Please fill in all fields.";
    } else if (!validatePhoneNum(p)){
        errorMsg = "Please enter a valid phone number.";
    } else if (!validateDate(d)){
        errorMsg = "Please enter a valid date.";
    }

    if (errorMsg){
        alert(errorMsg);
    } else {
        alert("Form submitted successfully!");
        document.querySelector("form").reset;
    }
    
});

