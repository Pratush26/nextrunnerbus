import Notice from "@/components/Notice";

export default function NoticePage() {
    const notices = [
        {
            title: "Notice 1: Bus Schedule Update",
            pdfLink: "/notices/schedule-update.pdf",
            date: "2025-04-05",
        },
        {
            title: "Notice 2: Holiday Announcement",
            pdfLink: "/notices/holiday-announcement.pdf",
            date: "2025-04-05",
        },
        {
            title: "Notice 3: New Route Information",
            pdfLink: "/notices/new-route-info.pdf",
            date: "2025-04-05",
        },
    ]
    return (
        <main className="flex flex-col justify-center items-center min-h-[80vh]">
            <h1 className="text-4xl p-2 font-bold text-center">Notices</h1>
            <div className="flex justify-center items-center flex-col gap-2 w-4/5 rounded-lg mx-auto bg-gray-900 p-4">
            {notices.map((notice, index) => (
          <Notice key={index} n={notice} />
        ))}
            </div>
        </main>
    )
}
export const metadata = {
    title: "General Notice",
    description: "It is NextRunner bus companies websites general notice page.",
  }