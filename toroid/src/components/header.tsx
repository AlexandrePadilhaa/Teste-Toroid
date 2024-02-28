import React from "react";
import Link from 'next/link';

const Header: React.FC = () => {
    return <header >
        <div className="h-14 bg-gray-500 flex justify-center content-center gap-20">
            <Link href="/" className="text-3xl font-bold" >Apresentação</Link>
            <Link href="/apiSpotify"className="text-3xl font-bold">Api Spotify</Link>
            <Link href="/mediaAritimetica" className="text-3xl font-bold">Média Aritmética</Link>
        </div>
    </header>;
  };
  
  export default Header;