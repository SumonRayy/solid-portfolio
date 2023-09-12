import "./Resume.css";

const resumeLink = import.meta.env.VITE_RESUME_LINK || "#";

export default function Resume() {
  return (
    <button class="resume" onClick={() => window.open(resumeLink)}>
      My Resume
    </button>
  );
}
