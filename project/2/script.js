// ข้อมูลเกี่ยวกับห้องเรียน
const rooms = [
    { id: 1, name: "ห้อง 122", status: "ว่าง" },
    { id: 2, name: "ห้อง 140", status: "ว่าง" },
    { id: 3, name: "ห้อง 539", status: "ว่าง" },
    { id: 4, name: "ห้อง 542", status: "ว่าง" },
    { id: 5, name: "ห้อง 543", status: "ว่าง" },
    { id: 6, name: "ห้อง COM-EE", status: "ว่าง" },
    { id: 7, name: "ห้อง LEC-EE", status: "ว่าง" },
];

// ฟังก์ชันสำหรับแสดงตารางห้องเรียน
function renderRoomTable() {
    const roomTable = document.getElementById("room-table");

    // เคลียร์ตาราง
    roomTable.innerHTML = "";

    // เพิ่มแถวสำหรับแต่ละห้อง
    rooms.forEach((room) => {
        const row = roomTable.insertRow();
        row.innerHTML = `
            <td>${room.name}</td>
            <td>${room.status}</td>
            <td><button onclick="reserveRoom(${room.id})">จอง</button></td>
        `;
    });
}

// ฟังก์ชันสำหรับจองห้อง
function reserveRoom(roomId) {
    const room = rooms.find((r) => r.id === roomId);

    if (room && room.status === "ว่าง") {
        room.status = "จองแล้ว";
        renderRoomTable();
    } else {
        alert("ห้องไม่ว่างหรือห้องไม่มีอยู่");
    }
}

// เรียกใช้ฟังก์ชันแสดงตารางห้องเรียนเมื่อหน้าเว็บโหลด
renderRoomTable();