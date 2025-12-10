import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div className='flex justify-center'>
            <div className=''>
                {
                    data.map((singleData) => <div className='bg-black rounded-2xl my-10 pb-5' key={singleData._id}>
                        <div className='flex p-3 items-center gap-2 mb-3'>
                            <img className='rounded-full w-10' src={singleData.photoURL}/>
                            <p className='font-bold'>{singleData.name}</p>
                        </div>
                        <p className='mx-2 font-semibold'>{singleData.caption}</p>
                        <img className='h-130' src={singleData.photoURL} />

                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;