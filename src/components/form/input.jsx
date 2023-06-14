export const Input = ({ type, id, name, value, color = 'primary', placeholder, onChange, onClick, className, autoComplete = 'on' }) => {

    const colors = {
        'primary': 'bg-white border-primary-400 text-primary focus:ring-1 focus:ring-primary-600 focus:border-primary-600 focus-visible:outline-none',
        'light': ' bg-gray-100 border-gray-300 text-gray-900 focus:ring-primary focus:border-primary focus-visible:outline-none',
    }

    return (
        <input
            className={`border text-sm ${colors[color]} rounded-lg block w-full p-2.5 ${className}`}
            autoComplete={autoComplete}
            id={id}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onClick={onClick}
        />
    )
}
