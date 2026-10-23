import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#57635E]">
        <li>
          <Link
            href="/"
            className="hover:text-[#1E3A34] hover:underline focus-visible:outline-[#1E3A34]"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-[#CBD3CC]" aria-hidden="true">
                /
              </span>
              {isLast || !item.href ? (
                <span
                  className="text-[#1E3A34] font-semibold"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#1E3A34] hover:underline focus-visible:outline-[#1E3A34]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
