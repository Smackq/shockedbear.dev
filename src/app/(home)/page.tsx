import Link from 'next/link';
import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json'
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'shockedbear.dev',
    description: '',
};

export const revalidate = 60;

export default async function HomePage () {
    const aboutHtml =
        <div className={"grid gap-6 px-6"}>
            <h1 className={"text-3xl font-medium"}>Hi! I’m Denis — Web Solutions Architect</h1>
            <div className={"grid gap-4 text-white/60 leading-7"}>
                <p>With 12+ years of experience, I design and build scalable, secure web platforms that help businesses grow and innovate. From startups to global enterprises, I transform complex requirements into high-performance solutions through modern architecture, clean code, and robust cloud infrastructure.</p>
                <p>I cover the full development lifecycle — from architecture design and coding to code reviews and team mentorship. Passionate about code quality and performance, I apply SOLID principles and design patterns to create maintainable, future-proof systems.</p>
            </div>
            <p className={"bg-white/10 rounded-xl text-white/60 leading-7 px-6 py-4"}>Looking for a tech partner who
                turns complexity into simplicity? <Link
                    href="https://www.linkedin.com/in/denissmagin/" target="_blank" aria-label="LinkedIn"
                    rel={"noopener noreferrer"} className="text-white/90 hover:text-white transition-colors">Connect
                    with me on LinkedIn</Link> or email me at <Link href="mailto:hello@shockedbear.dev"
                                                                    target="_blank" aria-label="Email"
                                                                    className="text-white/90 hover:text-white transition-colors">hello@shockedbear.dev</Link>.
            </p>
        </div>;
    const projectsHtml =
        <div className={"grid gap-6"}>
            <div className={"flex flex-row justify-between items-end gap-6 px-6 pb-4 border-b border-white/10"}>
                <h2 className={"text-2xl font-medium"}>Recent projects</h2>
                <Link href="/projects"
                      className={"flex items-center gap-1 text-white/60 hover:text-white transition-colors"}>
                    <span>View all</span>
                    <ArrowUpRight className={"w-6 h-6"}/>
                </Link>
            </div>
            <ul className={"grid grid-cols-1 sm:grid-cols-2 gap-12 px-6"}>
                { projects.slice(0, 3).map((project, index) => (
                    <li key={index}>
                        <ProjectCard project={project}/>
                    </li>
                )) }
            </ul>
        </div>;

    return (
        <main className={"max-w-3xl mx-auto my-12 sm:my-24"}>
            <div className={"grid gap-12 sm:gap-24"}>
                {aboutHtml}
                <div className={"grid gap-6"}>
                    <div
                        className={"flex flex-row justify-between items-center gap-6 px-6 pb-4 border-b border-white/10"}>
                        <h2 className={"text-2xl font-medium"}>Tech Stack</h2>
                    </div>
                    <div className={"grid gap-4 grid-cols-1 sm:grid-cols-2 items-start px-6"}>
                        <div className={"grid gap-4"}>
                            <h3 className={"text-xl"}>Frontend</h3>
                            <ul className={"ml-6 list-disc leading-7 text-white/60"}>
                                <li>Vue.js, Nuxt.js, Inertia.js</li>
                                <li>JavaScript (ES6+), TypeScript</li>
                                <li>Tailwind CSS, shadcn/ui</li>
                                <li>Babel, Webpack</li>
                                <li>SCSS, Bootstrap</li>
                            </ul>
                        </div>
                        <div className={"grid gap-4"}>
                            <div className={"grid gap-4"}>
                                <h3 className={"text-xl"}>Backend</h3>
                                <ul className={"ml-6 list-disc leading-7 text-white/60"}>
                                    <li>PHP 8 (Laravel)</li>
                                </ul>
                            </div>
                            <div className={"grid gap-4"}>
                                <h3 className={"text-xl"}>Databases</h3>
                                <ul className={"ml-6 list-disc leading-7 text-white/60"}>
                                    <li>MySQL</li>
                                    <li>Redis</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4 items-start px-6"}>
                        <div className={"grid gap-4"}>
                            <h3 className={"text-xl"}>DevOps & Infrastructure</h3>
                            <ul className={"ml-6 list-disc leading-7 text-white/60"}>
                                <li>AWS (EC2, S3, Lambda, CloudFront, etc)</li>
                                <li>Cloudflare</li>
                                <li>Terraform</li>
                                <li>Docker</li>
                                <li>Apache, Nginx</li>
                            </ul>
                        </div>
                        <div className={"grid gap-4"}>
                            <h3 className={"text-xl"}>Other Skills</h3>
                            <ul className={"ml-6 list-disc leading-7 text-white/60"}>
                                <li>Bash scripting</li>
                                <li>Web security and data protection (SOC 2 compliance)</li>
                                <li>CI/CD implementation</li>
                                <li>Code quality, testing (unit, feature, integration tests)</li>
                                <li>Applying SOLID principles and design patterns</li>
                                <li>Mentoring and onboarding engineers</li>
                                <li>Cost optimization and infrastructure scaling</li>
                            </ul>
                        </div>
                    </div>
                </div>
                { projectsHtml }
            </div>
        </main>
    );
}
