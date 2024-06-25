import Image from "next/image";

interface IProps {
  name: string;
  age: number;
  email: string;
  position?: string;
  githubLogin?: string;
}

export function Profile({ name, age, email, position = "Developer", githubLogin }: IProps) { 
  return(
    <div style={{ marginLeft: 20, marginTop: 20}}>
      {githubLogin && (
        <Image
          src={`https://github.com/${githubLogin}.png`}
          width={500}
          height={500}
          alt={`Picture of ${name}`}
        />
      )}
      <h2>{name}</h2>
      <p>Age: {age} years old</p>
      <p>E-mail: {email}</p>
      <p>Position: {position}</p>
    </div>
  )
}

