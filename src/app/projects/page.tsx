import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "shockedbear.dev",
    description: "shockedbear.dev-portfolio",
};

export default function Projects () {
    const projectsHtml =
        <div className={"grid gap-6"}>
            <ul className={"grid grid-cols-1 sm:grid-cols-2 gap-12 px-6"}>
                { projects.map((project, index) => (
                    <li key={index}>
                        <ProjectCard project={project}/>
                    </li>
                )) }
            </ul>
        </div>;
    return (
        <main className={"max-w-3xl mx-auto my-12 sm:my-24"}>
            <div className={"grid gap-12 sm:gap-24"}>
                <div className={"grid gap-6 px-6"}>
                    <h1 className={"text-3xl font-medium leading-10"}>Projects That Drive Results</h1>
                    <div className={"grid gap-4 text-white/60 leading-7"}>
                        <p>Discover a selection of projects where technology meets real business impact. From
                            high-growth startups to global platforms, each case study showcases how thoughtful
                            architecture, clean code, and reliable infrastructure can accelerate growth and deliver
                            measurable value.</p>
                        <p>I believe that great products are built through a deep understanding of both technical
                            challenges and business goals — these projects are a reflection of that philosophy.</p>
                    </div>
                    <p className={"bg-white/10 rounded-xl text-white/60 leading-7 px-6 py-4"}>Looking for a tech partner who turns complexity into simplicity? <Link
                        href="https://www.linkedin.com/in/denissmagin/" target="_blank" aria-label="LinkedIn"
                        rel={"noopener noreferrer"} className="text-white/90 hover:text-white transition-colors">Connect
                        with me on LinkedIn</Link> or email me at <Link href="mailto:hello@shockedbear.dev"
                                                                        target="_blank" aria-label="Email"
                                                                        className="text-white/90 hover:text-white transition-colors">hello@shockedbear.dev</Link>.
                    </p>
                </div>
                {projectsHtml}
            </div>
        </main>
    );
}
