import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-[15%_85%]">
      
      <Sidebar />

      <div>
        <Header />
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}