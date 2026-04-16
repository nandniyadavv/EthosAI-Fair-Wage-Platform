function login() {
    const email = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email === "" || password === "") {
        alert("Please enter email and password");
        return;
    }

    // Save user
    localStorage.setItem("user", email);

    // Initialize earnings if not present
    if (!localStorage.getItem("earnings")) {
        localStorage.setItem("earnings", 0);
    }

    // Redirect
    window.location.href = "dashboard.html";
}

function calculateWage() {
    const complexity = document.getElementById("complexity").value;
    const hours = document.getElementById("hours").value;
    const performance = document.getElementById("performance").value;

    // ✅ Validation
    if (complexity === "") {
        alert("Please select task complexity");
        return;
    }

    if (hours === "" || performance === "") {
        alert("Please fill all fields");
        return;
    }

    let rate;

    if (complexity === "Low") rate = 500;
    else if (complexity === "Medium") rate = 1000;
    else if (complexity === "High") rate = 1500;

    // 💰 Wage calculation
    const wage = rate * hours * (performance / 100);

    // 🔥 STORE earnings in localStorage
    let currentEarnings = localStorage.getItem("earnings");
    currentEarnings = currentEarnings ? parseFloat(currentEarnings) : 0;

    const newEarnings = currentEarnings + wage;

    localStorage.setItem("earnings", newEarnings);

    // ✅ Show result
    alert("Estimated Wage: ₹" + Math.round(wage));

    // 🔄 Go back to dashboard automatically
    window.location.href = "dashboard.html";
}