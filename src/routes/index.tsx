import { Title } from "solid-start";
import Resume from "~/components/Resume";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>{import.meta.env.VITE_RESUME_NAME || "Hello World!"}</h1>
      <p>
        {import.meta.env.VITE_RESUME_INTRO ||
          "This is a bare SolidStart project."}
      </p>
      <Resume />
    </main>
  );
}
