import Link from "next/link";

const getData = async (id: string) => {
  const response = await fetch("https://swapi.dev/api/people/" + id);
  const body = await response.json();
  return body;
}

type PersonParams = {
    id: string;
}

export default async function Person({ params }: { params: PersonParams}) {
  
  const data = await getData(params.id);
  return (
    <dl>
     <dt>Name</dt>
     <dd>{data.name} </dd>
     <dt>Couleur des cheveux </dt>
     <dd>{ data.hair_color} </dd>
    </dl>
  )
}
