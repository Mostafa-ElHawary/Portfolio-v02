import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "yzys4cq0",
    dataset: "production",
    apiVersion: "2023-09-08",
  });

  return client.fetch(groq`{
        'projects': *[_type == "project"] | order(order) {
            "id": _id,
            title,
            description,
            "image": image.asset->url,
            techStack,
            githubRepo,
            externalLink,
        }, 
        'technologies': *[_type == 'technology'] | order(order) {
            "id": _id,
            name,
            "image": image.asset->url,
            "color": image.asset->metadata.palette.dominant.background
        }
      }`);
}
