import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import EV_users_Landing from "../components/EV_users_Landing";

const tiles3Variant = {
  hidden: {
    opacity: 0.75,
    y: "10%",
  },
  visible: {
    opacity: 1,
    y: "0%",
  },
};

export default function EV_users() {
  //PART1
  const tileRef = useRef(null);
  const isTileInView = useInView(tileRef, { once: true });
  const tileAnimationControls = useAnimation();

  useEffect(() => {
    if (isTileInView) {
      // alert("VISIBLE")
      tileAnimationControls.start("visible");
    }
  }, [isTileInView]);

  //PART3
  const tile3Ref = useRef(null);
  const isTile3InView = useInView(tile3Ref, { once: true });
  const tile3AnimationControls = useAnimation();

  useEffect(() => {
    if (isTile3InView) {
      // alert("VISIBLE")
      tile3AnimationControls.start("visible");
    }
  }, [isTile3InView]);

  return (
    <div id="Ev_users">
      <EV_users_Landing />
      <div className="content">
        <div className="part1">
          <p>
            From eliminating range anxiety to providing a seamless wireless
            charging experience and offering cost-efficient solutions, we have{" "}
            <br /> designed our services to make EV ownership as convenient and
            worry-free as possible.
          </p>
          <div ref={tileRef} className="tiles">
            <motion.div
              className="tile"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 60,
              }}
            >
              <div>
                <svg
                  width="212"
                  height="233"
                  viewBox="0 0 212 233"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M178 96.5V60H3V230H178V193"
                    stroke="url(#logo-gradient)"
                    stroke-width="5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M180.6 31.1429C180.6 29.9594 181.466 29 182.533 29H194.133V33.2857H182.533C181.466 33.2857 180.6 32.3263 180.6 31.1429Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M176.733 39.7143C176.733 38.5308 177.599 37.5714 178.667 37.5714H190.267V41.8571H178.667C177.599 41.8571 176.733 40.8978 176.733 39.7143Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M172.867 48.2857C172.867 47.1022 173.732 46.1429 174.8 46.1429H186.4V50.4286H174.8C173.732 50.4286 172.867 49.4692 172.867 48.2857Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M169 56.8571C169 55.6737 169.866 54.7143 170.933 54.7143H182.533V59H170.933C169.866 59 169 58.0406 169 56.8571Z"
                    fill="black"
                  />
                  <path d="M198 29L194.133 33.2857V29H198Z" fill="black" />
                  <path
                    d="M194.133 37.5714L190.267 41.8571V37.5714H194.133Z"
                    fill="black"
                  />
                  <path
                    d="M190.267 46.1429L186.4 50.4286V46.1429H190.267Z"
                    fill="black"
                  />
                  <path
                    d="M186.4 54.7143L182.533 59V54.7143H186.4Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M128.866 0.0546875C130.478 0.0546875 131.785 1.34528 131.785 2.9373V7.74166H143.737V2.9373C143.737 1.34528 145.044 0.0546875 146.656 0.0546875C148.268 0.0546875 149.574 1.34528 149.574 2.9373V7.85044C150.544 8.03738 151.474 8.46488 152.244 9.13032C153.325 10.0645 154.022 11.4206 154.022 12.9304V18.3112C154.022 21.2481 152.669 23.9729 150.42 25.9161C148.184 27.8487 145.225 28.8808 142.208 28.8808H140.68V64.4331C140.68 65.5736 141.201 66.7593 142.288 67.6992C143.388 68.6498 144.954 69.2374 146.656 69.2374H186.683C188.384 69.2374 189.95 68.6498 191.05 67.6992C192.138 66.7593 192.659 65.5736 192.659 64.4331V45.2156C192.659 43.6236 193.966 42.333 195.578 42.333C197.19 42.333 198.496 43.6236 198.496 45.2156V64.4331C198.496 67.37 197.143 70.0947 194.894 72.038C192.658 73.9705 189.699 75.0027 186.683 75.0027H146.656C143.639 75.0027 140.68 73.9705 138.444 72.038C136.196 70.0947 134.842 67.37 134.842 64.4331V28.8808H133.314C130.297 28.8808 127.338 27.8487 125.102 25.9161C122.853 23.9729 121.5 21.2481 121.5 18.3112V12.9304C121.5 11.4206 122.197 10.0645 123.278 9.13032C124.048 8.46489 124.977 8.03738 125.947 7.85044V2.9373C125.947 1.34528 127.254 0.0546875 128.866 0.0546875ZM127.337 13.5069V18.3112C127.337 19.4518 127.858 20.6375 128.946 21.5774C130.046 22.528 131.612 23.1156 133.314 23.1156H142.208C143.91 23.1156 145.476 22.528 146.576 21.5774C147.664 20.6375 148.185 19.4518 148.185 18.3112V13.5069H127.337Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M200.001 4.50008C201.348 5.37342 201.489 6.73908 200.604 8.07018L195.5 16.2279L201.5 16.3278L208 16.3278C209.065 16.3435 210.307 16.5952 210.806 17.5242C211.304 18.4533 211.084 19.1221 210.5 20.0014L203.219 31.172C202.335 32.5031 200.525 32.8742 199.178 32.0009C197.83 31.1275 198.616 29.3325 199.5 28.0014L201.82 24.339L204.14 20.6766L196.739 20.593L190.5 20.5014C189.436 20.4857 188.501 20.5 188.001 19.5C187.5 18.5 188.416 16.8792 189 15.9999L193.001 10.5006L196.739 5.50176C197.623 4.17066 198.501 4.00064 200.001 4.50008Z"
                    fill="black"
                  />
                  <defs>
                    <linearGradient
                      id="logo-gradient"
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                    >
                      <stop offset="0%" stop-color="#C9C8C8">
                        <animate
                          attributeName="stop-color"
                          values="#C9C8C8; #FFFFFF; #C9C8C8"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </stop>
                      <stop offset="100%" stop-color="#FFFFFF">
                        <animate
                          attributeName="stop-color"
                          values="#FFFFFF; #C9C8C8; #FFFFFF"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <p>Cable and Cord Issues</p>
            </motion.div>
            <motion.div
              className="tile"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 60,
              }}
            >
              <div>
                <svg
                  width="218"
                  height="233"
                  viewBox="0 0 218 233"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M177.5 96.5V60H2.5V230H177.5V193"
                    stroke="url(#logo-gradient)"
                    stroke-width="5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M168.059 0.0546875H172.034C176.93 0.0546875 180.88 0.0546875 183.985 0.437779C187.209 0.830693 189.923 1.68201 192.079 3.64985C194.235 5.62097 195.159 8.10288 195.596 11.0497C196.012 13.8885 196.012 17.5001 196.012 21.976V49.169H198.952C203.264 49.169 206.756 52.3614 206.756 56.3036V56.5361C206.756 57.1874 207.039 57.812 207.543 58.2726C208.046 58.7331 208.729 58.9918 209.442 58.9918C210.154 58.9918 210.837 58.7331 211.341 58.2726C211.845 57.812 212.128 57.1874 212.128 56.5361V43.57L206.892 41.9754C205.288 41.4862 203.893 40.5483 202.905 39.2943C201.916 38.0403 201.384 36.5338 201.384 34.988V27.0675C201.384 25.1137 202.233 23.2398 203.744 21.8582C205.255 20.4766 207.305 19.7004 209.442 19.7004H212.099C211.924 17.8325 210.976 16.096 209.449 14.8446C209.172 14.6253 208.889 14.4125 208.6 14.2062L204.184 10.9777C203.904 10.778 203.67 10.5293 203.495 10.2462C203.321 9.96313 203.21 9.65118 203.168 9.32847C203.126 9.00575 203.155 8.67869 203.253 8.36623C203.35 8.05378 203.515 7.76214 203.737 7.50822C203.958 7.25431 204.233 7.04316 204.545 6.88703C204.857 6.73089 205.199 6.63287 205.553 6.59864C205.906 6.56442 206.263 6.59466 206.604 6.68763C206.944 6.7806 207.261 6.93444 207.537 7.14024L212.013 10.4145C212.45 10.7354 212.751 10.9548 213.034 11.1873C215.681 13.3565 217.279 16.3967 217.479 19.6415C217.5 19.9853 217.5 20.3389 217.5 20.853V56.5361C217.5 58.49 216.651 60.3639 215.14 61.7455C213.629 63.1271 211.579 63.9033 209.442 63.9033C207.305 63.9033 205.255 63.1271 203.744 61.7455C202.233 60.3639 201.384 58.49 201.384 56.5361V56.3036C201.384 55.714 201.128 55.1485 200.671 54.7316C200.215 54.3146 199.597 54.0804 198.952 54.0804H196.012V65.5404H196.907C197.619 65.5404 198.303 65.7991 198.806 66.2597C199.31 66.7202 199.593 67.3448 199.593 67.9961C199.593 68.6474 199.31 69.272 198.806 69.7326C198.303 70.1931 197.619 70.4518 196.907 70.4518H143.186C142.474 70.4518 141.79 70.1931 141.287 69.7326C140.783 69.272 140.5 68.6474 140.5 67.9961C140.5 67.3448 140.783 66.7202 141.287 66.2597C141.79 65.7991 142.474 65.5404 143.186 65.5404H144.081V21.976C144.081 17.5001 144.081 13.8885 144.5 11.0497C144.93 8.10288 145.861 5.62097 148.014 3.64985C150.17 1.67873 152.884 0.833968 156.108 0.437779C159.213 0.0546875 163.163 0.0546875 168.059 0.0546875ZM149.453 65.5404H190.64V22.1561C190.64 17.4575 190.632 14.1767 190.271 11.7046C189.916 9.30127 189.268 8.03085 188.279 7.12387C187.287 6.21689 185.898 5.62752 183.265 5.30337C180.561 4.97266 176.977 4.96612 171.837 4.96612H168.256C163.117 4.96612 159.528 4.97266 156.824 5.30337C154.195 5.62752 152.806 6.22017 151.814 7.12387C150.822 8.03085 150.177 9.30127 149.822 11.7079C149.461 14.1734 149.453 17.4542 149.453 22.1561V65.5404ZM212.128 38.3966V24.6118H209.442C208.729 24.6118 208.046 24.8706 207.543 25.3311C207.039 25.7916 206.756 26.4163 206.756 27.0675V34.988C206.756 36.0456 207.497 36.9854 208.593 37.3161L212.128 38.3966ZM164.513 13.1518H175.58C177.131 13.1518 178.552 13.1518 179.706 13.2926C180.981 13.4498 182.324 13.8165 183.43 14.8315C184.54 15.8433 184.942 17.0712 185.113 18.2368C185.267 19.2944 185.267 20.5943 185.267 22.0088V22.3035C185.267 23.7212 185.267 25.0211 185.113 26.0754C184.942 27.2411 184.54 28.4689 183.43 29.4807C182.324 30.4957 180.981 30.8624 179.706 31.0196C178.549 31.1604 177.127 31.1604 175.58 31.1604H164.513C162.963 31.1604 161.541 31.1604 160.387 31.0196C159.113 30.8624 157.769 30.4957 156.663 29.4807C155.553 28.4689 155.151 27.2411 154.98 26.0754C154.826 25.0178 154.826 23.718 154.826 22.3035V22.0088C154.826 20.591 154.826 19.2911 154.98 18.2368C155.151 17.0712 155.553 15.8433 156.663 14.8315C157.769 13.8165 159.113 13.4498 160.387 13.2926C161.544 13.1518 162.966 13.1518 164.513 13.1518ZM160.47 18.299L160.459 18.3023L160.456 18.3121C160.378 18.4986 160.328 18.6933 160.305 18.8917C160.205 19.5793 160.198 20.5419 160.198 22.1561C160.198 23.7703 160.205 24.733 160.305 25.4206C160.328 25.6189 160.378 25.8137 160.456 26.0001L160.459 26.01L160.47 26.0132C160.674 26.0839 160.887 26.1301 161.104 26.1507C161.856 26.2424 162.909 26.249 164.674 26.249H175.419C177.184 26.249 178.237 26.2424 178.989 26.1507C179.206 26.1302 179.419 26.0839 179.623 26.0132L179.634 26.01L179.637 26.0001C179.715 25.8137 179.765 25.6189 179.788 25.4206C179.888 24.733 179.895 23.7703 179.895 22.1561C179.895 20.5419 179.888 19.5793 179.788 18.8917C179.765 18.6933 179.715 18.4985 179.637 18.3121L179.634 18.3023L179.623 18.299C179.419 18.2283 179.206 18.1821 178.989 18.1615C178.237 18.0698 177.184 18.0633 175.419 18.0633H164.674C162.909 18.0633 161.856 18.0698 161.104 18.1615C160.887 18.1821 160.674 18.2284 160.47 18.299ZM158.407 51.6247C158.407 50.9734 158.69 50.3488 159.194 49.8882C159.697 49.4277 160.381 49.169 161.093 49.169H179C179.712 49.169 180.396 49.4277 180.899 49.8882C181.403 50.3488 181.686 50.9734 181.686 51.6247C181.686 52.276 181.403 52.9006 180.899 53.3611C180.396 53.8217 179.712 54.0804 179 54.0804H161.093C160.381 54.0804 159.697 53.8217 159.194 53.3611C158.69 52.9006 158.407 52.276 158.407 51.6247Z"
                    fill="black"
                  />
                  <defs>
                    <linearGradient
                      id="logo-gradient"
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                    >
                      <stop offset="0%" stop-color="#C9C8C8">
                        <animate
                          attributeName="stop-color"
                          values="#C9C8C8; #FFFFFF; #C9C8C8"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </stop>
                      <stop offset="100%" stop-color="#FFFFFF">
                        <animate
                          attributeName="stop-color"
                          values="#FFFFFF; #C9C8C8; #FFFFFF"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p>Range Anxiety</p>
            </motion.div>
            <motion.div
              className="tile"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 60,
              }}
            >
              <svg
                width="216"
                height="235"
                viewBox="0 0 216 235"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M177.5 98.5V62H2.5V232H177.5V195"
                  stroke="url(#logo-gradient)"
                  stroke-width="5"
                />
                <path
                  d="M158.5 42.271H166.1V27.0815H158.5V42.271ZM173.7 57.4604H181.3V53.6631C181.3 52.5239 180.952 51.6062 180.255 50.91C179.558 50.2138 178.64 49.8657 177.5 49.8657C176.36 49.8657 175.442 50.2138 174.745 50.91C174.048 51.6062 173.7 52.5239 173.7 53.6631V57.4604ZM188.9 42.271H196.5V27.0815H188.9V42.271ZM177.5 76.4473C172.243 76.4473 167.303 75.4498 162.68 73.4549C158.057 71.4601 154.035 68.7551 150.615 65.34C147.195 61.9223 144.488 57.9035 142.494 53.2833C140.501 48.6632 139.503 43.7266 139.5 38.4736C139.5 33.2206 140.498 28.284 142.494 23.6639C144.491 19.0438 147.198 15.0249 150.615 11.6073C154.035 8.18966 158.057 5.48467 162.68 3.49232C167.303 1.49997 172.243 0.502532 177.5 0.5C182.757 0.5 187.697 1.49744 192.32 3.49232C196.943 5.4872 200.965 8.19219 204.385 11.6073C207.805 15.0249 210.513 19.0438 212.509 23.6639C214.506 28.284 215.503 33.2206 215.5 38.4736C215.5 43.7266 214.502 48.6632 212.506 53.2833C210.509 57.9035 207.802 61.9223 204.385 65.34C200.965 68.7576 196.943 71.4639 192.32 73.4587C187.697 75.4536 182.757 76.4498 177.5 76.4473ZM177.5 68.8525C185.987 68.8525 193.175 65.9096 199.065 60.0237C204.955 54.1377 207.9 46.9544 207.9 38.4736C207.9 29.9929 204.955 22.8095 199.065 16.9236C193.175 11.0377 185.987 8.09473 177.5 8.09473C169.013 8.09473 161.825 11.0377 155.935 16.9236C150.045 22.8095 147.1 29.9929 147.1 38.4736C147.1 46.9544 150.045 54.1377 155.935 60.0237C161.825 65.9096 169.013 68.8525 177.5 68.8525Z"
                  fill="black"
                />
                <defs>
                  <linearGradient
                    id="logo-gradient"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#C9C8C8">
                      <animate
                        attributeName="stop-color"
                        values="#C9C8C8; #FFFFFF; #C9C8C8"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="100%" stop-color="#FFFFFF">
                      <animate
                        attributeName="stop-color"
                        values="#FFFFFF; #C9C8C8; #FFFFFF"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </stop>
                  </linearGradient>
                </defs>
              </svg>

              <p>Cost Management Challenges</p>
            </motion.div>
          </div>
        </div>

        <div className="part_2">
          <img src="../assets/EV_users/ev_user_1.png" alt="" />
          <div className="points">
            <div className="text">
              <h1>Simplifying Charging with Cable Management</h1>
            </div>
            <div className="text odd">
              <h1>Eliminating Range Anxiety</h1>
            </div>
            <div className="text">
              <h1>Streamlined Cost Management</h1>
            </div>
          </div>
        </div>

        <div className="part_3">
          <h1>With our wireless charging platform solutions, EV users can:</h1>
          <div ref={tile3Ref} className="tiles">
            <motion.div
              className="tile"
              variants={tiles3Variant}
              initial="hidden"
              animate={tile3AnimationControls}
              transition={{
                type: "spring",
                stiffness: 50,
              }}
            >
              <svg
                width="36"
                height="30"
                viewBox="0 0 36 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.93522 0C3.57753 0 4.09823 0.514273 4.09823 1.14866V3.06309H8.86104V1.14866C8.86104 0.514273 9.38174 0 10.024 0C10.6664 0 11.1871 0.514273 11.1871 1.14866V3.10644C11.5736 3.18093 11.9438 3.35128 12.2507 3.61645C12.6814 3.9887 12.9593 4.52906 12.9593 5.13068V7.27485C12.9593 8.44514 12.42 9.53088 11.524 10.3052C10.6329 11.0753 9.4539 11.4866 8.25184 11.4866H7.64265V25.6534C7.64265 26.1079 7.85024 26.5804 8.28362 26.9549C8.72195 27.3337 9.34603 27.5678 10.024 27.5678H25.9739C26.6519 27.5678 27.276 27.3337 27.7143 26.9549C28.1477 26.5804 28.3553 26.1079 28.3553 25.6534V17.9957C28.3553 17.3613 28.876 16.847 29.5183 16.847C30.1606 16.847 30.6813 17.3613 30.6813 17.9957V25.6534C30.6813 26.8237 30.1421 27.9094 29.246 28.6838C28.355 29.4539 27.176 29.8652 25.9739 29.8652H10.024C8.82199 29.8652 7.643 29.4539 6.75192 28.6838C5.85589 27.9094 5.31662 26.8237 5.31662 25.6534V11.4866H4.70743C3.50537 11.4866 2.32637 11.0753 1.4353 10.3052C0.539262 9.53088 0 8.44514 0 7.27485V5.13068C0 4.52906 0.277863 3.98869 0.708604 3.61645C1.01543 3.35128 1.38569 3.18093 1.77221 3.10644V1.14866C1.77221 0.514273 2.29291 0 2.93522 0ZM2.32602 5.36041V7.27485C2.32602 7.72932 2.53362 8.2018 2.96699 8.57633C3.40533 8.95514 4.02941 9.18928 4.70743 9.18928H8.25184C8.92986 9.18928 9.55394 8.95514 9.99227 8.57633C10.4257 8.2018 10.6332 7.72932 10.6332 7.27485V5.36041H2.32602Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.2802 1.76659C31.8171 2.1146 31.873 2.65878 31.5207 3.1892L29.4868 6.43988L31.8777 6.4797L34.4678 6.4797C34.892 6.48593 35.3869 6.58622 35.5857 6.95643C35.7844 7.32663 35.6968 7.59315 35.464 7.94352L32.5626 12.3948C32.2103 12.9252 31.4892 13.0731 30.9522 12.7251C30.4152 12.3771 30.7285 11.6618 31.0808 11.1313L32.0051 9.67195L32.9294 8.21257L29.9805 8.17926L27.4945 8.14275C27.0703 8.13653 26.6976 8.14222 26.4986 7.74374C26.2991 7.34525 26.6641 6.69941 26.8968 6.34904L28.4908 4.15768L29.9805 2.16574C30.3328 1.63532 30.6824 1.56757 31.2802 1.76659Z"
                  fill="black"
                />
              </svg>

              <p>
                Wireless charging begins automatically when the vehicle is
                parked over the charging pad and stops when fully charged,
                ensuring worry-free and convenient charging every time. <br />
                <br /> Remote-enabled Charging: We enable EV users to control
                and monitor their charging sessions remotely, using our mobile
                app, ensuring a reliable and accessible charging routine.
              </p>
              <a href="">...more</a>
            </motion.div>
            <motion.div
              className="tile"
              variants={tiles3Variant}
              initial="hidden"
              animate={tile3AnimationControls}
              transition={{
                type: "spring",
                stiffness: 40,
                delay: 0.1,
              }}
            >
              <svg
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5861 0H12.1132C13.9938 0 15.5112 -1.87419e-08 16.704 0.147157C17.9421 0.298086 18.9849 0.625101 19.8131 1.38101C20.6413 2.13817 20.9962 3.09155 21.164 4.22352C21.3236 5.31399 21.3236 6.70128 21.3236 8.42063V18.8662H22.4531C24.1095 18.8662 25.4508 20.0925 25.4508 21.6069V21.6962C25.4508 21.9463 25.5595 22.1863 25.753 22.3632C25.9465 22.5401 26.2089 22.6395 26.4826 22.6395C26.7562 22.6395 27.0187 22.5401 27.2122 22.3632C27.4057 22.1863 27.5144 21.9463 27.5144 21.6962V16.7155L25.5031 16.103C24.887 15.9151 24.3511 15.5548 23.9714 15.0731C23.5917 14.5914 23.3873 14.0127 23.3872 13.4189V10.3764C23.3872 9.62588 23.7133 8.90608 24.2938 8.37536C24.8743 7.84464 25.6616 7.54649 26.4826 7.54649H27.5034C27.436 6.82897 27.0719 6.16192 26.4853 5.68125C26.3789 5.59701 26.2702 5.51523 26.1593 5.43599L24.463 4.19585C24.3553 4.11912 24.2654 4.02362 24.1983 3.91487C24.1313 3.80612 24.0886 3.68629 24.0726 3.56233C24.0566 3.43836 24.0676 3.31273 24.1051 3.19271C24.1426 3.07268 24.2058 2.96066 24.291 2.86312C24.3762 2.76558 24.4817 2.68448 24.6015 2.6245C24.7212 2.56453 24.8528 2.52687 24.9886 2.51372C25.1243 2.50058 25.2616 2.51219 25.3924 2.54791C25.5233 2.58362 25.645 2.64271 25.7507 2.72177L27.4703 3.97952C27.6382 4.10278 27.7537 4.18704 27.8624 4.27634C28.8792 5.10963 29.4931 6.27744 29.5697 7.52385C29.5779 7.65591 29.5779 7.79175 29.5779 7.98922V21.6962C29.5779 22.4467 29.2518 23.1665 28.6713 23.6972C28.0908 24.2279 27.3035 24.5261 26.4826 24.5261C25.6616 24.5261 24.8743 24.2279 24.2938 23.6972C23.7133 23.1665 23.3872 22.4467 23.3872 21.6962V21.6069C23.3872 21.3804 23.2888 21.1631 23.1136 21.003C22.9384 20.8428 22.7008 20.7528 22.4531 20.7528H21.3236V25.155H21.6676C21.9412 25.155 22.2036 25.2544 22.3971 25.4313C22.5906 25.6082 22.6993 25.8481 22.6993 26.0983C22.6993 26.3485 22.5906 26.5884 22.3971 26.7653C22.2036 26.9422 21.9412 27.0416 21.6676 27.0416H1.03179C0.758141 27.0416 0.495702 26.9422 0.302204 26.7653C0.108706 26.5884 0 26.3485 0 26.0983C0 25.8481 0.108706 25.6082 0.302204 25.4313C0.495702 25.2544 0.758141 25.155 1.03179 25.155H1.37572V8.42063C1.37572 6.70128 1.37572 5.31399 1.53668 4.22352C1.70176 3.09155 2.05945 2.13817 2.88626 1.38101C3.71444 0.623843 4.75723 0.299344 5.99538 0.147157C7.18813 -1.87419e-08 8.70554 0 10.5861 0ZM3.4393 25.155H19.2601V8.4898C19.2601 6.68493 19.2573 5.42467 19.1184 4.47507C18.9822 3.55188 18.7332 3.06388 18.3535 2.71548C17.9724 2.36708 17.4386 2.14069 16.4274 2.01617C15.3888 1.88914 14.0117 1.88662 12.0375 1.88662H10.6618C8.68766 1.88662 7.30919 1.88914 6.27052 2.01617C5.26075 2.14069 4.72697 2.36834 4.34589 2.71548C3.96482 3.06388 3.71719 3.55188 3.58099 4.47633C3.44205 5.42341 3.4393 6.68368 3.4393 8.4898V25.155ZM27.5144 14.7282V9.43311H26.4826C26.2089 9.43311 25.9465 9.5325 25.753 9.7094C25.5595 9.88631 25.4508 10.1262 25.4508 10.3764V13.4189C25.4508 13.8252 25.7356 14.1861 26.1565 14.3132L27.5144 14.7282ZM9.22419 5.03099H13.4752C14.0708 5.03099 14.617 5.03099 15.06 5.08508C15.5497 5.14545 16.0656 5.28632 16.4907 5.67622C16.9172 6.06486 17.0713 6.53652 17.1373 6.98428C17.1965 7.39053 17.1965 7.88986 17.1965 8.4332V8.5464C17.1965 9.09101 17.1965 9.59033 17.1373 9.99533C17.0713 10.4431 16.9172 10.9147 16.4907 11.3034C16.0656 11.6933 15.5497 11.8342 15.06 11.8945C14.6156 11.9486 14.0695 11.9486 13.4752 11.9486H9.22419C8.6285 11.9486 8.08234 11.9486 7.63936 11.8945C7.14961 11.8342 6.63371 11.6933 6.20862 11.3034C5.78214 10.9147 5.62806 10.4431 5.56203 9.99533C5.50287 9.58907 5.50287 9.08975 5.50287 8.5464V8.4332C5.50287 7.8886 5.50287 7.38927 5.56203 6.98428C5.62806 6.53652 5.78214 6.06486 6.20862 5.67622C6.63371 5.28632 7.14961 5.14545 7.63936 5.08508C8.08372 5.03099 8.62988 5.03099 9.22419 5.03099ZM7.671 7.00817L7.66688 7.00943L7.6655 7.01321C7.63582 7.08482 7.6164 7.15965 7.60772 7.23583C7.5692 7.49995 7.56645 7.86973 7.56645 8.4898C7.56645 9.10987 7.5692 9.47965 7.60772 9.74378C7.6164 9.81995 7.63582 9.89478 7.6655 9.9664L7.66688 9.97017L7.671 9.97143C7.74934 9.99857 7.83119 10.0163 7.91451 10.0243C8.20341 10.0595 8.60787 10.062 9.2861 10.062H13.4133C14.0915 10.062 14.4959 10.0595 14.7848 10.0243C14.8682 10.0163 14.95 9.99859 15.0283 9.97143L15.0325 9.97017L15.0338 9.9664C15.0636 9.89479 15.083 9.81996 15.0916 9.74378C15.1301 9.47965 15.1329 9.10987 15.1329 8.4898C15.1329 7.86973 15.1301 7.49995 15.0916 7.23583C15.083 7.15965 15.0636 7.08481 15.0338 7.01321L15.0325 7.00943L15.0283 7.00817C14.95 6.98103 14.8682 6.96327 14.7848 6.95535C14.4959 6.92013 14.0915 6.91762 13.4133 6.91762H9.2861C8.60787 6.91762 8.20341 6.92013 7.91451 6.95535C7.83119 6.96328 7.74934 6.98104 7.671 7.00817ZM6.87859 19.8095C6.87859 19.5594 6.9873 19.3194 7.18079 19.1425C7.37429 18.9656 7.63673 18.8662 7.91038 18.8662H14.789C15.0626 18.8662 15.3251 18.9656 15.5186 19.1425C15.7121 19.3194 15.8208 19.5594 15.8208 19.8095C15.8208 20.0597 15.7121 20.2997 15.5186 20.4766C15.3251 20.6535 15.0626 20.7528 14.789 20.7528H7.91038C7.63673 20.7528 7.37429 20.6535 7.18079 20.4766C6.9873 20.2997 6.87859 20.0597 6.87859 19.8095Z"
                  fill="black"
                />
              </svg>

              <p>
                We provide a user-friendly mobile app that offers real-time
                information on charging station locations and availability. It
                provides accurate range estimations, real-time charging station
                status updates, and recommends fast-charging stations,
                alleviating range anxiety for EV users.
              </p>
              <a href="">...more</a>
            </motion.div>
            <motion.div
              className="tile"
              variants={tiles3Variant}
              initial="hidden"
              animate={tile3AnimationControls}
              transition={{
                type: "spring",
                stiffness: 30,
                delay: 0.2,
              }}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.40374 16.2769H10.3652V10.358H7.40374V16.2769ZM13.3267 22.1958H16.2882V20.7161C16.2882 20.2722 16.1525 19.9146 15.881 19.6433C15.6096 19.372 15.2517 19.2364 14.8075 19.2364C14.3633 19.2364 14.0054 19.372 13.7339 19.6433C13.4625 19.9146 13.3267 20.2722 13.3267 20.7161V22.1958ZM19.2497 16.2769H22.2112V10.358H19.2497V16.2769ZM14.8075 29.5944C12.7591 29.5944 10.8341 29.2057 9.03256 28.4284C7.23099 27.651 5.66386 26.597 4.33119 25.2662C2.99851 23.9345 1.94373 22.3684 1.16683 20.5681C0.38993 18.7678 0.000987165 16.8442 0 14.7972C0 12.7503 0.388943 10.8266 1.16683 9.02629C1.94472 7.22597 2.9995 5.65993 4.33119 4.32818C5.66386 2.99643 7.23099 1.94238 9.03256 1.16602C10.8341 0.38966 12.7591 0.00098648 14.8075 0C16.8558 0 18.7808 0.388674 20.5824 1.16602C22.384 1.94337 23.9511 2.99742 25.2838 4.32818C26.6164 5.65993 27.6717 7.22597 28.4496 9.02629C29.2275 10.8266 29.6159 12.7503 29.615 14.7972C29.615 16.8442 29.226 18.7678 28.4481 20.5681C27.6702 22.3684 26.6155 23.9345 25.2838 25.2662C23.9511 26.598 22.384 27.6525 20.5824 28.4299C18.7808 29.2072 16.8558 29.5954 14.8075 29.5944ZM14.8075 26.635C18.1145 26.635 20.9156 25.4882 23.2107 23.1946C25.5059 20.9011 26.6535 18.1019 26.6535 14.7972C26.6535 11.4925 25.5059 8.69336 23.2107 6.39979C20.9156 4.10623 18.1145 2.95944 14.8075 2.95944C11.5005 2.95944 8.69939 4.10623 6.40423 6.39979C4.10908 8.69336 2.9615 11.4925 2.9615 14.7972C2.9615 18.1019 4.10908 20.9011 6.40423 23.1946C8.69939 25.4882 11.5005 26.635 14.8075 26.635Z"
                  fill="black"
                />
                <circle
                  cx="14.6152"
                  cy="15"
                  r="11.5"
                  stroke="white"
                  stroke-width="3"
                />
              </svg>

              <p>
                We benefit our customers with cost-efficient solutions. By
                dividing costs between the customer and provider, users only
                need to purchase the vehicle pad. Our high-efficiency technology
                minimizes electricity costs, offering affordable and efficient
                charging for electric vehicle owners.
              </p>
              <a href="">...more</a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
