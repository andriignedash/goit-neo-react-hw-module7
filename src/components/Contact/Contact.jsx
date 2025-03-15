import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={styles.contact}>
      <p>👤 {name}</p>
      <p>📞 {number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
