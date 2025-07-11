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

// fetch songs by artist ID
export const fetchSongsByArtistId = async (artistId: number): Promise<Song[]> => {
  const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistId}/top?limit=20`;

  try {
    console.log(`Fetching top tracks for artist ID: ${artistId}`);
    const res = await fetch(url);

    console.log(`Response status: ${res.status}`);

    if (!res.ok) {
      throw new Error(`Deezer API error: ${res.status}`);
    }

    const data = await res.json();
    console.log(`Received ${data.data.length} songs`);

    return data.data as Song[];
  } catch (error) {
    console.error('Failed to fetch songs by artist ID:', error);
    return [];
  }
};
