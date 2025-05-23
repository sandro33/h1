import { useState, useEffect } from "react";
import "./App.css";

const POMODORO = 25 * 60;
const BREAK = 5 * 60;

export default function App() {
  const [mode, setMode] = useState("pomodoro");
  const [seconds, setSeconds] = useState(POMODORO);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      setSeconds((s) => {
        if (s > 0) return s - 1;
        if (mode === "pomodoro") {
          setMode("break");
          return BREAK;
        } else {
          setMode("pomodoro");
          return POMODORO;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [running, mode]);

  useEffect(() => {
    setSeconds(mode === "pomodoro" ? POMODORO : BREAK);
    setRunning(false);
  }, [mode]);

  function format(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col items-center">
        <div className="flex mb-8 gap-4">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition ${
              mode === "pomodoro"
                ? "bg-red-500 text-white shadow"
                : "bg-white text-red-500 border-2 border-red-300 hover:bg-red-50"
            }`}
            onClick={() => setMode("pomodoro")}
          >
            Pomodoro
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition ${
              mode === "break"
                ? "bg-green-500 text-white shadow"
                : "bg-white text-green-500 border-2 border-green-300 hover:bg-green-50"
            }`}
            onClick={() => setMode("break")}
          >
            Break
          </button>
        </div>
        <div className="text-7xl font-mono font-bold mb-8 text-gray-700 drop-shadow">
          {format(seconds)}
        </div>
        <div className="flex gap-4">
          {!running ? (
            <button
              className="px-8 py-2 bg-blue-500 text-white rounded-full font-semibold shadow hover:bg-blue-600 transition"
              onClick={() => setRunning(true)}
            >
              Start
            </button>
          ) : (
            <button
              className="px-8 py-2 bg-yellow-400 text-white rounded-full font-semibold shadow hover:bg-yellow-500 transition"
              onClick={() => setRunning(false)}
            >
              Pause
            </button>
          )}
          <button
            className="px-8 py-2 bg-gray-300 text-gray-700 rounded-full font-semibold shadow hover:bg-gray-400 transition"
            onClick={() => {
              setRunning(false);
              setSeconds(mode === "pomodoro" ? POMODORO : BREAK);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
