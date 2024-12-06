import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import Popup from "./Popup";

const QRCodeGenerator: React.FC = () => {
    const [pokemon, setPokemon] = useState<string>("Pikachu");
    const [qrValue, setQrValue] = useState<string>("");
    const [messages, setMessages] = useState<Record<string, string>>({});
    const [showPopup, setShowPopup] = useState<boolean>(false);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setMessages(data));
    }, []);

    const handleGenerate = () => {
        const message = `Message lié à ${pokemon}`;
        setQrValue(message);
        setShowPopup(true);
    };

    return (
        <div>
            <h1>Générateur de QR Code Pokémon</h1>
            <select onChange={(e) => setPokemon(e.target.value)} value={pokemon}>
                {Object.keys(messages).map((key) => (
                    <option key={key} value={key}>
                        {key}
                    </option>
                ))}
            </select>
            <button onClick={handleGenerate}>Générer</button>
            {qrValue && (
                <div style={{ marginTop: "20px" }}>
                    <QRCode value={qrValue} />
                </div>
            )}
            {showPopup && (
                <Popup
                    message={messages[pokemon]}
                    onClose={() => setShowPopup(false)}
                />
            )}
        </div>
    );
};

export default QRCodeGenerator;
