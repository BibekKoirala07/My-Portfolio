import { HashLink } from "react-router-hash-link";

const MyButton = ({
  children,
  className,
  href,
  newPage = false,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  newPage?: boolean;
}) => {
  console.log(newPage);
  if (newPage) {
    return (
      <HashLink
        to="/my_resume.pdf"
        className={`dark:bg-[#ecedef] w-fit p-2.5 align-middle px-7 font-medium dark:text-black transition-opacity hover:opacity-80 rounded-md ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </HashLink>
    );
  }
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
