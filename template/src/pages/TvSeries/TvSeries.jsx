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

  const [massages, setmessage] = useState([]);
  const [name, setname] = useState([]);
  const [subject, setsub] = useState([]);
  const [email, setemail] = useState([]);
  
  const Addmessage = () => {

    axios.post(`https://62c47caf7d83a75e39fb0ca3.mockapi.io/massages`, {
      massages,
      name,
      email ,
      subject,
    })
  window.alert("message send successfully");
  window.location.href = `http://localhost:3001/all-series`;
  }
  return (
    <div>
    
      <div class="section section-padding pb-0 container" style={{ color: "white", textAlign: "left", marginTop: "100px" }}>
     
        <div class="">
          <div class="row learts-mb-n30">

            <div class="col-md-6 col-12 align-self-center learts-mb-30 mt-5 " style={{ marginTop: "150px" }}>
              <img src="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80" alt="" class="img-fluid " />

            </div>
            <div class="col-md-6 col-12  learts-mb-30 ">
              <div className="formContainer" style={{ marginTop: "100px" }}>
   
              {/* <h4  style={{textAlign: "left" }}>Contact Us</h4> */}
              <h1 class="display-6 mb-4"> Contact Us Whether you have a question</h1>
                    
              {/* <h1 class="display-6 mb-4"> Contact Us Whether you have a question</h1> */}
                 <form >
          
                  <input type="text" class="d-flex flex-row align-items-start "placeholder="Your Name*" name="name" onChange={(e)=>setname(e.target.value)} />
                  <input type="text" placeholder="Your Email*" name="email" class="d-flex flex-row align-items-start" onChange={(e)=>setemail(e.target.value)} />
                  <input type="text" placeholder="Subject" class="d-flex flex-row align-items-start" onChange={(e)=>setsub(e.target.value)} />
                  <textarea class="d-flex flex-row align-items-start" placeholder="Message" style={{width:"485px" , height:"150px" ,borderRadius:"7px"}} name="massage" onChange={(e)=>setmessage(e.target.value)} ></textarea>
                 
                  <div class="btn btn-success px-4 mt-2 col-lg-" data-toggle="modal"  onClick={Addmessage}>Send</div>
                </form>
              </div>
            </div>

          </div>
        </div>

      </div>
      <br />
      <br />
      <br />

    </div>
  );
};

export default TvSeries;
