import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import SongCard from '../Componenets/SongCard';
import ArtistSelection from '../Componenets/ArtistSelection';

const Home: React.FC = () => {
    const { songs } = useContext(AppContext); // Access songs from the context

    return (
        <div
            className="min-h-screen px-4 py-6 sm:px-6 text-white"
            style={{ backgroundColor: '#280137' }}
        >
            <div className="max-w-5xl mx-auto">

                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
                    🎵 Music Explorer 🎵
                </h1>

                <div className="mb-6">
                    <ArtistSelection />
                </div>

                {songs.length === 0 ? (
                    <p className="text-center text-gray-300 text-lg">No songs found.</p>
                ) : (
                    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                        {songs.map((song) => (
                            <SongCard key={song.id} song={song} />
                        ))}
                        
                    </div>
                )}

            </div>
        </div>
    );
};

export default Home;
