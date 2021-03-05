import styles from '../styles/components/Profile.module.css';

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/jaimelay.png" alt="Jaime Lay" />
            <div>
                <strong>Jaime Lay</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}