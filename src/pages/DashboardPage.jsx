import { ChartArea } from "lucide-react";
import Card from "../components/Card/Card";
import SecurityCheck from "../components/security-check/SecurityCheck";
import topMetrics from "../constants/topMetrix";
import AppLayout from "../layouts/AppLayouts";
import TwoLineChart from "../components/chart/TwoLineChart";
import recentActivities from "../constants/recentActivities";
import Activity from "../components/activity/Activity";




function DashboardPage() {
 

  return (
    <AppLayout>
      {/* Header */}
      <div id="dashboard" className="mb-6 p-4 rounded-lg">
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

   
      <div className="grid gap-8 grid-cols-3 ">
        {/* Security Status card */}
        
        <SecurityCheck />
        {/* Trends chart card */}
        <div className="card bg-base-200 border border-[#514c4c] col-span-2">
          <div className="card-body">
            <div className="flex ml-4 mt-4">
             <ChartArea className="w-5 h-5 mr-2 text-[#0d59a5]" />
            <h2 className="card-title">
             Verification &amp; Vulnerability Trends
            </h2></div>
            <div className="mt-4 h-64 rounded-xl w-full bg-base-300 border-none flex items-center justify-center">

              <span className="ml-5 text-sm text-base-content/60 w-full h-full flex items-center justify-center">
                <TwoLineChart/>
              </span>
            </div>
          </div>
        </div>
        <div className="border-[#514c4c]  bg-[#0B1020] col-span-3 rounded-lg border">
            <div className="flex my-2 mx-8">
                <ChartArea className=" mr-2 text-[#0d59a5]" size={30}/>
                <h1 className="mt-2">Recent Activity</h1>
            </div>
            <div className="h-64 overflow-y-auto grid gap-2">
              {recentActivities.map((activity) => (
                <Activity key={activity.id} {...activity} />
              ))}
              </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default DashboardPage;
