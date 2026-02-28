import MenuTabs from '@/components/MenuTabs'
import React from 'react'

const MenuManagement = async() => {


    const fetchPizzaData = async()=>{
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pizza`)
            return response.json()
        } catch (error) {
            console.log(error);
        }
    }

    const result = await fetchPizzaData()
    console.log(result);


    const fetchSidesData = async()=> {
       try {
             const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sides`)
             return await response?.json()
       } catch (error) {
            console.log(error);
       }
    }

    const sidesResult = await fetchSidesData()
    console.log("Sides result:", sidesResult);


     const fetchDrinksData = async()=> {
       try {
             const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/drinks`)
             return await response?.json()
       } catch (error) {
            console.log(error);
       }
    }

    const drinksResult = await fetchDrinksData()

  return (
    <div className='pt-30 pl-60 w-378 pb-20'>
        <MenuTabs result = {result?.data} sidesResult= {sidesResult} drinksResult={drinksResult}/>
       
    </div>
  )
}

export default MenuManagement