function Nav() {
  return (
    <nav className="bg-zinc-50 px-6 py-3 rounded-b-2xl shadow-lg sticky top-0 z-50 shadow-zinc-300">
      <div className="container flex flex-wrap justify-between">
        <span className="text-4xl font-semibold whitespace-nowrap navtext bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 drop-shadow-sm">
          Ortca
        </span>
      </div>
    </nav>
  );
}

export default Nav;
