export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-6 py-1 text-center">
      <p className="mt-2 text-slate-600">
        © {new Date().getFullYear()} Austin Amadi
      </p>
    </footer>
  );
}