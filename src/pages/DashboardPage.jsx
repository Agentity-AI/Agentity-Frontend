import Card from "../components/Card/Card";
import SecurityCheck from "../components/security-check/SecurityCheck";
import topMetrics from "../constants/topMetrix";
import AppLayout from "../layouts/AppLayouts";
;



function DashboardPage() {
  return (
    <AppLayout>
      {/* Header */}
      <div className="mb-6 p-4 rounded-lg">
        <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
        <p className="text-sm text-base-content/60 text-white">
          System overview and activity monitoring
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5 mb-6">
        {topMetrics.map((m) => (
          <Card label={m.label} value={m.value} deltaText={m.deltaText}  />
        ))}
      </div>

   
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Security Status card */}
        
        <SecurityCheck />
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
