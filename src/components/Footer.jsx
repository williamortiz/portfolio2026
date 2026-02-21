export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 text-center border-t border-white/5">
      <p className="text-gray-500 text-sm">
        © {year} William Ortiz. Built with React &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
