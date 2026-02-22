import React from 'react'
import AppLayout from '../layouts/AppLayouts'

function SimulationPage() {
  return (
   <AppLayout>
    <div className="mb-6 p-4 rounded-lg">
        <h1 className="text-3xl font-bold mb-1">Simulation Sandbox</h1>
        <p className="text-sm text-base-content/60 text-white">
         Test AI agents in containerized scenarios
        </p>
      </div>

   </AppLayout>
  )
}

export default SimulationPage