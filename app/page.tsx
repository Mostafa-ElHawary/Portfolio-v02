
"use Client"

import { getProjects } from "@/sanity/sanity-utils";
export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      {projects.map((project:any) => (
        <h1 className={project._id}>{project.name}</h1>
      ))}
    </div>
  );
}
