
const getData = async () => {
  const response = await fetch("http://localhost:3000/demo.json");
  const body = await response.json();
  return body;
}

export default async function Home() {
  
  const data = await getData();
  console.log(data)
  return (
    <h1>Demo Nextjs { data.name } </h1>
  )
}
