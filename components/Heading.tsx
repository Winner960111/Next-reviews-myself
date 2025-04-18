export default function Heading ({ children }: { children: String }) {
    return (
        <div className="text-5xl text-blue-500">
            {children}
        </div>
    )
}