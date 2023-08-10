import React from 'react';
import {motion} from "framer-motion";
import ProductLanding from '../components/ProductLanding';


const tilesVariant = {
  hidden: {
    opacity: 0, scale: 0.2, x: "-100%"
  },
  visible: {
    opacity: 1, scale: 1, x: "0%",
  }
}

const productVariant = {
  hidden: {
    opacity: 0, scale: 1, y: "40%"
  },
  visible: {
    opacity: 1, scale: 1, y: "0%",
  },
  
}

export default function Products() {

  return (
    <div id="product">
      <ProductLanding></ProductLanding>


      <div className="content">
        <motion.h1 className="c"
          initial={{x: "-100%"}}
          whileInView={{x: "0%"}}
          transition={{
            type: "spring",
            stiffness: 55,
          }}>
            Our product is as wide as our range.
          </motion.h1>

        <motion.p className="c"
        initial={{x: "100%"}}
        whileInView={{x: "0%"}}
        transition={{
          type: "spring",
          stiffness: 25,
        }}
        >
          Dash Dynamic’s highly efficient and unbeatable EV Charging solutions
          comes up with more to explore. It provides wireless technology for
          drone towers, charging for laptop, and heavy duty commercial vehicles
          for industrial purpose.
        </motion.p>
        <div className="btn">
        <button className="c">
          {"  "}Explore{" >"}
        </button>
        </div>

        <div className="boxes">
          <motion.div className="box"
            variants={tilesVariant}
            initial="hidden"
            whileInView="visible"
            transition= {{
              type: "spring",
              stiffness: 50,
              // delay: 0.6
            }}
          >
            <div className="icon">
            <svg
              width="59"
              height="54"
              viewBox="0 0 59 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4998 19.157C8.42312 19.157 6.3931 18.5953 4.66642 17.5428C2.93974 16.4903 1.59396 14.9943 0.799253 13.2441C0.00454939 11.4938 -0.203381 9.56789 0.201755 7.70984C0.606891 5.85179 1.6069 4.14506 3.07532 2.80549C4.54374 1.46591 6.41462 0.553642 8.45138 0.184053C10.4881 -0.185536 12.5993 0.00415022 14.5179 0.729125C16.4365 1.4541 18.0763 2.6818 19.23 4.25698C20.3838 5.83216 20.9996 7.68406 20.9996 9.57851H16.7996C16.7996 8.44184 16.4302 7.3307 15.7379 6.38559C15.0457 5.44049 14.0618 4.70387 12.9106 4.26888C11.7595 3.8339 10.4928 3.72008 9.27074 3.94184C8.04869 4.16359 6.92616 4.71095 6.0451 5.5147C5.16405 6.31844 4.56405 7.34248 4.32097 8.45731C4.07788 9.57214 4.20264 10.7277 4.67946 11.7778C5.15629 12.828 5.96376 13.7256 6.99976 14.3571C8.03577 14.9886 9.25379 15.3256 10.4998 15.3256V19.157ZM48.299 19.157V15.3256C49.545 15.3256 50.763 14.9886 51.799 14.3571C52.835 13.7256 53.6425 12.828 54.1193 11.7778C54.5961 10.7277 54.7209 9.57214 54.4778 8.45731C54.2347 7.34248 53.6347 6.31844 52.7537 5.5147C51.8726 4.71095 50.7501 4.16359 49.528 3.94184C48.306 3.72008 47.0393 3.8339 45.8881 4.26888C44.737 4.70387 43.7531 5.44049 43.0608 6.38559C42.3686 7.3307 41.9991 8.44184 41.9991 9.57851H37.7992C37.7992 7.68406 38.415 5.83216 39.5687 4.25698C40.7225 2.6818 42.3623 1.4541 44.2809 0.729125C46.1995 0.00415022 48.3106 -0.185536 50.3474 0.184053C52.3841 0.553642 54.255 1.46591 55.7234 2.80549C57.1919 4.14506 58.1919 5.85179 58.597 7.70984C59.0021 9.56789 58.7942 11.4938 57.9995 13.2441C57.2048 14.9943 55.859 16.4903 54.1323 17.5428C52.4057 18.5953 50.3756 19.157 48.299 19.157ZM10.4998 53.6397C7.71507 53.6397 5.04441 52.6305 3.07532 50.8342C1.10623 49.0379 4.67431e-06 46.6015 4.67431e-06 44.0611C4.67431e-06 41.5208 1.10623 39.0844 3.07532 37.2881C5.04441 35.4918 7.71507 34.4826 10.4998 34.4826V38.314C9.25379 38.314 8.03577 38.6511 6.99976 39.2826C5.96376 39.9141 5.15629 40.8117 4.67946 41.8618C4.20264 42.912 4.07788 44.0675 4.32097 45.1824C4.56405 46.2972 5.16405 47.3212 6.0451 48.125C6.92616 48.9287 8.04869 49.4761 9.27074 49.6978C10.4928 49.9196 11.7595 49.8058 12.9106 49.3708C14.0618 48.9358 15.0457 48.1992 15.7379 47.2541C16.4302 46.309 16.7996 45.1978 16.7996 44.0611H20.9996C20.9968 46.6007 19.8897 49.0356 17.9212 50.8314C15.9527 52.6271 13.2836 53.6371 10.4998 53.6397ZM48.299 53.6397C45.5151 53.6371 42.8461 52.6271 40.8776 50.8314C38.9091 49.0356 37.802 46.6007 37.7992 44.0611H41.9991C41.9991 45.1978 42.3686 46.309 43.0608 47.2541C43.7531 48.1992 44.737 48.9358 45.8881 49.3708C47.0393 49.8058 48.306 49.9196 49.528 49.6978C50.7501 49.4761 51.8726 48.9287 52.7537 48.125C53.6347 47.3212 54.2347 46.2972 54.4778 45.1824C54.7209 44.0675 54.5961 42.912 54.1193 41.8618C53.6425 40.8117 52.835 39.9141 51.799 39.2826C50.763 38.6511 49.545 38.314 48.299 38.314V34.4826C51.0837 34.4826 53.7544 35.4918 55.7234 37.2881C57.6925 39.0844 58.7988 41.5208 58.7988 44.0611C58.7988 46.6015 57.6925 49.0379 55.7234 50.8342C53.7544 52.6305 51.0837 53.6397 48.299 53.6397Z"
                fill="#9D3A3A"
              />
              <path
                d="M37.7974 31.7752V21.8672L49.7818 10.9343C49.9824 10.7576 50.1424 10.5462 50.2524 10.3124C50.3625 10.0787 50.4204 9.82734 50.4228 9.57297C50.4253 9.31861 50.3721 9.06635 50.2665 8.83092C50.1609 8.59548 50.005 8.38159 49.8078 8.20172C49.6107 8.02185 49.3762 7.8796 49.1181 7.78328C48.8601 7.68696 48.5835 7.63849 48.3047 7.6407C48.0259 7.64291 47.7503 7.69575 47.4941 7.79615C47.2379 7.89655 47.0062 8.0425 46.8125 8.22547L37.3627 16.8461C36.8338 15.296 35.7755 13.9408 34.3423 12.9784C32.9091 12.016 31.1761 11.4969 29.3965 11.4969C27.6169 11.4969 25.8839 12.016 24.4507 12.9784C23.0175 13.9408 21.9592 15.296 21.4303 16.8461L11.9826 8.22547C11.5888 7.86633 11.0548 7.66457 10.4979 7.66457C9.94111 7.66457 9.40708 7.86633 9.01328 8.22547C8.6196 8.58471 8.39844 9.07189 8.39844 9.57987C8.39844 10.0878 8.6196 10.575 9.01328 10.9343L20.9977 21.8672V31.7752L9.01328 42.7081C8.6196 43.0674 8.39844 43.5545 8.39844 44.0625C8.39844 44.5705 8.6196 45.0577 9.01328 45.4169C9.40708 45.7761 9.94111 45.9778 10.4979 45.9778C11.0548 45.9778 11.5888 45.7761 11.9826 45.4169L21.4324 36.7963C21.9613 38.3464 23.0196 39.7016 24.4528 40.664C25.886 41.6263 27.619 42.1454 29.3986 42.1454C31.1782 42.1454 32.9112 41.6263 34.3444 40.664C35.7776 39.7016 36.8359 38.3464 37.3648 36.7963L46.8146 45.4169C47.2106 45.7659 47.7411 45.959 48.2917 45.9546C48.8423 45.9502 49.369 45.7488 49.7583 45.3936C50.1477 45.0384 50.3685 44.5579 50.3733 44.0556C50.3781 43.5533 50.1664 43.0694 49.7839 42.7081L37.7974 31.7752ZM33.5975 34.484C33.5975 35.5001 33.155 36.4747 32.3673 37.1932C31.5797 37.9117 30.5114 38.3154 29.3975 38.3154C28.2837 38.3154 27.2154 37.9117 26.4278 37.1932C25.6401 36.4747 25.1976 35.5001 25.1976 34.484V19.1584C25.1976 18.1422 25.6401 17.1677 26.4278 16.4492C27.2154 15.7306 28.2837 15.327 29.3975 15.327C30.5114 15.327 31.5797 15.7306 32.3673 16.4492C33.155 17.1677 33.5975 18.1422 33.5975 19.1584V34.484Z"
                fill="#9D3A3A"
              />
            </svg>
            </div>
            <p>Drone towers</p>
          </motion.div>
          <motion.div className="box"
          variants={tilesVariant}
          initial="hidden"
          whileInView="visible"
          transition= {{
            type: "spring",
            stiffness: 40,
            delay: 0.25
          }}>
            <div className="icon">

            <svg
              width="66"
              height="47"
              viewBox="0 0 66 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.9297 38.1727H9.32162C8.08587 38.1716 6.9011 37.7244 6.02729 36.9292C5.15349 36.134 4.66204 35.0559 4.66081 33.9313V4.24142C4.66204 3.11687 5.15349 2.0387 6.02729 1.24352C6.9011 0.448345 8.08587 0.00112287 9.32162 0H55.9297C57.1655 0.00112287 58.3502 0.448345 59.224 1.24352C60.0978 2.0387 60.5893 3.11687 60.5905 4.24142V33.9313C60.5887 35.0557 60.097 36.1335 59.2234 36.9286C58.3497 37.7237 57.1653 38.1711 55.9297 38.1727ZM9.32162 4.24142V33.9313H55.9297V4.24142H9.32162ZM0 42.4142H65.2513V46.6556H0V42.4142Z"
                fill="#9D3A3A"
              />
            </svg>
            </div>
            <p>Laptop charging</p>
          </motion.div>
          <motion.div className="box"
          variants={tilesVariant}
          initial="hidden"
          whileInView="visible"
          transition= {{
            type: "spring",
            stiffness: 30,
            delay: 0.5
          }}>
              <div className="icon">
            <svg
              width="62"
              height="45"
              viewBox="0 0 62 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.302 1.4866C22.3553 0.534749 23.7838 0 25.2734 0H56.163C57.6526 0 59.0811 0.534747 60.1344 1.4866C61.1876 2.43846 61.7793 3.72946 61.7793 5.07558V32.9913C61.7793 34.3374 61.1876 35.6284 60.1344 36.5803C59.0811 37.5321 57.6526 38.0669 56.163 38.0669H25.2734C24.7083 38.0669 24.152 37.9899 23.6216 37.8424C23.2689 37.9866 22.8774 38.0669 22.4652 38.0669H2.80815C1.25725 38.0669 0 36.9307 0 35.5291V25.9641C0 25.2559 0.327507 24.5798 0.903365 24.0994L10.7319 15.8998C11.2506 15.4671 11.9307 15.2267 12.6367 15.2267H19.6571V5.07558C19.6571 3.72945 20.2488 2.43846 21.302 1.4866ZM23.6216 34H40.5H57.5V4H23.6216V34ZM19.6571 19.5H13.5L4 27V34H19.6571V19.5Z"
                fill="#9D3A3A"
              />
              <mask id="path-2-inside-1_1610_1244" fill="white">
                <path d="M23.9856 37.0185C24.0474 38.049 23.91 39.082 23.582 40.0529C23.254 41.0238 22.7423 41.9117 22.0792 42.6609C21.416 43.4101 20.6156 44.0046 19.7281 44.407C18.8405 44.8094 17.885 45.0111 16.9213 44.9995C15.9577 44.9879 15.0066 44.7632 14.1277 44.3395C13.2489 43.9159 12.4611 43.3023 11.8138 42.5373C11.1666 41.7723 10.6737 40.8723 10.3661 39.8937C10.0585 38.9152 9.94283 37.8791 10.0263 36.8504L13.239 37.1497C13.1939 37.7045 13.2563 38.2632 13.4222 38.791C13.5881 39.3187 13.8539 39.8041 14.203 40.2167C14.5521 40.6293 14.9769 40.9602 15.4509 41.1887C15.9249 41.4172 16.4378 41.5384 16.9576 41.5446C17.4773 41.5509 17.9926 41.4421 18.4713 41.2251C18.9499 41.008 19.3816 40.6874 19.7393 40.2834C20.0969 39.8793 20.3729 39.4004 20.5498 38.8768C20.7267 38.3532 20.8008 37.7961 20.7674 37.2403L23.9856 37.0185Z" />
              </mask>
              <path
                d="M23.9856 37.0185C24.0474 38.049 23.91 39.082 23.582 40.0529C23.254 41.0238 22.7423 41.9117 22.0792 42.6609C21.416 43.4101 20.6156 44.0046 19.7281 44.407C18.8405 44.8094 17.885 45.0111 16.9213 44.9995C15.9577 44.9879 15.0066 44.7632 14.1277 44.3395C13.2489 43.9159 12.4611 43.3023 11.8138 42.5373C11.1666 41.7723 10.6737 40.8723 10.3661 39.8937C10.0585 38.9152 9.94283 37.8791 10.0263 36.8504L13.239 37.1497C13.1939 37.7045 13.2563 38.2632 13.4222 38.791C13.5881 39.3187 13.8539 39.8041 14.203 40.2167C14.5521 40.6293 14.9769 40.9602 15.4509 41.1887C15.9249 41.4172 16.4378 41.5384 16.9576 41.5446C17.4773 41.5509 17.9926 41.4421 18.4713 41.2251C18.9499 41.008 19.3816 40.6874 19.7393 40.2834C20.0969 39.8793 20.3729 39.4004 20.5498 38.8768C20.7267 38.3532 20.8008 37.7961 20.7674 37.2403L23.9856 37.0185Z"
                stroke="#9D3A3A"
                stroke-width="10"
                stroke-linejoin="round"
                mask="url(#path-2-inside-1_1610_1244)"
              />
              <mask id="path-3-inside-2_1610_1244" fill="white">
                <path d="M52.9856 37.0185C53.0474 38.049 52.91 39.082 52.582 40.0529C52.254 41.0238 51.7423 41.9117 51.0792 42.6609C50.416 43.4101 49.6156 44.0046 48.7281 44.407C47.8405 44.8094 46.885 45.0111 45.9213 44.9995C44.9577 44.9879 44.0066 44.7632 43.1277 44.3395C42.2489 43.9159 41.4611 43.3023 40.8138 42.5373C40.1666 41.7723 39.6737 40.8723 39.3661 39.8937C39.0585 38.9152 38.9428 37.8791 39.0263 36.8504L42.239 37.1497C42.1939 37.7045 42.2563 38.2632 42.4222 38.791C42.5881 39.3187 42.8539 39.8041 43.203 40.2167C43.5521 40.6293 43.9769 40.9602 44.4509 41.1887C44.9249 41.4172 45.4378 41.5384 45.9576 41.5446C46.4773 41.5509 46.9926 41.4421 47.4713 41.2251C47.9499 41.008 48.3816 40.6874 48.7393 40.2834C49.0969 39.8793 49.3729 39.4004 49.5498 38.8768C49.7267 38.3532 49.8008 37.7961 49.7674 37.2403L52.9856 37.0185Z" />
              </mask>
              <path
                d="M52.9856 37.0185C53.0474 38.049 52.91 39.082 52.582 40.0529C52.254 41.0238 51.7423 41.9117 51.0792 42.6609C50.416 43.4101 49.6156 44.0046 48.7281 44.407C47.8405 44.8094 46.885 45.0111 45.9213 44.9995C44.9577 44.9879 44.0066 44.7632 43.1277 44.3395C42.2489 43.9159 41.4611 43.3023 40.8138 42.5373C40.1666 41.7723 39.6737 40.8723 39.3661 39.8937C39.0585 38.9152 38.9428 37.8791 39.0263 36.8504L42.239 37.1497C42.1939 37.7045 42.2563 38.2632 42.4222 38.791C42.5881 39.3187 42.8539 39.8041 43.203 40.2167C43.5521 40.6293 43.9769 40.9602 44.4509 41.1887C44.9249 41.4172 45.4378 41.5384 45.9576 41.5446C46.4773 41.5509 46.9926 41.4421 47.4713 41.2251C47.9499 41.008 48.3816 40.6874 48.7393 40.2834C49.0969 39.8793 49.3729 39.4004 49.5498 38.8768C49.7267 38.3532 49.8008 37.7961 49.7674 37.2403L52.9856 37.0185Z"
                stroke="#9D3A3A"
                stroke-width="10"
                stroke-linejoin="round"
                mask="url(#path-3-inside-2_1610_1244)"
              />
            </svg>
              </div>
            <p>Heavy Duty Commercial Vehicle</p>
          </motion.div>
        </div>

        <motion.div className="tile"
          variants={productVariant}
          initial="hidden"
          whileInView="visible"
          transition={{
            type: "spring",
            stiffness: 25,
          }}
        >
          <img src="../assets/products/product_1.png" alt="" />
          <div>
            <h1>Drone towers</h1>
            <p>Advanced wireless towers, for seamless charging, extended range, and enhanced payload capacity for unparalleled operational efficiency</p>
          </div>
        </motion.div>

        <motion.div className="tile"
        variants={productVariant}
        initial="hidden"
        whileInView="visible"
        transition={{
          type: "spring",
          stiffness: 25,
        }}>
          <img src="../assets/products/product_2.png" alt="" />
          <div>
            <h1>Heavy Duty Vehicles</h1>
            <p>For heavy-duty electric vehicle fleets, compatible wireless charging up to 500 KW with adequate safety features ensuring fast charging efficiency and streamlined operations</p>
          </div>
        </motion.div>

        <motion.div className="tile"
        variants={productVariant}
        initial="hidden"
        whileInView="visible"
        transition={{
          type: "spring",
          stiffness: 25,
        }}>
          <img src="../assets/products/product_3.png" alt="" />
          <div>
            <h1>Laptop charging</h1>
            <p>Adaptive wireless charger up to 250W in laptops with unparalleled flexibility, enabling easy power transfer for maximum efficiency, eliminating user charge anxiety.</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
