import Link from "next/link";
const Footer = () => {
  return (
    <footer className="text-center text-neutral-300 text-xs pb-4 mt-auto">
      &copy;{new Date().getFullYear()}{" "}
      <Link
        className="hover:text-blue-600 transition"
        href={`https://github.com/maxjn`}
      >
        Mohamad Haqnegahdar (Maxjn)
      </Link>
    </footer>
  );
};

export default Footer;
