
import { useEffect, useState } from 'react';
import { MemeCard } from './MemeCard';
import Shimmer from './Shimmer';

const Body = () => {
    const [memes, setMemes] = useState([]);
    const [showShimmer, setShowShimmer] = useState(false);

    const fetchMemes = async () => {
        setShowShimmer(true);
        const data = await fetch("https://meme-api.com/gimme/20");
        const json = await data.json();

        setShowShimmer(false);
        setMemes((memes) => [...memes, ...json.memes]);
    };

    useEffect(() => {
        fetchMemes();
    }, []);
    return (
        <div className="flex flex-wrap">
        {memes.map((meme, i) => (
          <MemeCard key={i} data={meme} />
        ))}
        {showShimmer && <Shimmer />}
      </div>
    )
}

export default Body