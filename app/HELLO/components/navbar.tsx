import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav className="bg-white text-black shadow-md">
      <ul className="container mx-auto flex justify-center gap-10 py-4">

        <NavItem href="/">home</NavItem>
        <NavItem href="/aboutme">About me</NavItem>
        <NavItem href="/skills">Skills</NavItem>
        <NavItem href="/resume">Resume</NavItem>
        <NavItem href="/projects">Project</NavItem>
        <NavItem href="/contact">Contact</NavItem>

      </ul>
    </nav>
  );
}
