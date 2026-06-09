const courseSelect = document.getElementById("courseSelect");
const courseDetails = document.getElementById("courseDetails");
const viewDetailsBtn = document.getElementById("viewDetailsBtn");
const mainContent = document.querySelector(".main-content");
const placeholderSection = document.getElementById("placeholderSection");
const detailsCard = document.getElementById("detailsCard");
const displayModal = document.getElementById("exampleModal");

const detailPlaceholder = document.getElementById("detailPlaceholder")
const displayAcceptance = document.getElementById("displayAcceptanceFee")
const displayTuition = document.getElementById("displayTuition")
const displayTuitionDuration = document.getElementById("displayTuitionDuration")
const payOnceView = document.getElementById("payOnce")
const payTwiceView = document.getElementById("payTwice")
const payPerLevelView = document.getElementById("payPerLevel")
const payOnceDiv = document.getElementById("payOnceDiv")
const payTwiceDiv = document.getElementById("payTwiceDiv")
const payPerLevelDiv = document.getElementById("payPerLevelDiv")


let modalInstance;

// Initialize modal when document is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
        modalInstance = new bootstrap.Modal(displayModal);
    });
} else {
    modalInstance = new bootstrap.Modal(displayModal);
}

const courses = {
    se_mobile: {
        name: "Software Engineering Mobile Dev (JS Native)",
        tuitionFee: 1100000,
        months: 12,
        levels: 6
    },

    se_UIUX: {
        name: "UI/UX Designing",
        tuitionFee: 700000,
        months: 9,
        levels: 4
    },

    se_webExpert: {
        name: "Software Engineering Full Stack Web Development (Expert)",
        tuitionFee: 900000,
        months: 10,
        levels: 5
    },

    se_webStandard: {
        name: "Software Engineering Full Stack Web Development (Standard)",
        tuitionFee: 500000,
        months: 6,
        levels: 3
    },

    se_javaWithWeb: {
        name: "Java Web Programming (With programming knowledge)",
        tuitionFee: 800000,
        months: 8,
        levels: 4
    },

    se_javaWithoutWeb: {
        name: "Java Web Programming (Without programming knowledge)",
        tuitionFee: 1100000,
        months: 12,
        levels: 6
    },
    
    netWorkCiscoAndMirk: {
        name: "Networking Administration (Cisco and Mirkrotik)",
        tuitionFee: 600000,
        months: 6,
        levels: 3
    },

    netWorkCisco: {
        name: "Networking Administration (Cisco)",
        tuitionFee: 400000,
        months: 4,
        levels: 2
    },

    netWorkMirkrotik: {
        name: "Networking Administration (Mirkrotik)",
        tuitionFee: 400000,
        months: 4,
        levels: 2
    },


}

const acceptanceFee = {
    totalAcceptance: 10000
}

const discount = {
    fullPayment: 0.15,
    twoInstallment: 0.10,
    corpMember: 0.20,
}

Object.entries(courses).forEach(([courseId, course]) => {
    const option = document.createElement("option");
    option.value = courseId;
    option.textContent = course.name;
    courseSelect.appendChild(option);
});

// console.log("Courses loaded:", courseSelect.options.length);

// courseSelect.value = "se_webExpert"
detailPlaceholder.innerHTML = "Price Estimation will show here"



function showSelection() {
    const selectedCourse = courseSelect.value;
    const course = courses[selectedCourse];

    if (course) {
        courseDetails.innerHTML = `Below is the breakdown to study <strong>${course.name}</strong> for ${course.months} months in ${course.levels} level(s).`;

        displayAcceptance.textContent = `₦${acceptanceFee.totalAcceptance.toLocaleString("en-NG")}`
        displayTuition.textContent = `₦${course.tuitionFee.toLocaleString("en-NG")}`
        displayTuitionDuration.textContent = `${course.months} months duration - ${course.levels} level(s)`

        // Pay Once
        const moneySaved = course.tuitionFee * discount.fullPayment
        const payOnce = course.tuitionFee - moneySaved
        payOnceView.innerHTML = `<small>Save ₦${moneySaved.toLocaleString("en-NG")}</small>`
        payOnceDiv.innerHTML = `₦${payOnce.toLocaleString("en-NG")}`

        // Pay Twice
        const moneySavedTwice = course.tuitionFee * discount.twoInstallment
        const payTwice = course.tuitionFee - moneySavedTwice
        const mainPayTwice = payTwice / 2

        payTwiceView.innerHTML = `<small>Save ₦${moneySavedTwice.toLocaleString("en-NG")}</small>`
        payTwiceDiv.innerHTML = `₦${mainPayTwice.toLocaleString("en-NG")}`

        // Pay Per Level
        const payPerLevel = Math.floor(course.tuitionFee / course.levels)
        payPerLevelView.innerHTML = ``
        payPerLevelDiv.innerHTML = `₦${payPerLevel.toLocaleString("en-NG")}`
    }
}

courseSelect.addEventListener("change", showSelection)
showSelection()

// Ensure event listeners are attached when DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
        if (viewDetailsBtn) {
            viewDetailsBtn.addEventListener("click", handleViewDetails);
        }
    });
} else {
    if (viewDetailsBtn) {
        viewDetailsBtn.addEventListener("click", handleViewDetails);
    }
}

// Separate handler function for View Details button
function handleViewDetails(e) {
    e.preventDefault();    
    if (!courseSelect.value || courseSelect.value.trim() === "") {    
        if (modalInstance) {
            modalInstance.show();
        } else {
            console.error("Modal instance not initialized");
        }
    } else {
        placeholderSection.classList.add("hidden");
        detailsCard.style.display = "block";
        showSelection();
    }
}

// Main calculation
// console.log(discount.fullPayment)






