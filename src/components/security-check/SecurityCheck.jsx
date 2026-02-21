import { Shield, TestTube } from 'lucide-react'
import React from 'react'

function SecurityCheck() {
  return (
   <div className="col-span-1 border rounded-lg border-[#514c4c]  bg-[#0B1020]">
          <div className=" mx-8 my-4">
            <div className='flex gap gap-2 '>
                 <Shield className="mr-2 inline-block text-[#0d59a5]" size={24} />
                 <h2 className="card-title">Security Status</h2>
           
            </div>
            <div className="mx-auto py-16 px-16 bg-[#483e1c] w-40 rounded-[50%] mt-4 border border-[#eec612]">
              
                <span className="text-3xl font-bold text-base-content ">
                  75
                </span>
               
              </div>
                <p className="text-center text-sm text-base-content/60 mt-4">Overall Trust Score</p>
                <button className="bg-[#483e1c] px-4 py-2 text-[#eec612] rounded-xl btn btn-sm mt-6 w-40 border-[#eec612]"><TestTube className="inline-block" size={16} /> <span>Medium Risk</span></button>
            </div>
            <hr className="border-[#514c4c] my-4" />
            <div className='mx-8'>
                <div className="flex items-center gap-26 mb-2">
                    <span className="text-sm text-base-content/60">Verified Agents</span>
                    <span className="text-xs badge badge-ghost text-white">3/4</span>
                    </div>
                    <div className="flex items-center gap-31 mb-2">
                    <span className="text-sm text-base-content/60">Active Alerts</span>
                    <span className="text-xs badge badge-ghost text-[#f7b80a]">5</span>
                    </div>
                    <div className="flex items-center gap-28 mb-2">
                    <span className="text-sm text-base-content/60">System Health</span>
                    <span className="text-xs badge badge-ghost text-[#10c700]">98.5%</span>
                    </div>
            </div>
          </div>
        
  )
}

export default SecurityCheck