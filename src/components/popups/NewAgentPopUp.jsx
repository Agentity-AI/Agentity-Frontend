function NewAgentPopUp({ onClose }) {
  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">Register New Agent</h2>
      <div>
       <div className="form-control">
        <label className="label">
          <span className="label-text text-sm">Name</span>
        </label>
        <input
          type="text"
          className="input bg-[#140758]/60 input-bordered w-full :focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Agent Name"
        />
      </div>


      <div className="form-control mt-2">
        <label className="label">
          <span className="label-text text-sm">Description</span>
        </label>
       
        <textarea
          className="textarea bg-[#140758]/60 textarea-bordered w-full mt-2 :focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Detailed description of the agent's purpose and capabilities"
        ></textarea>
      </div>

      <div className="form-control mt-2">
        <label className="label">
          <span className="label-text text-sm">Agent Type</span>
        </label>
        <select className="select mt-2 bg-[#140758]/80 select-bordered w-full :focus:ring-2 focus:ring-primary focus:outline-none">
          <option disabled selected>
            Select agent type
          </option>
          <option>Trading Bot</option>
          <option>Defi Agent</option>
          <option>NFT Agent</option>
          <option>Government Agent</option>
          <option>Analytics Agent</option>
          <option>Other</option>
        </select>
      </div>
       <div className="form-control mt-2">
        <label className="label">
          <span className="label-text text-sm">Wallet Address</span>
        </label>
        <input
          type="text"
          className="input bg-[#140758]/60 mt-2 input-bordered w-full :focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Wallet Address (e.g. 0x1234...abcd)"
        />
      </div>
        <div className="form-control mt-2">
        <label className="label">
          <span className="label-text text-sm">API Endpoint</span>
        </label>
        <input
          type="text"
          className="input bg-[#140758]/60 mt-2 input-bordered w-full :focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="API Endpoint (e.g. https://api.example.com/agent)"
        />
      </div>

      <div className="flex mt-2 gap-2 pt-2 w-full">
        <div className="form-control">
        <label className="label">
          <span className="label-text text-sm">Metadata (JSON)</span>
        </label>
       
        <textarea
        rows={3}
        cols={30}
          className="textarea bg-[#140758]/60 textarea-bordered w-full mt-2 :focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Metadata in JSON format (e.g. {'key': 'value'})"
        ></textarea>
      </div>
      </div>
        <button
          type="button"
          className="btn btn-ghost btn-sm bg-white rounded-lg px-4 py-2 ml-2 text-base-content/80 hover:bg-white/20"
          onClick={onClose}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary rounded-lg px-4 py-2 ml-3 text-white bg-[#034eef] btn-sm hover:bg-[#0000FF]/80">
          Register Agent
        </button>
      </div>
    </form>
  );
}

export default NewAgentPopUp;
