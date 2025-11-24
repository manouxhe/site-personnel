import Link from "next/link";

export default function NavItem(
  {
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }
) {
  return (
    <li
      className="
        font-serif
     
        transition-all duration-300 ease-in-out
        hover:bg-pink-200 hover:text-pink-300
        hover:scale-105 active:scale-95
        px-4 py-2 rounded-md
      "
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}
