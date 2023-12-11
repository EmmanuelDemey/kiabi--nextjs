
const getData = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const body = await response.json();
  return body.results;
}

export default async function Home() {
  
  const data = await getData();
  console.log(data)
  return (
    <>
      <h1>Star Wards list</h1>
      <ul>
        { data.map((d: any, index: number) => <li key={index}> { d.name } </li>)}
      </ul>
    </>
  )
}
