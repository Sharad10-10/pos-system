'use client'
import { ChartColumnDecreasing, DollarSignIcon, LayoutDashboardIcon, PizzaIcon, Users, Warehouse } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Sidebar = () => {
    const pathName = usePathname().slice(1)
    const session = useSession()
    const sideBarItems = [['Dashboard',<LayoutDashboardIcon />, './dashboard'], ['Sales', <DollarSignIcon />, './sales'], ['Reports', <ChartColumnDecreasing />, './reports'], ['Employees',<Users />, './employees'], ['Inventory', <Warehouse />, './inventory'], ['Manage Menu', <PizzaIcon />, './menu'] ]
    const user = session?.data?.user?.name
    return (
    <div className='bg-[#1A252F] fixed h-screen z-10 w-[14%]'>
        <div className='bg-#1A252F p-6 text-center'>
            <h1 className='text-white text-xl font-medium'>🍕 Pizza POS</h1>
        </div>

        <div className='bg-[#2C3E50] text-white w-full pt-10 pb-20 overflow-hidden'>
          <div>
                {sideBarItems.map((sideBarItem, index)=> {
                    return (
                      <Link key={index} href={sideBarItem[2]}>
                          <div  className={`w-full flex items-center pl-10 py-6 gap-2 cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-[#34495E] ${pathName == sideBarItem[0].toLowerCase() ? 'bg-[#34495E]' : ''}` } >
                            <span>{sideBarItem[1]}</span>
                            <span>{sideBarItem[0]}</span>
                            
                        </div>
                      </Link>
                    )
                })}
          </div>
        </div>

        <div className='text-white px-10 pt-6'>
            <h1 className='text-lg font-medium'>{user}</h1>
            <p className='text-white/70 text-sm'>admin</p>
        </div>

    </div>
  )
}

export default Sidebar