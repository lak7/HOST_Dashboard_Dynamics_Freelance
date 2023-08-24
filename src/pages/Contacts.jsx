import React,{useEffect, useState} from "react";
import Landing from "../components/Landing";
import { async } from "q";


const QnA = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="qna-item">
          <div className="qna-question" onClick={() => toggleAnswer(index)}>
            {item.question}
          </div>
          <div
            className={`qna-answer ${expandedIndex === index ? 'expanded' : ''}`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

// Example usage:
const data = [
  {
    question: '1. Are Yulu and EV the same?',
    answer: 'Dash dynamic charger takes around 30% less time to charge your vehicle. We appreciate your honesty and accuracy in providing the requested information.',
  },
  {
    question: '2. How far can I go with my EV?',
    answer: 'This is a random answer please remind me to get real answer',
  },
  {
    question: '3. Where can I charge?',
    answer: 'This is a random answer please remind me to get real answer',
  },
  {
    question: '4. How much will it take to charge my vehicle?',
    answer: 'This is a random answer please remind me to get real answer',
  },
  {
    question: '5. How much will charging cost?',
    answer: 'This is a random answer please remind me to get real answer',
  }
];
export default function Contacts() {
  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [message,setMessage] = useState("");
  let [loading,setLoading] = useState(false);
  let [response,setResponse] = useState(false);

  const sendEmail = async (e)=>{
    e.preventDefault();
    setLoading(true);
    let data = {
      to:"harshagnihotri90@gmail.com",
      from:email,
      subject:"Website Mailing Querry"+name,
      message:message
    }
    // try {
      const response = await fetch(
        // "https://dashdynamicbackend.onrender.com/send_mail",{
        "http://127.0.0.1:9000/send_mail",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      ); // Replace with your API endpoint
      const jsonData = await response.json();
      setResponse(jsonData);
      setLoading(false);
      setName("")
      setEmail("")
      setMessage("")
      console.log(jsonData);
    // } catch (error) {
    //   console.log("Error:", error);
    //   setLoading(false);
    // }
  };
  if (loading) {
    return (
      <div className="Loading_pg">
        <h1 className="loading">Loading...</h1>
      </div> // Display loader while fetching data
    );
  }
  return (
    <div id="Contact_page">
      <Landing Id="contact_landing">
        <div className="gradient"></div>
        <h1>DYNAMIC SOLUTIONS STARTS WITH A SIMPLE CONTACT</h1>
      </Landing>
      <div className="contact_inner">

      <div className="contact_head">
        <button>CONTACT US</button>
        <p>
          Dash is leading the way to a more sustainable future with a Charging
          as a Service business model and “invisible” charging infrastructure to
          support the mass adoption of electric vehicles.
        </p>
      </div>
      <div className="lets_Talk">
        <div className="contact">
          <h1 className="main">LET'S TALK</h1>
          <h1>Contact us for further information</h1>
          <br />
          <br />
          <br />
          <div className="c">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.3 4.02857C5.07909 3.86289 4.76569 3.90766 4.6 4.12857C4.43431 4.34949 4.47909 4.66289 4.7 4.82857L5.3 4.02857ZM9 7.42857L8.7 7.82857C8.87778 7.96191 9.12222 7.96191 9.3 7.82857L9 7.42857ZM13.3 4.82857C13.5209 4.66289 13.5657 4.34949 13.4 4.12857C13.2343 3.90766 12.9209 3.86289 12.7 4.02857L13.3 4.82857ZM1 11.2857H0.5H1ZM2.6 1V0.5V1ZM15.4 1V0.5V1ZM4.7 4.82857L8.7 7.82857L9.3 7.02857L5.3 4.02857L4.7 4.82857ZM9.3 7.82857L13.3 4.82857L12.7 4.02857L8.7 7.02857L9.3 7.82857ZM1.5 11.2857V2.71429H0.5V11.2857H1.5ZM1.5 2.71429C1.5 2.38153 1.62369 2.06876 1.83416 1.84326L1.1031 1.16094C0.713448 1.57843 0.5 2.13773 0.5 2.71429H1.5ZM1.83416 1.84326C2.04353 1.61893 2.31983 1.5 2.6 1.5V0.5C2.03148 0.5 1.49384 0.742291 1.1031 1.16094L1.83416 1.84326ZM2.6 1.5H15.4V0.5H2.6V1.5ZM15.4 1.5C15.6802 1.5 15.9565 1.61893 16.1658 1.84326L16.8969 1.16094C16.5062 0.742291 15.9685 0.5 15.4 0.5V1.5ZM16.1658 1.84326C16.3763 2.06876 16.5 2.38153 16.5 2.71429H17.5C17.5 2.13772 17.2866 1.57843 16.8969 1.16094L16.1658 1.84326ZM16.5 2.71429V11.2857H17.5V2.71429H16.5ZM16.5 11.2857C16.5 11.6185 16.3763 11.9312 16.1658 12.1567L16.8969 12.8391C17.2866 12.4216 17.5 11.8623 17.5 11.2857H16.5ZM16.1658 12.1567C15.9565 12.3811 15.6802 12.5 15.4 12.5V13.5C15.9685 13.5 16.5062 13.2577 16.8969 12.8391L16.1658 12.1567ZM15.4 12.5H2.6V13.5H15.4V12.5ZM2.6 12.5C2.31983 12.5 2.04353 12.3811 1.83416 12.1567L1.1031 12.8391C1.49384 13.2577 2.03148 13.5 2.6 13.5V12.5ZM1.83416 12.1567C1.62369 11.9312 1.5 11.6185 1.5 11.2857H0.5C0.5 11.8623 0.713448 12.4216 1.1031 12.8391L1.83416 12.1567Z"
                fill="black"
              />
            </svg>
            <p>robin.singh@gmail.com |</p>
            <p>shashank.sawai@gmail.com</p>
          </div>
          <div className="c">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M13.8494 10.0183L10.8969 8.69517C10.7631 8.63785 10.6171 8.61481 10.4722 8.62812C10.3273 8.64144 10.188 8.69069 10.0669 8.77142C10.0546 8.77931 10.0429 8.78808 10.0319 8.79767L8.48876 10.1102C8.47275 10.1189 8.45492 10.1238 8.4367 10.1244C8.41848 10.1251 8.40035 10.1215 8.38376 10.1139C7.39188 9.63517 6.36438 8.61392 5.88376 7.6358C5.87575 7.61945 5.87159 7.6015 5.87159 7.5833C5.87159 7.5651 5.87575 7.54714 5.88376 7.5308L7.20063 5.9683C7.21008 5.95674 7.21885 5.94463 7.22688 5.93205C7.3065 5.81049 7.35459 5.67101 7.36681 5.52622C7.37903 5.38142 7.355 5.23586 7.29688 5.10267L5.98313 2.15517C5.90853 1.98118 5.7795 1.83607 5.61542 1.74164C5.45134 1.6472 5.26106 1.60853 5.07313 1.63142C4.2564 1.7388 3.5067 2.13988 2.96415 2.75974C2.42159 3.37959 2.1233 4.17579 2.12501 4.99955C2.12501 9.8933 6.10626 13.8745 11 13.8745C11.8237 13.8761 12.6199 13.5778 13.2397 13.0353C13.8595 12.4927 14.2606 11.7431 14.3681 10.9264C14.391 10.7394 14.3528 10.55 14.2594 10.3863C14.1659 10.2227 14.0221 10.0936 13.8494 10.0183ZM11 13.1245C6.52001 13.1245 2.87501 9.47955 2.87501 4.99955C2.87292 4.35825 3.10438 3.73814 3.52616 3.25505C3.94794 2.77197 4.53117 2.45898 5.16688 2.37455H5.18126C5.20644 2.37502 5.2309 2.38309 5.25142 2.3977C5.27194 2.41231 5.28757 2.43278 5.29626 2.45642L6.61501 5.4008C6.62253 5.41717 6.62642 5.43497 6.62642 5.45298C6.62642 5.471 6.62253 5.4888 6.61501 5.50517L5.29563 7.07142C5.28579 7.0826 5.27681 7.09451 5.26876 7.10705C5.1862 7.23308 5.13758 7.3783 5.12762 7.52864C5.11765 7.67898 5.14668 7.82934 5.21188 7.96517C5.76626 9.10017 6.91001 10.2352 8.05751 10.7895C8.19413 10.8544 8.34523 10.8827 8.49606 10.8718C8.64689 10.8608 8.79231 10.8109 8.91813 10.727C8.93001 10.7189 8.94188 10.7102 8.95313 10.7008L10.4956 9.3883C10.5109 9.38011 10.5277 9.37532 10.5449 9.37424C10.5622 9.37316 10.5795 9.37582 10.5956 9.38205L13.5488 10.7052C13.5729 10.7154 13.5932 10.733 13.6067 10.7555C13.6203 10.7779 13.6265 10.804 13.6244 10.8302C13.5404 11.4662 13.2277 12.0498 12.7447 12.4721C12.2617 12.8943 11.6415 13.1263 11 13.1245Z"
                fill="black"
                />
            </svg>

            <p> +91-8737237231</p>
            <p> | +91-9560589782</p>
          </div>
        </div>
        <form className="form" onSubmit={sendEmail}>
          {/* <h1>Career</h1> */}
          <p>Name</p>
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Full Name" />
          <p>E-MAIL</p>
          <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="example@gmail.com" />
          <p>WRITE TO US</p>
          <input type="text" value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="Message" />
          <div className="share">
            <button type="submit">Share</button>
            <div className="socials">
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  d="M1.68 3.1226C2.61333 3.1226 3.36 2.41785 3.36 1.5613C3.36 0.704754 2.60167 0 1.68 0C0.758333 0 0 0.704754 0 1.5613C0 2.41785 0.758333 3.1226 1.68 3.1226ZM4.95833 4.30442V13H7.85167V8.70642C7.85167 7.56797 8.085 6.47289 9.59 6.47289C11.095 6.47289 11.095 7.77398 11.095 8.77148V13H14V8.22936C14 5.88741 13.4633 4.08757 10.5233 4.08757C9.11167 4.08757 8.16667 4.80317 7.78167 5.48624H7.74667V4.29358H4.97L4.95833 4.30442ZM0.233333 4.30442H3.13833V13H0.233333V4.30442Z"
                  fill="black"
                  />
              </svg>
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  d="M16 5.4526C16 5.41536 16 5.37304 15.9982 5.32395C15.9964 5.18683 15.9929 5.03278 15.9893 4.86857C15.975 4.39628 15.95 3.92567 15.9107 3.48215C15.8571 2.87104 15.7786 2.3615 15.6714 1.97892C15.5584 1.57966 15.3367 1.21553 15.0287 0.922924C14.7207 0.630315 14.337 0.419476 13.9161 0.31148C13.4107 0.182825 12.4214 0.103262 11.0286 0.0541705C10.3661 0.0304709 9.65714 0.0152354 8.94821 0.00677121C8.7 0.00338555 8.46964 0.00169283 8.2625 0H7.7375C7.53036 0.00169283 7.3 0.00338555 7.05179 0.00677121C6.34286 0.0152354 5.63393 0.0304709 4.97143 0.0541705C3.57857 0.104955 2.5875 0.184518 2.08393 0.31148C1.66286 0.419211 1.27905 0.629961 0.970972 0.922611C0.662891 1.21526 0.441357 1.57953 0.328571 1.97892C0.219643 2.3615 0.142857 2.87104 0.0892857 3.48215C0.05 3.92567 0.025 4.39628 0.0107143 4.86857C0.00535712 5.03278 0.0035714 5.18683 0.00178569 5.32395C0.00178569 5.37304 0 5.41536 0 5.4526V5.5474C0 5.58464 -2.72744e-08 5.62696 0.00178569 5.67605C0.0035714 5.81317 0.00714283 5.96722 0.0107143 6.13142C0.025 6.60372 0.05 7.07433 0.0892857 7.51785C0.142857 8.12896 0.221429 8.6385 0.328571 9.02108C0.557143 9.83195 1.22857 10.4718 2.08393 10.6885C2.5875 10.8172 3.57857 10.8967 4.97143 10.9458C5.63393 10.9695 6.34286 10.9848 7.05179 10.9932C7.3 10.9966 7.53036 10.9983 7.7375 11H8.2625C8.46964 10.9983 8.7 10.9966 8.94821 10.9932C9.65714 10.9848 10.3661 10.9695 11.0286 10.9458C12.4214 10.895 13.4125 10.8155 13.9161 10.6885C14.7714 10.4718 15.4429 9.83364 15.6714 9.02108C15.7804 8.6385 15.8571 8.12896 15.9107 7.51785C15.95 7.07433 15.975 6.60372 15.9893 6.13142C15.9946 5.96722 15.9964 5.81317 15.9982 5.67605C15.9982 5.62696 16 5.58464 16 5.5474V5.4526ZM14.7143 5.54063C14.7143 5.57618 14.7143 5.61511 14.7125 5.66082C14.7107 5.79286 14.7071 5.93844 14.7036 6.09587C14.6911 6.54617 14.6661 6.99646 14.6286 7.41459C14.5804 7.95968 14.5125 8.40659 14.4286 8.70622C14.3179 9.09726 13.9929 9.40705 13.5821 9.51031C13.2071 9.60511 12.2625 9.68128 10.9786 9.72699C10.3286 9.75069 9.62857 9.76593 8.93036 9.77439C8.68571 9.77778 8.45893 9.77947 8.25536 9.77947H7.74464L7.06964 9.77439C6.37143 9.76593 5.67321 9.75069 5.02143 9.72699C3.7375 9.67959 2.79107 9.60511 2.41786 9.51031C2.00714 9.40536 1.68214 9.09726 1.57143 8.70622C1.4875 8.40659 1.41964 7.95968 1.37143 7.41459C1.33393 6.99646 1.31071 6.54617 1.29643 6.09587C1.29107 5.93844 1.28929 5.79117 1.2875 5.66082C1.2875 5.61511 1.28571 5.57448 1.28571 5.54063V5.45937C1.28571 5.42382 1.28571 5.38489 1.2875 5.33918C1.28929 5.20714 1.29286 5.06156 1.29643 4.90412C1.30893 4.45383 1.33393 4.00354 1.37143 3.58541C1.41964 3.04032 1.4875 2.59341 1.57143 2.29378C1.68214 1.90274 2.00714 1.59295 2.41786 1.48969C2.79286 1.39489 3.7375 1.31871 5.02143 1.27301C5.67143 1.24931 6.37143 1.23407 7.06964 1.22561C7.31429 1.22222 7.54107 1.22053 7.74464 1.22053H8.25536L8.93036 1.22561C9.62857 1.23407 10.3268 1.24931 10.9786 1.27301C12.2625 1.32041 13.2089 1.39489 13.5821 1.48969C13.9929 1.59464 14.3179 1.90274 14.4286 2.29378C14.5125 2.59341 14.5804 3.04032 14.6286 3.58541C14.6661 4.00354 14.6893 4.45383 14.7036 4.90412C14.7089 5.06156 14.7107 5.20883 14.7125 5.33918C14.7125 5.38489 14.7143 5.42551 14.7143 5.45937V5.54063ZM6.41071 7.76839L10.5536 5.48307L6.41071 3.23161V7.76839Z"
                  fill="black"
                  />
              </svg>
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.32663 0.279997C8.63441 0.227694 8.97846 0.210259 9.30256 0.264967C9.87987 0.36192 10.4148 0.628462 10.8384 1.03028C11.1141 1.03629 11.3856 0.982181 11.6257 0.905229C11.8577 0.830003 12.0804 0.728965 12.2896 0.604036L12.295 0.600428C12.3821 0.542748 12.4866 0.516776 12.5907 0.526916C12.6948 0.537056 12.7922 0.582684 12.8664 0.656065C12.9406 0.729447 12.9869 0.826068 12.9976 0.92955C13.0083 1.03303 12.9827 1.13701 12.9251 1.22386C12.7999 1.41323 12.6252 1.7511 12.4299 2.12984L12.3362 2.3108C12.2243 2.52723 12.1094 2.74606 12.0024 2.93363C11.9353 3.05146 11.8633 3.1711 11.7908 3.2745V3.43922C11.7982 4.42435 11.6082 5.40108 11.2319 6.31242C10.8556 7.22376 10.3005 8.05145 9.59895 8.74719C8.89744 9.44293 8.06358 9.99279 7.14603 10.3647C6.22848 10.7365 5.24563 10.923 4.25482 10.9132C2.81901 10.9145 1.41342 10.5032 0.2072 9.72882C0.120983 9.67338 0.0562435 9.59048 0.023571 9.4937C-0.00910159 9.39692 -0.00777284 9.29197 0.0273398 9.19604C0.0624525 9.1001 0.12927 9.01886 0.216863 8.96559C0.304456 8.91232 0.407639 8.89018 0.509532 8.90279C1.34268 9.00181 2.1871 8.86816 2.94814 8.51683C2.57684 8.34901 2.24475 8.10614 1.97304 7.8037C1.70133 7.50125 1.49595 7.14587 1.36997 6.76017C1.34597 6.68633 1.34153 6.60758 1.35711 6.53154C1.37268 6.4555 1.40772 6.38474 1.45886 6.32611L1.4649 6.3201C1.15796 6.04822 0.911975 5.71519 0.742904 5.34264C0.573833 4.97009 0.485463 4.56635 0.483531 4.15764V4.12638C0.483487 4.0274 0.516204 3.93115 0.576634 3.85249C0.637065 3.77382 0.721851 3.71712 0.817911 3.69112C0.613157 3.28492 0.506923 2.8367 0.507718 2.38234C0.507374 1.86723 0.642892 1.36103 0.90075 0.914247C0.937385 0.850824 0.988987 0.797213 1.05111 0.758039C1.11323 0.718865 1.184 0.695303 1.25732 0.689386C1.33064 0.683469 1.40431 0.695374 1.47197 0.724075C1.53963 0.752775 1.59925 0.79741 1.6457 0.854128C2.70337 2.14964 4.21865 2.99475 5.88198 3.21679C5.86753 2.67583 6.00479 2.14155 6.27839 1.67374C6.55198 1.20594 6.95112 0.823061 7.43113 0.567964C7.6742 0.439311 7.99588 0.336508 8.32724 0.279997H8.32663ZM1.50723 4.81774C1.62465 5.1463 1.82585 5.43892 2.09115 5.66697C2.35644 5.89501 2.67674 6.05067 3.0207 6.11871C3.1198 6.13833 3.20947 6.19031 3.27547 6.26637C3.34148 6.34244 3.38004 6.43825 3.38504 6.53859C3.39004 6.63893 3.36119 6.73806 3.30308 6.82024C3.24496 6.90242 3.1609 6.96295 3.06424 6.99223C2.89977 7.04213 2.73107 7.07639 2.55995 7.09623C2.74573 7.3345 2.98283 7.52837 3.25383 7.66361C3.52483 7.79886 3.82286 7.87203 4.12603 7.87777C4.21954 7.87953 4.31023 7.90998 4.38565 7.96497C4.46108 8.01996 4.51756 8.0968 4.54735 8.18495C4.57715 8.27309 4.5788 8.36824 4.55209 8.45736C4.52537 8.54648 4.4716 8.62521 4.39813 8.68276C3.76761 9.176 3.0349 9.52403 2.25278 9.70177C2.90029 9.90783 3.57616 10.0123 4.25603 10.0114H4.26147C5.1322 10.0205 5.99602 9.85702 6.80248 9.53047C7.60893 9.20391 8.34184 8.72083 8.95838 8.10946C9.57493 7.49808 10.0627 6.77067 10.3933 5.96973C10.7239 5.16879 10.8906 4.31037 10.8838 3.44463V3.123C10.8837 3.01352 10.9236 2.90774 10.9962 2.82541C11.0386 2.77792 11.1111 2.6685 11.2139 2.48875C11.3107 2.31922 11.4183 2.11481 11.5301 1.89899L11.5501 1.85931C11.2342 1.92998 10.909 1.94967 10.5869 1.91762C10.4779 1.90583 10.377 1.85521 10.3027 1.77514C9.99859 1.44731 9.59366 1.22909 9.1514 1.15472C8.92834 1.12335 8.70163 1.12843 8.48022 1.16975C8.26441 1.20315 8.05487 1.26861 7.85862 1.36393C7.46297 1.57411 7.14868 1.90892 6.96505 2.31584C6.78142 2.72277 6.73884 3.17879 6.844 3.61236C6.86055 3.68054 6.86087 3.75162 6.84495 3.81995C6.82902 3.88827 6.79728 3.95196 6.75225 4.00595C6.70723 4.05994 6.65015 4.10274 6.58557 4.13095C6.52098 4.15917 6.45067 4.17201 6.38022 4.16846C4.52244 4.07503 2.76605 3.29779 1.45281 1.98796C1.42729 2.11809 1.41454 2.25037 1.41471 2.38294V2.38414C1.41403 2.71524 1.49572 3.04137 1.65249 3.33349C1.80925 3.62561 2.03624 3.87465 2.31325 4.05844C2.39459 4.11288 2.456 4.19206 2.48827 4.28411C2.52053 4.37617 2.52193 4.47615 2.49223 4.56906C2.46253 4.66197 2.40335 4.7428 2.32355 4.79945C2.24375 4.8561 2.14764 4.88551 2.04961 4.88327C1.86713 4.87824 1.68553 4.8567 1.50723 4.81774Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </form>
      </div>

      <div className="contact_head odd">
        <button>FAQs</button>
        <p>You question, We answer</p>
      </div>
        <QnA data={data} />
      </div>
    </div>
  );
}
