// Google Sheets API URL (replace with your deployed Apps Script URL)
const GOOGLE_SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbx994zbtgtr6FoSrKwrOOCtXqBYVeQRNbwix4bwHN9OnM8sPIp6RHingmdcOGzlYXIGWA/exec";

// Signup function
async function signup(username, email, password) {
    const response = await fetch(GOOGLE_SHEETS_API_URL, {
        method: "POST",
        body: JSON.stringify({ action: "signup", username, email, password }),
        headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    alert(data.message);
}

// Login function
async function login(emailOrUsername, password) {
    const response = await fetch(GOOGLE_SHEETS_API_URL, {
        method: "POST",
        body: JSON.stringify({ action: "login", emailOrUsername, password }),
        headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    if (data.success) {
        alert("Login successful! Welcome " + data.username);
    } else {
        alert("Invalid credentials");
    }
}
