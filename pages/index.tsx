
export default function Home() {

  const message: string = "Hello, " 

  let person: Person = {
    name: "Max"
  }

  return (
    <div>
      {message}
      {person.name}
    </div>
  )
}
