import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        The page you are looking for does not exist. Please check the URL or{" "}
        <a href="/">Go Home</a>
      </p>
    </main>
  );
}
