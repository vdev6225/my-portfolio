const Input = ({ label, id, ...props }) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="mb-2 block font-mono text-sm text-slate-400">
        {label} {props.required && <span className="text-[#18f2e5]">*</span>}
      </label>
      <input
        id={id}
        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-300 transition-all outline-none placeholder:text-slate-600 focus:border-[#18f2e5] focus:ring-1 focus:ring-[#18f2e5]"
        {...props}
      />
    </div>
  )
}

export default Input
