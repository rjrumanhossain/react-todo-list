import { FaTrash } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { useState } from "react";
import { AddComponents } from "./AddComponents";


export const ListComponents = () => {

  const [show, setShow] = useState(false);
  const [buttonText, setbuttonText] = useState("Show");
  const handlerFunction = () =>{

    if(show == true){
      setbuttonText("Show");
      setShow(false);
    }else{
      setShow(true);
      setbuttonText("Hide");

    }
     
  }

  return (
    <>
    <button onClick={handlerFunction}>{buttonText}</button>

    {show && <AddComponents/>}

      <table>
        
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Country</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Name">Alice</td>
            <td data-label="Email">alice@example.com</td>
            <td data-label="Age">25</td>
            <td data-label="Country">USA</td>
            <td>
                <button type="button"><FaTrash/></button>
                <button type="button"><FaPen/></button>

            </td>
          </tr>
          <tr>
            <td data-label="Name">Bob</td>
            <td data-label="Email">bob@example.com</td>
            <td data-label="Age">30</td>
            <td data-label="Country">UK</td>
            <td>
                <button type="button"><FaTrash/></button>
                <button type="button"><FaPen/></button>
            </td>
          </tr>
          <tr>
            <td data-label="Name">Charlie</td>
            <td data-label="Email">charlie@example.com</td>
            <td data-label="Age">28</td>
            <td data-label="Country">Canada</td>
            <td>
                <button type="button"><FaTrash/></button>
                <button type="button"><FaPen/></button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
