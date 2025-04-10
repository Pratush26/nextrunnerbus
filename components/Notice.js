export default function Notice({n}) {
    return (
        <div className="w-full h-full flex justify-between items-center bg-gray-300 text-gray-900 py-2 px-4 rounded-lg">
            <a href={n.pdfLink} className="font-semibold text-sm">{n.title}</a>
            <span className="text-sm"><p>Date:</p>{n.date}</span>
        </div>
    )
}