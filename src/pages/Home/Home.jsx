import { useLoaderData } from 'react-router';
import { FaComment, FaShare, FaThumbsUp } from "react-icons/fa";
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { user } = useAuth();
    const data = useLoaderData();
    const [posts, setPosts] = useState(data);


    const handleLike = async (id, email) => {
        try {
            const res = await axios.patch(`http://localhost:5000/posts/like/${id}`, { email })

            const updated = posts.map(post => post._id === id ? { ...post, likes: res.data.likes } : post); // Spreading all properties of post and overwrites the likes key
            setPosts(updated);
        }
        catch (error) {
            Swal.fire('Could not update like in UI')
        }
    }
    return (
        <div className='flex justify-center'>
            <div className='my-6'>
                <input type="text " placeholder='What is on you mind?' className='h-15 rounded-4xl w-100 bg-blend-overlay border p-5 mt-20' />
                {data.length}
                {
                    posts.map((singleData) => <div className='bg-black rounded-2xl my-10 pb-5' key={singleData._id}>
                        <div className='flex p-3 items-center gap-2 mb-3'>
                            <img className='rounded-full w-9' src={singleData.photoURL} />
                            <p className='font-bold'>{singleData.name}</p>
                        </div>
                        <p className='mx-2 font-semibold'>{singleData.caption}</p>
                        <img className='h-165' src={singleData.photoURL} />
                        <div className='flex justify-between p-3'>
                            <p>{singleData.likes}</p>
                            <div className='flex gap-2'>
                                <p className=''>commentsCount</p>
                                <p>shareCount</p>
                            </div>
                        </div>
                        <div className=' flex justify-around my-2'>
                            <button onClick={() => handleLike(singleData._id, user?.email)} className={`btn ${singleData.likedBy?.includes(user?.email) ? 'text-gray-700' : 'bg-blue-500'}`}><FaThumbsUp></FaThumbsUp>{singleData.likedBy?.includes(user?.email) ? 'Liked' : 'Like'}</button>
                            <button className='btn items-center'><FaComment></FaComment>Comment</button>
                            <button className='btn items-center'><FaShare></FaShare>Share</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;