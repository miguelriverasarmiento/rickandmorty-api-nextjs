import { useState } from 'react'
import { useRouter } from "next/router";

const FindCharacter: React.FC = () => {

  const [nameChar, setNameChar] = useState<string>();
  const [nameFind, setNameFind] = useState<string>([]);
  const router = useRouter();

  async function fetchCharacter(nameChar: string | undefined) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nameChar}`);
    const data = await response.json();
    return data;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchInput = e.target.value;
    setNameChar(searchInput)
  }

  const handleSearch = () => {
    fetchCharacter(nameChar)
      .then(data => setNameFind(data.results))
      .catch((error: any) => console.log(error))
    }

  return (
    <div>
      <input
        type='text'
        onChange={handleChange}
        placeholder="Buscar..."
      />
      <button onClick={() => handleSearch()}>Buscar</button>
      <div>
        {nameFind.map((name: string) =>
          <li onClick={() => router.push(`/character/${name.id}`)} key={name.id}>{name.name}</li>
        )}
      </div>
     
    </div>
    )
}

export default FindCharacter

