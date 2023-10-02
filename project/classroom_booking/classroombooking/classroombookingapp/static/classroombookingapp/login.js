// กำหนดค่า username และ password ที่กำหนด
const correctUsername = "630911156";
const correctPassword = "630911156";

// รับอ้างอิงไปยังองค์ประกอบใน HTML
const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");
const message = document.getElementById("message");

// เพิ่มอีเวนต์การคลิกที่ปุม Login
loginButton.addEventListener("click", function () {
    // รับค่า username และ password จากฟอร์ม
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // ตรวจสอบความถูกต้องของ username และ password
    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        // ถูกต้อง
        message.textContent = "Your username and password are correct! You are logged in.";
    } else {
        // ผิด
        message.textContent = "Your username or password is incorrect! Please try again.";
    }
});