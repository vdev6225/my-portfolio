const Button = ({ text, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="mt-2 w-full rounded-lg bg-[#18f2e5] py-2 text-sm tracking-widest text-slate-900 uppercase transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(24,242,229,0.4)] disabled:cursor-not-allowed disabled:opacity-50 md:text-base cursor-pointer">
      {text}
    </button>
  )
}

export default Button
