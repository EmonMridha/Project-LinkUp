import React from 'react';

const AddPost = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries()); // Converting all the form data into an object
        console.log(data);
    }


    return (
        <form onSubmit={handleFormSubmit} className="max-w-md mx-auto p-6 bg-gray-50 border rounded-xl shadow">

            <h2 className="text-2xl text-black font-semibold mb-4">Add Photo</h2>

            <div className="mb-4">
                <label className="block text-gray-900 font-medium mb-1">Photo URL</label>
                <input
                    type="url"
                    name="photoURL"
                    placeholder="Enter photo URL"
                    className="w-full border bg-gray-600 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Caption</label>
                <input
                    type="text"
                    name="caption"
                    placeholder="Enter caption"
                    className="w-full bg-gray-600 border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Post
            </button>
        </form>

    );
};

export default AddPost;