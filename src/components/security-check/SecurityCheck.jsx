import { Shield } from 'lucide-react'
import React from 'react'

function SecurityCheck() {
  return (
   <div className="bg-base-200 border border-base-300/60 rounded-lg border-none  bg-[#0B1020]">
          <div className=" mx-8 my-4">
            <div className='flex gap gap-2 '>
                 <Shield className="mr-2 inline-block" size={24} />
                 <h2 className="card-title">Security Status</h2>
           
            </div>
            <div className="flex items-center justify-center py-8">
              
                <span className="text-3xl font-bold text-base-content">
                  75
                </span>
              </div>
            </div>
          </div>
        
  )
}

export default SecurityCheck