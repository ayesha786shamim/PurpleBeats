import React, { createContext, useState, ReactNode } from 'react';

export interface Song {
    id: number;
    title: string;
    preview: string;
    artist: {
        name: string;
        picture_medium: string;
    };
    album: {
        title: string;
        cover_medium: string;
    };
}

interface AppContextType {// Define the shape of the context
    songs: Song[];
    setSongs: (songs: Song[]) => void;
    currentSong: Song | null;
    setCurrentSong: (song: Song | null) => void;
}

// Create the context with default value 
export const AppContext = createContext<AppContextType>({} as AppContextType);


// Provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [songs, setSongs] = useState<Song[]>([]);//array to hold songs

    const [currentSong, setCurrentSong] = useState<Song | null>(null);// current song can be null initially



    return (
        
        <AppContext.Provider value={{ songs, setSongs, currentSong, setCurrentSong }}>
            {children}
        </AppContext.Provider>
    );
};
