import React, { useState } from 'react';

const VideoProduct = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = () => {
        if (newComment) {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    return (
        <div className="flex justify-center items-center border border-gray-800 rounded-lg p-4">
            {/* Video */}
            <div className="w-2/5">
                <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/akFWR-De4Zk?si=866g7sa9QH79f7pY&amp;controls=0&amp;start=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Panel de Comentarios */}
            <div className="w-2/5 bg-gradient-to-r from-white to-blue-400 rounded-lg shadow-lg p-4 transition-transform duration-500 transform hover:translate-y-[-10px]">
                <h2 className="text-xl font-bold text-blue-900 mb-2">Comentarios</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Escribe un comentario"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded-md"
                    />
                </div>
                <button
                    onClick={handleCommentSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Enviar Comentario
                </button>
                <div className="mt-4 max-h-64 overflow-y-auto">
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={index} className="text-blue-900 mb-2">
                                {comment}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default VideoProduct;
