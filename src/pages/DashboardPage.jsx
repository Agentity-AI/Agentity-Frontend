import AppLayout from "../layouts/AppLayouts";


const topMetrics = [
  {
    label: "Total Agents",
    value: 4,
    deltaText: "↑ 15% this month",
    deltaColor: "text-success",
  },
  {
    label: "Verified Agents",
    value: 3,
    deltaText: "↑ 8% this month",
    deltaColor: "text-success",
  },
  {
    label: "Active Simulations",
    value: 0,
    deltaText: "",
    deltaColor: "",
  },
  {
    label: "Vulnerabilities Detected",
    value: 6,
    deltaText: "",
    deltaColor: "",
  },
  {
    label: "Transactions Executed",
    value: 4,
    deltaText: "↑ 12% this month",
    deltaColor: "text-success",
  },
];

function DashboardPage() {
  return (
    <AppLayout>
      {/* Header */}
      <div className="mb-6 bg-red-900 p-4 rounded-lg">
        <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
        <p className="text-sm text-base-content/60">
          System overview and activity monitoring
        </p>
      </div>

      {/* Top metric cards */}
      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5 mb-6">
        {topMetrics.map((m) => (
          <div
            key={m.label}
            className="card bg-base-200 border border-base-300/60"
          >
            <div className="card-body py-4 px-4">
              <p className="text-xs uppercase tracking-wide text-base-content/60">
                {m.label}
              </p>
              <p className="text-3xl font-semibold mt-2">{m.value}</p>
              {m.deltaText && (
                <p className={`text-xs mt-1 ${m.deltaColor}`}>{m.deltaText}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom section: Security status + Trends */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Security Status card */}
        <div className="card bg-base-200 border border-base-300/60">
          <div className="card-body">
            <h2 className="card-title">Security Status</h2>
            <div className="flex items-center justify-center py-8">
              {/* daisyUI radial-progress */}
              <div
                className="radial-progress text-warning"
                style={{
                  "--value": 75,
                  "--size": "9rem",
                  "--thickness": "10px",
                }}
                role="progressbar"
              >
                <span className="text-3xl font-bold text-base-content">
                  75
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trends chart card */}
        <div className="card bg-base-200 border border-base-300/60">
          <div className="card-body">
            <h2 className="card-title">
              Verification &amp; Vulnerability Trends
            </h2>
            <div className="mt-4 h-64 rounded-xl bg-base-300 border border-base-300/80 flex items-center justify-center">
              {/* Placeholder – replace with real chart component later */}
              <span className="text-sm text-base-content/60">
                Chart goes here
              </span>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default DashboardPage;
