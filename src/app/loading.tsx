export default async function Loading(){
    return (
       <>
        <h1>Star Wars list</h1>
        <ul>
            {
                Array(10).fill("").map((_, index) => <li key={index}></li>)
            }

        </ul>
       </>

    )
}