import React from 'react';
import { useState } from 'react';
import General from './General';
import Business from './Business';
import Entertainment from './Entertainment';
import Health from './Health';
import Science from './Science';
import Sports from './Sports';
import Technology from './Technology';



const Home = () => {
    const categories = ['general','business', 'entertainment', 'health', 'science', 'sports', 'technology'];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);


    

    return (
            <div className="container px-5 py-10 mx-auto">
                <div className='mx-20 mb-10 flex flex-row flex-wrap justify-center items-center'>                    

                    {
                        categories.map((category)=>{
                            return <button key={category} className={`w-[150px] h-[auto] px-5 py-2 mx-3 my-3 ${selectedCategory === category ? 'bg-teal-700':'bg-teal-400'} text-white font-mono font-medium text-medium rounded-full hover:bg-teal-700`} onClick={()=>setSelectedCategory(category)}>{category}</button>
                        })
                    }
                </div>
                {
                    selectedCategory === 'general' && <General/>
                }

{
                    selectedCategory === 'business' && <Business/>
                }

{
                    selectedCategory === 'entertainment' && <Entertainment/>
                }

{
                    selectedCategory === 'health' && <Health/>
                }

{
                    selectedCategory === 'science' && <Science/>
                }

{
                    selectedCategory === 'sports' && <Sports/>
                }

{
                    selectedCategory === 'technology' && <Technology/>
                }

            </div>
    )
}

export default Home;