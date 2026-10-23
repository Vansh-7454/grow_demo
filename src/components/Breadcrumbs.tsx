import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#806F6C]">
        <li>
          <Link
            href="/"
            className="hover:text-[#FF3B40] hover:underline focus-visible:outline-[#FF3B40]"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-[#F2CECA]" aria-hidden="true">
                /
              </span>
              {isLast || !item.href ? (
                <span
                  className="text-[#291817] font-bold"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#FF3B40] hover:underline focus-visible:outline-[#FF3B40]"
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
