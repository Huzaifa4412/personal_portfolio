"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import { ProjectType } from "../../Typing";
import { client } from "../sanity/lib/client";

// 🔹 Corrected Type: Expecting an array of projects or null
export const ProjectsContext = createContext<ProjectType[] | null>(null);

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ProjectType[] | null>(null); // ✅ Fixed state type

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "projects"]`;
        const response: ProjectType[] = await client.fetch(query);
        setData(response);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectsContext.Provider value={data ?? []}>
      {" "}
      {/* ✅ Prevents null issues */}
      {children}
    </ProjectsContext.Provider>
  );
};

// 🔹 Custom hook for using context
export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};

export default ProjectsProvider;
