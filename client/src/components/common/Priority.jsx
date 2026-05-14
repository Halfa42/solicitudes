const styles = {
    low:    'bg-green-100 text-green-800',
    normal: 'bg-blue-100 text-blue-800',
    high:   'bg-red-100 text-red-800',
}

export default function Priority({ level }) {
    return (
        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${styles[level] ?? 'bg-gray-100 text-gray-600'}`}>
            {level ? level.charAt(0).toUpperCase() + level.slice(1) : 'Desconocida'}
        </span>
    )
}