import React from "react";

interface PopupProps {
    message: string;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
    const styles: { [key: string]: React.CSSProperties } = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        popup: {
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
        },
        button: {
            marginTop: "10px",
        },
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.popup}>
                <p>{message}</p>
                <button onClick={onClose} style={styles.button}>
                    Fermer
                </button>
            </div>
        </div>
    );
};

export default Popup;
