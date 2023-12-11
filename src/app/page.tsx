import Link from "next/link";

const getData = async () => {

  const response = await fetch("https://swapi.dev/api/people");
  const body = await response.json();
  return body.results;
}

export default async function Home() {
  
  const data = await getData();
  return (
    <>
      <h1>Star Wars list</h1>
      <ul>
        { data.map((d: any, index: number) => {
          const id = d.url.replace("https://swapi.dev/api/people/", "").replace("/", "")

          return <li key={index}><Link href={"/person/" + id}>{ d.name }</Link></li>
        })}
      </ul>
    </>
  )
}
