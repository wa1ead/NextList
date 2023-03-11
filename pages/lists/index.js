import styles from "../../styles/Lists.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { persons: data },
  };
};

const Persons = ({ persons }) => {
  return (
    <div>
      <h1>ALL PERSONS</h1>
      {persons.map((person) => (
        <div key={person.id}>
          <a className={styles.single}>
            <h3>{person.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};
export default Persons;
