import { projectsData } from "@/data/projects";
import ProjectDetailPage from "./ProjectDetailPage";

export async function generateStaticParams() {
  return Object.keys(projectsData).map((projectId) => ({
    projectId,
  }));
}

export default function Page() {
  return <ProjectDetailPage />;
}