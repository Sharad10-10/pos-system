import AddPizzaForm from '@/components/AddPizzaForm'
import MenuTabs from '@/components/MenuTabs'
import Image from 'next/image'
import React from 'react'

const MenuManagement = async() => {

 

    const fetchPizzaData = async()=>{
        try {
            const response = await fetch('http://localhost:3000/api/pizza')
            return response.json()
        } catch (error) {
            console.log(error);
        }
    }

    const result = await fetchPizzaData()
    console.log(result);


    const fetchSidesData = async()=> {
       try {
             const response = await fetch('http://localhost:3000/api/sides')
             return await response?.json()
       } catch (error) {
            console.log(error);
       }
    }

    const sidesResult = await fetchSidesData()
    console.log("Sides result:", sidesResult);


     const fetchDrinksData = async()=> {
       try {
             const response = await fetch('http://localhost:3000/api/drinks')
             return await response?.json()
       } catch (error) {
            console.log(error);
       }
    }

    const drinksResult = await fetchDrinksData()
    console.log("Sides result:", drinksResult);


    
    


  return (
    <div className='pt-30 pl-60 w-378 pb-20'>
        <MenuTabs result = {result?.data} sidesResult= {sidesResult} drinksResult={drinksResult}/>
       
    </div>
  )
}

export default MenuManagement