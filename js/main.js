// DOM has to be executed first before the script, so move js to bottom of html 

// Key Mapping
document.addEventListener("keyup", function(event) {
    var key = event.key;
    if(key === "Enter") {
        update();
    }
});

// Click Mapping
// Submit Button
document.getElementById("submit").addEventListener("click", function(event) {
    update();
});

// Add Button


// Remove Button

function update() {
    //Basic Information
    var name = document.getElementById("name-input").value;
    document.getElementById("name").innerHTML = name;

    var email = document.getElementById("email-input").value;
    document.getElementById("email").innerHTML = email;

    var tel = document.getElementById("tel-input").value;
    document.getElementById("tel").innerHTML = tel;

    var website = document.getElementById("website-input").value;
    document.getElementById("website").innerHTML = website;
    document.getElementById("website").setAttribute("href", website);

    //Objective
    var objective = document.getElementById("objective-input").value;
    document.getElementById("objective").innerHTML = objective;

    //Education
    var schoolName = document.getElementById("school-name-input").value;
    document.getElementById("school-name").innerHTML = schoolName;

    var schoolStart = document.getElementById("school-start-input").value;
    document.getElementById("school-start").innerHTML = schoolStart;

    var schoolEnd = document.getElementById("school-end-input").value;
    document.getElementById("school-end").innerHTML = schoolEnd;

    var schoolLocation = document.getElementById("school-location-input").value;
    document.getElementById("school-location").innerHTML = schoolLocation;

    var major = document.getElementById("major-input").value;
    document.getElementById("major").innerHTML = major;

    var degree = document.getElementById("degree-input").value;
    document.getElementById("degree").innerHTML = degree;

    //Work Experience
    var jobTitle = document.getElementById("job-title-input").value;
    document.getElementById("job-title").innerHTML = jobTitle;

    var company = document.getElementById("company-input").value;
    document.getElementById("company").innerHTML = company;

    var jobLocation = document.getElementById("job-location-input").value;
    document.getElementById("job-location").innerHTML = jobLocation;

    var jobStart = document.getElementById("job-start-input").value;
    document.getElementById("job-start").innerHTML = jobStart;

    var jobEnd = document.getElementById("job-end-input").value;
    document.getElementById("job-end").innerHTML = jobEnd;

    var jobDesc = document.getElementById("job-desc-input").value;
    document.getElementById("job-desc").innerHTML = jobDesc;

    //Skills
    var skills = document.getElementById("skills-input").value;
    document.getElementById("skills").innerHTML = skills;
}
//if ENTER keycode, execute above