import PersonItemInCast from "./PersonItemInCast";

export default function castItems({ team, type }) {
  const peopleItems = team.map((person) => (
    <div key={person.credit_id} className='pb-5'>
      <PersonItemInCast
        id={person.id}
        name={person.name}
        profile={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w300${person.profile_path}`
            : "/blankProfilePhoto.png"
        }
        description={type === "cast" ? person.character : person.job}
      />
    </div>
  ));

  return <>{peopleItems}</>;
}
