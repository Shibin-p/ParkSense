* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  background: linear-gradient(135deg, #eef2f7, #dfe7ef);
  color: #333;
}

/* HEADER */
header {
  text-align: center;
  padding: 20px;
}

header h1 {
  margin: 0;
  font-size: 36px;
}

.subtitle {
  color: #555;
}

/* SUMMARY */
.summary {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 25px;
}

.card {
  background: white;
  padding: 15px 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  font-size: 18px;
}

.card span {
  font-size: 26px;
  font-weight: bold;
}

/* PARKING AREA */
.parking-area {
  width: 90%;
  max-width: 1000px;
  margin: auto;
  background: #fff;
  padding: 35px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  position: relative;
}

/* ROWS */
.row {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 25px 0;
}

/* SLOT CONTAINER (LINES) */
.slot-container {
  padding: 8px;
  border-left: 4px dashed #bbb;
  border-right: 4px dashed #bbb;
}

/* SLOT */
.slot {
  width: 120px;
  height: 75px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  position: relative;
  transition: all 0.4s ease;
  box-shadow: inset 0 0 0 rgba(0,0,0,0);
}

.slot span {
  z-index: 2;
}

/* STATUS COLORS */
.free {
  background: linear-gradient(135deg, #2ecc71, #27ae60);
  box-shadow: 0 8px 20px rgba(46, 204, 113, 0.6);
}

.occupied {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  box-shadow: 0 8px 20px rgba(231, 76, 60, 0.6);
}

/* ROAD */
.road {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background: #e0e0e0;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  color: #555;
}

.lane {
  flex: 1;
  height: 4px;
  background: repeating-linear-gradient(
    to right,
    #888,
    #888 10px,
    transparent 10px,
    transparent 20px
  );
}

/* GATES */
.gate {
  position: absolute;
  bottom: -18px;
  padding: 8px 16px;
  background: #3498db;
  color: white;
  border-radius: 20px;
  font-weight: bold;
}

.entry {
  left: 40px;
}

.exit {
  right: 40px;
}
