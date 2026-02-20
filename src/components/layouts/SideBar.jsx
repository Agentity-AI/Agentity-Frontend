import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", icon: "📊", to: "/" },
  { label: "Agents", icon: "🤖", to: "/agents" },
  { label: "Simulations", icon: "🧪", to: "/simulations" },
  { label: "Smart Contract Audits", icon: "🛡️", to: "/audits" },
  { label: "Payments & Transactions", icon: "💳", to: "/payments" },
  { label: "Alerts & Monitoring", icon: "🔔", to: "/alerts" },
  { label: "SDK & Documentation", icon: "📚", to: "/docs" },
  { label: "Settings", icon: "⚙️", to: "/settings" },
];

function Sidebar() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-4 gap-2 border-b border-base-300">
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
          <span className="text-xl text-primary-content">🛡️</span>
        </div>
        <span className="font-semibold text-lg">Agentity</span>
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              [
                "flex items-center gap-3 px-4 py-2 text-sm cursor-pointer rounded-lg transition-colors",
                "hover:bg-base-300",
                isActive ? "bg-base-300 text-primary font-medium" : "text-base-content/80",
              ].join(" ")
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
