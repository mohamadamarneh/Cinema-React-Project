import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import LocalSearch from "../../components/Search/LocalSearch";
import SingleData from "../../components/SingleData/SingleData";
import Myloader from "react-spinners/PuffLoader";
import Genre from "../../components/Genres/Genre";
import useGenre from "../../components/Genres/UseGenre";
import emailjs from "@emailjs/browser";

const TvSeries = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_yxf2skm",
      "template_r155plp",
      e.target,
      "WCGDLLYkfRg03lzke"
    )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        });
    e.target.reset()
  };
  const send = () =>{
    window.alert("Send message successfully")
  }

  return (
    <>
      <div class="section section-padding pb-0 " style={{ color: "white", textAlign: "left", marginTop: "100px" }}>
     
        <div class="container">
          <div class="row learts-mb-n30">

            <div class="col-md-6 col-12 align-self-center learts-mb-30 mt-5 " style={{ marginTop: "100px" }}>
              <img src="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80" alt="" class="img-fluid" />

            </div>
            <div class="col-md-6 col-12 text-center learts-mb-30 ">
              <div className="formContainer" style={{ marginTop: "100px" }}>
   
              <h4  style={{textAlign: "left" }}>Contact Us:</h4>
                 <form onSubmit={sendEmail}>
          
                  <input type="text" class="d-flex flex-row align-items-start "placeholder="Your Name*" name="name"  />
                  <input type="text" placeholder="Your Email*" name="email" class="d-flex flex-row align-items-start" />
                  <input type="text" placeholder="Subject" class="d-flex flex-row align-items-start"/>
                  <textarea class="d-flex flex-row align-items-start" placeholder="Message" style={{width:"485px" , height:"150px" ,borderRadius:"7px"}} name="massage"></textarea>
                 
                  <div class="btn btn-success px-4 mt-2 col-lg-" data-toggle="modal"  onClick={send}>Send</div>
                </form>
              </div>
            </div>

          </div>
        </div>

      </div>
      <br />
      <br />
      <br />

    </>
  );
};

export default TvSeries;
