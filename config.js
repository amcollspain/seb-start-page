const SCHOOL_NAME = "American College Spain";

// Define sessions by date
const SESSIONS = [
  {
    name: "Spring Math Session",
    date: "2026-03-23",
    color: "#00274c",
    pinHash: "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4"
  },
  {
    name: "Spring Physics Session",
    date: "2026-03-24",
    color: "#004d40",
    pinHash: "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4"
  }
];

// Auto-detect today’s session
function getTodaySession() {
  const today = new Date().toISOString().split("T")[0];
  return SESSIONS.find(s => s.date === today);
}
