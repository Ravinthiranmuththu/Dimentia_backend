const FormField = ({ label, type = "text", value, onChange, placeholder, error }) => (
  <div className="relative mb-6">
    <label className="flex items-center mb-2 text-gray-1200 text-sm font-medium text-2xl">{label}</label>
    <input 
      type={type} 
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`block w-full h-11 px-5 py-2.5 text-base font-normal text-gray-900 bg-transparent 
        border ${error ? 'border-red-500' : 'border-custom-blue'} 
        rounded-full placeholder-gray-600 focus:outline-none`}
      required
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default FormField;
