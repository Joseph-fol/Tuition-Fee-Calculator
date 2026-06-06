const courseSelect = document.getElementById("courseSelect");
const courseDetails = document.getElementById("courseDetails");

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
    option.value = courseId
    option.textContent = course.name
    courseSelect.appendChild(option)
})

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

detailPlaceholder.innerHTML = "Price Estimation will show here"

function showSelection() {
    const selectedCourse = courseSelect.value
    const course = courses[selectedCourse]

    if (course) {
        courseDetails.innerHTML = `Below is the breakdown  to study ${course.name} for ${course.months} months at ${course.levels} levels <br>`

        displayAcceptance.textContent = `Acceptance fee is ₦${acceptanceFee.totalAcceptance.toLocaleString("en-NG")} which is compulsory to secure your admission`

        displayTuition.textContent = `Tuition fee  - ₦${course.tuitionFee.toLocaleString("en-NG")}`

        displayTuitionDuration.textContent = `${course.months} months duration - ${course.levels} level(s)`

        // Pay Once
        const moneySaved = course.tuitionFee * discount.fullPayment
        const payOnce = course.tuitionFee - moneySaved
        payOnceView.innerHTML = `<small>Save - ₦${moneySaved.toLocaleString("en-NG")}</small>`
        payOnceDiv.innerHTML = `Pay once - ₦${payOnce.toLocaleString("en-NG")}`

        // Pay Twice
        const moneySavedTwice = course.tuitionFee * discount.twoInstallment
        const payTwice = course.tuitionFee - moneySavedTwice
        const mainPayTwice = payTwice / 2

        payTwiceView.innerHTML = `<small>Save - ₦${moneySavedTwice.toLocaleString("en-NG")}</small>`
        payTwiceDiv.innerHTML = `Pay twice - ₦${mainPayTwice.toLocaleString("en-NG")}`

        // Pay Per Level
    }
}

courseSelect.addEventListener("change", showSelection)
showSelection()

// Main calculation
console.log(discount.fullPayment)






