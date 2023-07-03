export const Button = ({
    text,
    className = '',
    type = 'button',
    iconLeft,
    iconRight,
    onClick,
    disabled = false,
    loading = false,
    color = 'primary',
    size = 'base'
}) => {

    const colors = {
        'primary': 'text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300',
        'danger': 'text-white bg-danger-500 hover:bg-danger-600 focus:ring-danger-500',
        'warning': 'text-dark bg-warning-500 hover:bg-warning-600 focus:ring-warning-500',
        'transparent': 'text-white bg-transparent',
    }

    const sizes = {
        'small': 'px-4 py-2 text-sm',
        'base': 'px-5 py-2.5',
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`transition-all items-center flex justify-center gap-2 text-white ${colors[color]} focus:ring-1 rounded-lg ${sizes[size]} ${className}`}>
            {iconLeft && <span className="pointer-events-none">
                {iconLeft}
            </span>}
            {text}
            {iconRight && <span className="pointer-events-none">
                {iconRight}
            </span>}
        </button>
    );
}
