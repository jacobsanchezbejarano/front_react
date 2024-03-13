import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Form(props) {
    const [data, setData] = useState("");

    const sendData = async () => {

        try {
            const response = await axios.post("http://127.0.0.1:8000/problem-1/", {
              data: data
            });
            // console.log("Response:", response.data);
            document.getElementById("output-1").textContent = response.data.options_number;
            setData(response.data)
          } catch (error) {
            console.error("Error:", error);
          }
    };

    const handleChange = (event) => {
        setData(event.target.value);
      };

    useEffect(() => {
        props.setData(data);
    },[props, data])

    return (
        <>
        <form id="myForm">
            <textarea id="input-1" name="data" placeholder="Enter data..." cols="30" rows="10"  onChange={handleChange}></textarea>
            <button type="button" id="sendButton" onClick={sendData}>Send Data</button>
        </form>
        <pre id="output-1"></pre>
        </>
    );
}