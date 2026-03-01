import React from 'react'
import SignUp from '../signUp/SignUp';

function LandingTopbar() {

    return (
    <div className="flex items-center justify-between w-full border-[#514c4c] fixed
     top-2">
        {/* Left side (optional breadcrumb / page title placeholder) */}
        <div className="h-16 flex items-center px-4 gap-2 border-none ">
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
          <span className="text-xl text-primary-content">🛡️</span>
        </div>
        <span className="font-semibold text-lg">Agentity</span>
      </div>
        {/* Right side controls */}
        <div className="flex items-center gap-4 mr-6 ">
            <SignUp/>
        </div>
    </div>
  );
}

export default LandingTopbar