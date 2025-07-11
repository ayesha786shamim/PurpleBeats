import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { fetchSongsByArtistId } from '../Api/deezer';

const artists = [
    { id: 265914, name: "Jay Rock" },
    { id: 1650547, name: "Crystal Rock" },
    { id: 10387696, name: "Edicion Especial" },
    { id: 1147, name: "Justin Timberlake" },
    { id: 384236, name: "Ed Sheeran" },
    { id: 2792, name: "Enrique Iglesias" },
    { id: 75798, name: "Adele" },
    { id: 122, name: "Shakira" },
    { id: 416239, name: "Imagine Dragons" },
    { id: 9635624, name: "Billie Eilish" },
    { id: 246791, name: "Drake" },
    { id: 163, name: "Selena Gomez" },
    { id: 12246, name: "Taylor Swift" },
    { id: 4050205, name: "The Weeknd" },
];

const ArtistSelection: React.FC = () => {

    const [selectedId, setSelectedId] = useState<number | "">("");
    const [error, setError] = useState<string | null>(null);
    const { setSongs } = useContext(AppContext);

    const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {

        const value = e.target.value;
        const id = value ? Number(value) : "";
        setSelectedId(id);

        if (id) {
            const results = await fetchSongsByArtistId(id); 
            setSongs(results);
        } else {
            setSongs([]);
            setError("No songs Found of that particular Artist ");
        }
    };

    return (
        <div className="mb-6 max-w-sm mx-auto">
            <label className="block mb-2 text-white font-semibold">
                Artist:
            </label>

            <select
                id="artist-select"
                value={selectedId}
                onChange={handleChange}
                
                className="w-full p-2 rounded-md border border-gray-600 bg-[#280137] text-white focus:outline-none focus:ring-2 focus:ring-purple-500" >

                <option>Choose an artist</option>

                {artists.map((artist) => (

                    <option key={artist.id} value={artist.id}>
                        {artist.name}
                    </option>

                ))}

            </select>
        </div>
    );
};

export default ArtistSelection;
