function Topbar() {
  return (
    <div className="flex items-center justify-between w-full">
      {/* Left side (optional breadcrumb / page title placeholder) */}
      <div className="text-sm text-base-content/60 hidden md:block">
        {/* You can put breadcrumbs here if you want */}
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-4">
        {/* Network badge */}
        <div className="badge badge-ghost gap-2 px-3 py-2">
          <span className="w-2 h-2 rounded-full bg-success" />
          Avalanche
        </div>

        {/* Notification icon */}
        <button className="btn btn-ghost btn-circle">
          <span className="text-lg">🔔</span>
        </button>

        {/* Wallet / profile */}
        <button className="btn btn-ghost border border-base-300 rounded-full px-3 h-9 min-h-0">
          <span className="text-xs font-mono">0x7a9f...3b2c</span>
        </button>
      </div>
    </div>
  );
}

export default Topbar;
