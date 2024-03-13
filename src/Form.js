import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Form(props) {
    const [data, setData] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const sendData = async () => {

        if (data.trim() !== "") {

            try {
                const response = await axios.post("http://127.0.0.1:8000/problem-1/", {
                data: data
                });
                // console.log("Response:", response.data);
                document.getElementById("output-1").textContent = response.data.options_number;
                document.getElementById("input-1").value = "";
                props.setData(response.data);
                setData("");
            } catch (error) {
                console.error("Error:", error);
            }
        }else{
            setShowAlert(true);
        }
    };

    const handleChange = (event) => {
        setData(event.target.value);
        setShowAlert(false);
      };

    useEffect(() => {
        props.setData(props.data);
    },[props])

    return (
        <>
        <form id="myForm">
            <textarea id="input-1" name="data" placeholder="Enter data..." cols="30" rows="10"  onChange={handleChange}></textarea>
            <button type="button" id="sendButton" onClick={sendData}>Send Data</button>
            {showAlert && <div style={{ color: "red" }}>Required field</div>}
        </form>
        <pre id="output-1"></pre>
        </>
    );
}