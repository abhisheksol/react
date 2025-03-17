



export default function Child_props({ name,children  }) {
    return (
        <div className="p-4 bg-gray-800 text-white rounded-lg">
            {name}
            {children}
        </div>
    )
}