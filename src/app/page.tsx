import { Profile } from "./components/Profile";

export default function Home() {

  const profiles = [
    {
      name:"Rafael Costa Palma",
      age:35,
      email: "rafaelcostapalma@protonmail.com",
      position: "Front End Developer",
      githubLogin: "rafaelpalma88"
    },
    {
      name:"José da Silva Sauro",
      age: 40,
      email: "josedasilva@gmail.com"
    },
    {
      name:"Douglas da Silva Sauro",
      age: 20,
      email: "doug@ibest.com.br"
    }
  ]

  return (
    <main style={{ paddingLeft: 20 }}>

      <h1 style={{ marginBottom: 20 }}>React Basics</h1>

      {profiles.map(profile => (
        <Profile 
          key={profile.email}
          name={profile.name}
          age={profile.age}
          email={profile.email}
          githubLogin={profile.githubLogin}
          position={profile.position}
        />
      ))}     
    </main>
  );
}
