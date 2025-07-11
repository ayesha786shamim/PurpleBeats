import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const Player: React.FC = () => {
    const { currentSong } = useContext(AppContext);
    const navigate = useNavigate();

    if (!currentSong) {
        return (
            <div className="min-h-screen p-6 text-white" style={{ backgroundColor: '#280137' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-2xl font-bold mb-4">No song selected.</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="mt-4 px-6 py-2 bg-purple-700 hover:bg-purple-800 rounded text-white font-semibold transition"
                    >
                        ⬅ Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-6 text-white" style={{ backgroundColor: '#280137' }}>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center mb-8 drop-shadow-lg">
                    🎵 Now Playing 🎵
                </h1>

                <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-md max-w-xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">{currentSong.title}</h2>

                    <p className="mb-2">
                        <span className="font-semibold text-gray-300">Artist :</span> 
                        {currentSong.artist.name}
                    </p>

                    <p className="mb-4">
                        <span className="font-semibold text-gray-300">Album :</span> 
                        {currentSong.album.title}
                    </p>

                    <img
                        src={currentSong.album.cover_medium}
                        alt="Album cover"
                        className="w-48 h-48 object-cover rounded mb-6 mx-auto shadow"
                    />

                    <audio controls autoPlay src={currentSong.preview} className="w-full mb-6 rounded" />

                    <button
                        onClick={() => navigate('/')}
                        className="mt-4 px-6 py-2 bg-purple-700 hover:bg-purple-800 rounded text-white font-semibold transition"
                    >
                        ⬅ Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Player;
