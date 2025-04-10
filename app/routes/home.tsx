import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "pagina de 1º ASIR" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
    <h1 className="text-4xl"> HOLA :)</h1>
    <h2> esto es un subtitulo  </h2>
    </div>
  )
}
