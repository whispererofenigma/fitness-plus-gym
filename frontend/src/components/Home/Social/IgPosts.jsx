// src/components/IgPosts.jsx
import React, { useEffect, useState } from 'react';
import Logo from '../../../images/logo.jpg';

const IgPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch posts from your backend API
        const fetchPosts = async () => {
            try {

                
                const headers = {
                    'Content-Type': 'application/json',                     
                };

                const response = await fetch('https://fitness-plus-gym-p212.vercel.app/api/instagram/posts', {
                    method: 'GET',
                    headers,
                });
                const data = await response.json();

                if (data.success) {
                    setPosts(data.data);
                } else {
                    setError('Failed to load posts');
                }
            } catch (err) {
                setError(err.message || 'An unexpected error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div className="text-center py-4">Loading...</div>;
    if (error) return <div className="text-center py-4 text-red-600">Error: {error}</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
                <div key={post.id} className="rounded-xl shadow p-6 card-spotlight">
                    <div className='flex gap-2 items-center mb-4 z-10 relative'>
                        <img src={Logo} alt="fitnesplusgym" className='rounded-full w-[10%]' />
                        <a href="https://instagram.com/fitnesplusgym" target='_blank'>@fitnesplusgym</a>
                    </div>
                    {post.media_type === 'VIDEO' ? (
                        <video controls className="w-full aspect-square object-cover object-top rounded-lg">
                            <source src={post.media_url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : post.media_type === 'CAROUSEL_ALBUM' ? (
                        <div className="relative">
                            <img
                                src={post.media_url}
                                alt={post.caption || 'Instagram Post'}
                                className="w-full h-64 object-cover rounded"
                            />
                            <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-xl">
                                Carousel
                            </span>
                        </div>
                    ) : (
                        <img
                            src={post.media_url}
                            alt={post.caption || 'Instagram Post'}
                            className="w-full aspect-square object-cover rounded-xl object-top"
                        />
                    )}
                    <div className="mt-2">
                        <pre style={{ fontFamily: 'Teko' }} className="text-white text-xs teko line-clamp-3 ">{post.caption}</pre>
                    </div>
                    <div>
                        <a
                            href={post.permalink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline mt-2 block "
                        >
                            View on Instagram
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IgPosts;
