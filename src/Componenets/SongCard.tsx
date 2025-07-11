import React, { useContext } from 'react';
import { Song } from '../Context/AppContext';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

interface SongProps {
    song: Song;
}

const SongCard: React.FC<SongProps> = ({ song }) => {

    const { setCurrentSong } = useContext(AppContext);
    const navigate = useNavigate();

    const handleClick = () => {
        setCurrentSong(song);
        navigate('/player');
    };

    return (
        <div
            onClick={handleClick}
            className="max-w-xs border border-gray-400 rounded-lg p-4 mb-6 cursor-pointer hover:shadow-lg transition-shadow"
        >
            <img
                src={song.album.cover_medium}
                alt={song.title}
                className="w-32 h-32 object-cover rounded mb-4 mx-auto"
            />

            <div className="text-left space-y-2 text-white">
                <div>
                    <span className="font-semibold text-gray-300 mr-1">Song:</span>
                    <span className="font-medium">{song.title}</span>
                </div>

                <div>
                    <span className="font-semibold text-gray-300 mr-1">Artist:</span>
                    <span className="font-medium">{song.artist.name}</span>
                </div>

                <div>
                    <span className="font-semibold text-gray-300 mr-1">Album:</span>
                    <span className="font-medium">{song.album.title}</span>
                </div>
            </div>
        </div>
    );
};

export default SongCard;
