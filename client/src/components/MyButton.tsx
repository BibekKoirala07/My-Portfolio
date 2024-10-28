import { HashLink } from "react-router-hash-link";

const MyButton = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => {
  return (
    <HashLink
      to={href}
      className={`dark:bg-[#ecedef] w-fit p-2.5 align-middle px-7 font-medium dark:text-black transition-opacity hover:opacity-80 rounded-md ${className}`}
    >
      {children}
    </HashLink>
  );
};

export default MyButton;
