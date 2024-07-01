import React, { useEffect } from "react";
import { Container, Grid, Tooltip } from "@mui/material";
import html_5 from "../assets/images/html5.png";
import css_3 from "../assets/images/css3.png";
import javascript from "../assets/images/javascript.png";
import typescript from "../assets/images/typescript.png";
import mui from "../assets/images/metarial.png";
import boostrap from "../assets/images/bootstrap.png";
import xd from "../assets/images/adobe-xd.png";
import react from "../assets/images/react.png";
import vue from "../assets/images/vue.png";
import firebase from "../assets/images/firebase.png";
import photoshop from "../assets/images/photoshop.png";
import sass from "../assets/images/sass.png";
import next from "../assets/images/next.png";
import nuxt from "../assets/images/nuxt.png";
import figma from "../assets/images/figma.png";
import redux from "../assets/images/redux.png";


import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';




const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="bg_blur"></div>
        <Container>
          <div className="hero-wrapper" data-aos="fade-up" data-aos-duration="2000"> 
            <Grid container spacing={2}>
              <Grid item lg={7} md={6} xs={12}>
                <h1>
                  Your Vision, <br /> Our <span>Expertise.</span>
                </h1>
                <h2>
                  Collaborative Web Development for Businesses that
                  <span>Thrive.</span>
                </h2>
                <p>
                  Welcome to TEECTO IT! with our worldwide professional remote team,   We specialize in crafting custom  solutions that not only meet your business needs but also exceed your expectations. Utilizing our expertise in real-time web and software development, graphic design, UI/UX, and motion graphic. We are committed to setting the stage for your success. Let's work together to achieve your goals.</p>
              </Grid>
              <Grid item lg={5} md={6} xs={12}>
                <div className="hero-show">
                  <ul className="skills-list mb-2">
                    <li className="skill-card">
                      <Tooltip title="HTML - 5" placement="top">
                        <div className="card-icon">
                          <img src={html_5} alt="HTML5 logo" />
                        </div>
                      </Tooltip>
                    </li>
                    <li className="skill-card">
                      <Tooltip title="CSS - 3" placement="top">
                        <div className="card-icon">
                          <img src={css_3} alt="CSS3 logo" />
                        </div>
                      </Tooltip>
                    </li>
                    <li className="skill-card">
                      <Tooltip title="Javascript" placement="top">
                        <div className="card-icon">
                          <img src={javascript} alt="javascript logo" />
                        </div>
                      </Tooltip>
                    </li>
                  </ul>
                  <ul className="skills-list">
                    <li className="skill-card">
                      <Tooltip title="React JS" placement="top">
                        <div className="card-icon">
                          <img src={react} alt="React logo" />
                        </div>
                      </Tooltip>
                    </li>

                    <li className="skill-card">
                      <Tooltip title="Next JS" placement="top">
                        <div className="card-icon">
                          <img src={next} alt="Next logo" />
                        </div>
                      </Tooltip>
                    </li>
                    <li className="skill-card">
                      <Tooltip title="TypeScript" placement="top">
                        <div className="card-icon">
                          <img src={typescript} alt="TypeScript logo" />
                        </div>
                      </Tooltip>
                    </li>
                    <li className="skill-card">
                      <Tooltip title="Redux" placement="top">
                        <div className="card-icon">
                          <img src={redux} alt="redux logo" />
                        </div>
                      </Tooltip>
                    </li>
                    <li className="skill-card">
                      <Tooltip title="Nuxt JS" placement="top">
                        <div className="card-icon">
                          <img src={nuxt} alt="Nuxt logo" />
                        </div>
                      </Tooltip>
                    </li>
                    <li className="skill-card">
                      <Tooltip title="Bootstrap 5" placement="top">
                        <div className="card-icon">
                          <img src={boostrap} alt="Bootstrap logo" />
                        </div>
                      </Tooltip>
                    </li>

                    
                    <li className="skill-card">
                      <Tooltip title="Metarial UI" placement="top">
                        <div className="card-icon">
                          <img src={mui} alt="Metarial logo" />
                        </div>
                      </Tooltip>
                    </li>
                    <li className="skill-card">
                      <Tooltip title="Firebase" placement="top">
                        <div className="card-icon">
                          <img src={firebase} alt="Firebase logo" />
                        </div>
                      </Tooltip>
                    </li>
                    <li className="skill-card">
                      <Tooltip title="SASS" placement="top">
                        <div className="card-icon">
                          <img src={sass} alt="SASS logo" />
                        </div>
                      </Tooltip>
                    </li>

                    <li className="skill-card">
                      <Tooltip title="Vue JS" placement="top">
                        <div className="card-icon">
                          <img src={vue} alt="Vue logo" />
                        </div>
                      </Tooltip>
                    </li> 
                    <li className="skill-card">
                      <Tooltip title="Figma" placement="top">
                        <div className="card-icon">
                          <img src={figma} alt="Figma logo" />
                        </div>
                      </Tooltip>
                    </li>
                    <li className="skill-card">
                      <Tooltip title="Adobe Photoshop" placement="top">
                        <div className="card-icon">
                          <img src={photoshop} alt="pugJs logo" />
                        </div>
                      </Tooltip>
                    </li>
                    <li className="skill-card">
                      <Tooltip title="Adobe XD" placement="top">
                        <div className="card-icon">
                          <img src={xd} alt="Angular logo" />
                        </div>
                      </Tooltip>
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>

            <div className="hero-social-list">
               <ul>
                 <li><a href="#"> <FacebookIcon/> </a></li>
                 <li><a href="#"> <TwitterIcon/> </a></li>
                 <li><a href="#"> <LinkedInIcon/> </a></li>
               </ul>
            </div>
          </div>
        </Container>
        <div class="svg_bg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="682"
            viewBox="0 0 1920 682"
            fill="none"
          >
            <path
              d="M-59.4556 72.9067L-179.502 81.3727L-169.993 90.8765L-43.3115 81.4273M-59.4556 72.9067L-43.3115 81.4273M-59.4556 72.9067L49.4148 65.2333M-43.3115 81.4273L70.8893 72.8802L49.4148 65.2333M49.4148 65.2333L30.0985 58.3512L-73.8815 65.3152L-59.4556 72.9347L49.4148 65.2333ZM148.314 58.2409L49.1422 65.2322L70.6409 72.9063L174.133 65.1776M148.314 58.2409L174.133 65.1776M148.314 58.2409L239.019 51.8506L268.305 58.1591L174.133 65.1776M-4.54311 101.884L-25.1694 90.9877L-159.231 101.638L-146.881 113.982L-4.54311 101.884ZM-4.54311 101.884L-146.91 113.982L-132.676 128.21L19.0608 114.337L-4.54311 101.884ZM-4.5428 101.881L-25.1691 90.9844L94.9042 81.4533L122.006 91.1209L-4.5428 101.881ZM-4.5428 101.881L19.061 114.335L152.794 102.127L122.006 91.1486L-4.5428 101.881ZM202.763 72.8788L94.6024 81.4814L121.704 91.1491L234.947 81.536M202.763 72.8788L234.947 81.536M202.763 72.8788L300.708 65.0953L336.852 72.8786L234.947 81.536M234.947 81.536L121.704 91.1761L152.466 102.155L271.256 91.3127M234.947 81.536L271.256 91.3127M234.947 81.536L336.879 72.8788L377.451 81.6179L271.256 91.3127M292.893 40.7899L212.272 46.17L238.826 51.8777L322.127 46.0061M292.893 40.7899L322.127 46.0061M292.893 40.7899L367.424 35.7927L398.869 40.5992L322.127 46.0061M322.071 45.9799L238.8 51.8788L268.086 58.1601L354.199 51.7423M322.071 45.9799L354.199 51.7423M322.071 45.9799L398.813 40.5733L433.238 45.8168L354.199 51.7423M354.172 51.7403L268.06 58.1581L300.516 65.1494L389.606 58.0488M354.172 51.7403L389.606 58.0488M354.172 51.7403L433.212 45.815L471.022 51.6046L389.606 58.0488M389.552 58.0521L300.46 65.1254L336.606 72.9087L428.839 65.0708M389.552 58.0521L428.839 65.0708M389.552 58.0521L470.94 51.5793L512.657 57.9425L428.839 65.0708M505.8 40.4084L433.02 45.843L470.831 51.6053L545.497 45.6791M505.8 40.4084L545.497 45.6791M505.8 40.4084L573.063 35.3833L614.235 40.2171L545.497 45.6791M545.414 45.653L470.748 51.6065L512.494 57.9697L589.044 51.4426M545.414 45.653L589.044 51.4426M545.414 45.653L614.126 40.1917L659.231 45.4898L589.044 51.4426M312.426 102.375L187.628 114.719L228.416 129.275L359.746 115.102M312.426 102.375L359.746 115.102M312.426 102.375L423.129 91.4239L475.23 102.621L359.746 115.102M359.663 115.046L228.336 129.247L276.064 146.288L414.469 129.793M359.663 115.046L414.469 129.793M359.663 115.046L475.121 102.592L534.924 115.427L414.469 129.793M414.469 129.793L276.037 146.289L332.644 166.498L478.725 147.081L414.469 129.793ZM414.469 129.793L478.725 147.08L604.318 130.366L534.95 115.455L414.469 129.793ZM589.074 51.469L512.521 57.9687L558.829 65.042L637.266 57.8595M589.074 51.469L637.266 57.8595M589.074 51.469L659.258 45.488L708.872 51.3323L637.266 57.8595M637.183 57.8315L558.72 65.014L610.409 72.8792L690.676 64.9594M637.183 57.8315L690.676 64.9594M637.183 57.8315L708.763 51.3041M690.676 64.9594L763.569 57.7218L708.763 51.3041M708.763 51.3041L763.595 57.7212L830.039 51.1669M708.763 51.3041L774.331 45.2953M690.65 64.9582L610.383 72.9053L668.412 81.7537L750.426 72.878M690.65 64.9582L750.426 72.878M690.65 64.9582L763.539 57.7491L824.466 64.8769L750.426 72.878M115.749 165.377L-73.0067 187.88L-44.2403 216.637L161.1 189.327M115.749 165.377L161.1 189.327M115.749 165.377L276.392 146.233L332.999 166.443L161.1 189.327M161.046 189.246L-44.2402 216.555L-8.28625 252.468L216.589 218.549M161.046 189.246L216.589 218.549M161.046 189.246L332.916 166.388L401.11 190.721L216.589 218.549M216.533 218.577L-8.36893 252.496L37.8568 298.704L286.2 255.336M216.533 218.577L286.2 255.336M216.533 218.577L401.054 190.721L484.846 220.626L286.2 255.336M554.867 167.533L400.673 190.801L484.437 220.732L647.046 192.33M554.867 167.533L647.046 192.33M554.867 167.533L685.567 147.815L782.527 168.653L647.046 192.33M646.827 192.249L484.245 220.623L589.62 258.256L760.343 222.754M646.827 192.249L760.343 222.754M646.827 192.249L782.309 168.599L899.65 193.806L760.343 222.754M713.053 115.837L603.854 130.338L685.295 147.844L797.554 130.912M713.053 115.837L797.554 130.912M713.053 115.837L808.837 103.084L894.978 116.22L797.554 130.912M980.162 103.386L893.367 91.8611L808.648 103.113L894.786 116.276L980.162 103.386ZM980.162 103.386L894.76 116.276L994.999 131.542L1080.21 116.658L980.162 103.386ZM980.162 103.382L893.367 91.8571L968.826 81.8071L1055.59 91.9936L980.162 103.382ZM980.162 103.382L1080.21 116.655L1154.77 103.655L1055.57 91.9943L980.162 103.382ZM797.527 130.939L685.241 147.871L782.199 168.708L896.891 148.663M797.527 130.939L896.891 148.663M797.527 130.939L894.952 116.218L995.188 131.512L896.891 148.663M1154.52 103.602L1079.96 116.629L1196.49 132.114L1268.94 117.039M1154.52 103.602L1268.94 117.039M1154.52 103.602L1220.31 92.1324L1332.24 103.876L1268.94 117.039M376.002 302.721L99.4105 360.235L185.715 446.48L496.54 366.353L376.002 302.721ZM376.002 302.721L496.539 366.352L726.766 306.98L590.138 258.205L376.002 302.721ZM1196.62 132.115L1112.88 149.539L1253.99 171.059L1334.15 150.385M1196.62 132.115L1334.15 150.385M1196.62 132.115L1269.07 117.068L1402.59 132.744L1334.15 150.385M1336.75 227.261L1227.55 264.457L1467.67 316.072L1563.18 267.707M1336.75 227.261L1563.18 267.707M1336.75 227.261L1425.29 197.084L1638.42 229.582L1563.18 267.707M1562.58 267.571L1467.01 315.909L1794.23 386.259L1859.85 320.661M1562.58 267.571L1859.85 320.661M1562.58 267.571L1637.85 229.473L1909.66 270.902L1859.85 320.661M1498.4 172.204L1425.16 197.165L1638.34 229.664L1699.18 198.858M1498.4 172.204L1699.18 198.858M1498.4 172.204L1560.01 151.204L1749.37 173.434L1699.18 198.858M669.039 15.6379L616.557 19.1335L653.412 22.6292L706.66 18.8878M669.039 15.6379L706.66 18.8878M669.039 15.6379L718.298 12.3329L756.52 15.3643L706.66 18.8878M677.619 35.1627L614.152 40.1877L659.231 45.4858L723.789 39.9965M677.619 35.1627L723.789 39.9965M677.619 35.1627L736.411 30.4924L783.402 34.9439L723.789 39.9965M790.889 26.152L736.275 30.4943L783.267 34.9458L838.451 30.2758M790.889 26.152L838.451 30.2758M790.889 26.152L841.731 22.1107L889.677 25.9068L838.451 30.2758M797.391 18.615L756.301 15.3652L803.073 12.0607L844.572 15.092L797.391 18.615ZM797.391 18.615L841.704 22.1373L889.213 18.3685L844.545 15.0914L797.391 18.615ZM849.243 3.5935L808.044 6.35178L847.058 8.97353L888.476 6.05137M849.243 3.5935L888.476 6.05137M849.243 3.5935L888.175 1L927.57 3.29405L888.476 6.05137M888.722 11.8152L846.949 8.97503L888.394 6.05286M888.722 11.8152L930.332 8.70191M888.722 11.8152L933.555 14.8457L975.245 11.5412L930.302 8.70102L888.722 11.8152ZM888.394 6.05286L930.332 8.70191M888.394 6.05286L927.49 3.29441L969.479 5.77956L930.332 8.70191M723.845 39.999L659.287 45.4882L708.872 51.3052L774.467 45.3244M723.845 39.999L774.467 45.3244M723.845 39.999L783.429 34.9461L834.764 39.8072L774.467 45.3244M774.331 45.2953L830.039 51.1669M774.331 45.2953L834.628 39.8062L890.88 45.1316L830.039 51.1669M946.695 39.6171L890.144 34.7286L941.641 30.0314L998.275 34.5102M946.695 39.6171L998.275 34.5102M946.695 39.6171L890.744 45.1613L952.706 51.0329L1008.74 44.9701M946.695 39.6171L1008.74 44.9701M998.275 34.5102L1060.18 39.4256L1008.74 44.9701M830.01 51.1699L763.568 57.7242L824.466 64.8794L891.616 57.615M830.01 51.1699L891.616 57.615M830.01 51.1699L890.88 45.1343L952.842 51.0059L891.616 57.615M1008.58 44.9683L952.57 51.0038L1021.12 57.5035L1076.93 50.8673M1008.58 44.9683L1076.93 50.8673M1008.58 44.9683L1060.05 39.3968L1127.99 44.7768L1076.93 50.8673M998.14 34.5358L941.506 30.0297L989.287 25.6602M998.14 34.5358L1045.87 29.8113M998.14 34.5358L1060.05 39.4248L1107.48 34.2906M989.287 25.6602L1045.87 29.8113M989.287 25.6602L1033.79 21.6189L1090.16 25.4149L1045.87 29.8113M1045.87 29.8113L1107.48 34.2906M1075.21 17.822L1033.71 21.6181L1090.07 25.4415L1131.27 21.345M1075.21 17.822L1131.27 21.345M1075.21 17.822L1114.03 14.2726L1169.68 17.5498M1131.27 21.345L1169.68 17.5498M1169.68 17.5498L1131.25 21.3458L1191.95 25.1691L1229.79 21.1L1169.68 17.5498ZM1107.48 34.2906L1045.87 29.8126L1090.13 25.4157L1151.35 29.5668L1107.48 34.2906ZM1191.81 25.1683L1151.13 29.5652L1217.85 34.0712L1257.76 29.3194M1191.81 25.1683L1257.76 29.3194M1191.81 25.1683L1229.65 21.0723L1294.78 24.923L1257.76 29.3194M1036.44 72.8242L968.825 81.8091L1055.59 91.9957L1122.69 81.8637M1036.44 72.8242L1122.69 81.8637M1036.44 72.8242L1097.39 64.7138L1182.77 72.8248M1122.69 81.8637L1182.77 72.8248M1122.69 81.8637L1220.53 92.1595L1278.99 81.9456L1182.77 72.8248M1182.66 72.8253L1097.28 64.7416L1152.5 57.3953L1236.81 64.6597L1182.66 72.8253ZM1182.66 72.8253L1278.91 81.9735L1331.23 72.8247M1182.66 72.8253L1236.78 64.6591M1236.78 64.6591L1331.23 72.8247M1236.78 64.6591L1285.79 57.285L1378.3 64.604L1331.23 72.8247M1330.98 72.7964L1278.67 81.9451L1387.95 92.2955L1437.48 81.9997M1330.98 72.7964L1437.48 81.9997M1330.98 72.7964L1378.08 64.5766L1481.79 72.7969L1437.48 81.9997M1330.25 50.5681L1248.61 44.6146L1202.63 50.732L1285.66 57.2863L1330.25 50.5681ZM1330.25 50.5681L1285.63 57.2859L1378.17 64.6322L1420.76 57.1767L1330.25 50.5681ZM1330.25 50.5667L1248.61 44.6132L1290.77 38.9874L1370.98 44.4221L1330.25 50.5667ZM1330.25 50.5667L1420.76 57.1755L1459.5 50.4027L1370.95 44.4218L1330.25 50.5667ZM1257.82 29.3199L1217.88 34.0718L1290.88 39.0149L1329.73 33.8533M1257.82 29.3199L1329.73 33.8533M1257.82 29.3199L1294.81 24.9238L1365.62 29.0749L1329.73 33.8533M1370.9 44.4483L1290.71 39.0136L1329.56 33.8521L1408.27 38.7952M1370.9 44.4483L1408.27 38.7952M1370.9 44.4483L1459.44 50.4286L1494.82 44.2566L1408.27 38.7952M1408.27 38.7977L1329.56 33.8546L1365.43 29.0754L1442.67 33.6089L1408.27 38.7977ZM1408.27 38.7977L1494.82 44.2594L1527.22 38.6063L1442.64 33.6086L1408.27 38.7977ZM1461.41 117.423L1402.26 132.661L1560.01 151.177L1612.52 133.289M1461.41 117.423L1612.52 133.289M1461.41 117.423L1513.02 104.122L1657.82 117.859L1612.52 133.289M1437.61 82.0276L1388.06 92.3234L1513.26 104.203L1558.73 92.4872M1437.61 82.0276L1558.73 92.4872M1437.61 82.0276L1481.9 72.7964L1599.02 82.0817L1558.73 92.4872M1697.24 104.449L1558.4 92.4332L1598.72 82.0555L1731.96 92.597M1697.24 104.449L1731.96 92.597M1697.24 104.449L1657.74 117.913L1827.23 133.971L1858.1 118.322M1697.24 104.449L1858.1 118.322M1731.96 92.597L1884.96 104.722L1858.1 118.322M1857.66 118.296L1826.79 133.917L2027.73 152.979L2046.17 134.573M1857.66 118.296L2046.17 134.573M1857.66 118.296L1884.57 104.696L2061.99 118.734L2046.17 134.573M1762.62 82.1363L1634.62 72.7964L1598.59 82.0817L1731.85 92.6233L1762.62 82.1363ZM1762.62 82.1363L1908.45 92.7871L1929.35 82.2182L1790.07 72.7964L1762.62 82.1363ZM1696.17 56.9313L1666.94 64.4687L1790.07 72.7982L1814.72 64.4141M1696.17 56.9313L1814.72 64.4141M1696.17 56.9313L1722.73 50.1037L1836.98 56.8219M1814.72 64.4141L1836.98 56.8219M1814.72 64.4141L1790.05 72.8261L1929.35 82.2479L1947.98 72.7988L1814.72 64.4141ZM1836.98 56.8219L1814.72 64.4131L1947.98 72.7972L1964.68 64.3312L1836.98 56.8219ZM1908.07 92.7624L1884.44 104.724L2061.91 118.761L2075.68 104.997M1908.07 92.7624L2075.68 104.997M1908.07 92.7624L1929 82.1926L2087.76 92.9253L2075.68 104.997M-179.529 81.3974L-188 72.9314L-73.8817 65.312L-59.4558 72.9314L-179.529 81.3974ZM49.1692 65.2617L29.8528 58.3797L125.066 52.0165L148.341 58.2704L49.1692 65.2617ZM148.341 58.2669L125.066 52.013L212.491 46.1687L239.072 51.8764L148.341 58.2669ZM-159.231 101.666L-170.023 90.8786L-43.3382 81.4295L-25.1425 91.0152L-159.231 101.666ZM-25.1426 91.013L-43.3384 81.4273L70.86 72.9067L94.9307 81.4819L-25.1426 91.013ZM94.6292 81.5101L70.5879 72.9075L174.077 65.1788L202.819 72.9075L94.6292 81.5101ZM202.819 72.9057L174.077 65.177L268.279 58.1585L300.762 65.1225L202.819 72.9057ZM398.704 40.5989L367.259 35.8197L436.408 31.1771L469.657 35.6013L398.704 40.5989ZM433.046 45.8411L398.65 40.5976L469.574 35.5999L505.826 40.4064L433.046 45.8411ZM469.657 35.5992L436.408 31.175L500.691 26.8874L535.415 30.9565L469.657 35.5992ZM505.826 40.4096L469.574 35.6031L535.335 30.9604L573.089 35.3847L505.826 40.4096ZM-116.065 144.76L-132.676 128.183L19.0341 114.309L46.301 128.702L-116.065 144.76ZM46.3009 128.7L19.0339 114.307L152.741 102.1L188.012 114.69L46.3009 128.7ZM187.684 114.719L152.44 102.129L271.2 91.2868L312.456 102.374L187.684 114.719ZM312.455 102.373L271.2 91.2854L377.368 81.5904L423.156 91.422L312.455 102.373ZM-96.5036 164.366L-116.119 144.758L46.245 128.7L78.1009 145.523L-96.5036 164.366ZM-72.9532 187.855L-96.5036 164.314L78.0742 145.47L115.776 165.352L-72.9532 187.855ZM78.1009 145.524L46.2449 128.701L187.956 114.691L228.744 129.247L78.1009 145.524ZM115.776 165.35L78.0744 145.468L228.691 129.192L276.419 146.233L115.776 165.35ZM377.176 81.6182L336.633 72.9064L428.866 65.0685L472.688 72.9064L377.176 81.6182ZM422.884 91.4494L377.096 81.5907L472.578 72.8788L521.755 81.6452L422.884 91.4494ZM472.687 72.9076L428.865 65.0697L512.713 57.9418L559.021 65.0151L472.687 72.9076ZM521.754 81.644L472.578 72.8776L558.912 64.985L610.601 72.8776L521.754 81.644ZM474.928 102.648L422.828 91.4508L521.728 81.6739L577.27 91.5873L474.928 102.648ZM534.622 115.454L474.819 102.618L577.161 91.558L640.435 102.864L534.622 115.454ZM577.271 91.586L521.728 81.6726L610.575 72.8788L668.601 81.7272L577.271 91.586ZM640.435 102.866L577.161 91.5595L668.492 81.7007L734.117 91.6961L640.435 102.866ZM733.924 91.722L668.273 81.7267L750.29 72.851L817.443 81.7813L733.924 91.722ZM817.444 81.7845L750.29 72.8542L824.3 64.8797L892.382 72.8542L817.444 81.7845ZM400.726 190.802L332.534 166.442L478.589 147.024L554.894 167.534L400.726 190.802ZM554.893 167.536L478.589 147.026L604.179 130.313L685.623 147.818L554.893 167.536ZM99.4367 360.123L37.8299 298.539L286.063 255.226L375.945 302.636L99.4367 360.123ZM375.946 302.638L286.064 255.228L484.683 220.545L590.055 258.15L375.946 302.638ZM604.017 130.391L534.622 115.48L640.462 102.863L713.216 115.863L604.017 130.391ZM713.215 115.865L640.462 102.865L734.143 91.723L809.002 103.111L713.215 115.865ZM808.81 103.167L733.951 91.7513L817.47 81.7832L893.53 91.8878L808.81 103.167ZM893.53 91.8859L817.47 81.7813L892.409 72.851L968.989 81.8359L893.53 91.8859ZM899.295 193.862L781.981 168.656L896.646 148.61L1015.13 169.775L899.295 193.862ZM1015.13 169.774L896.646 148.609L994.943 131.458L1112.94 149.455L1015.13 169.774ZM1112.75 149.509L994.751 131.511L1079.96 116.628L1196.49 132.112L1112.75 149.509ZM314.886 575.434L185.552 446.204L496.264 366.132L666.144 455.762L314.886 575.434ZM666.144 455.764L496.264 366.134L726.438 306.817L910.495 372.497L666.144 455.764ZM726.329 307.116L589.7 258.314L760.452 222.811L903.831 261.345L726.329 307.116ZM910.058 372.686L726.003 306.951L903.476 261.235L1090.02 311.376L910.058 372.686ZM903.831 261.344L760.452 222.81L899.759 193.861L1044.75 224.995L903.831 261.344ZM1090.02 311.375L903.476 261.234L1044.39 224.912L1227.96 264.347L1090.02 311.375ZM530.279 790.934L314.75 575.487L666.034 455.788L923.555 591.709L530.279 790.934ZM959.891 1220L529.732 790.117L922.845 591.22L1358.88 821.305L959.891 1220ZM923.555 591.71L666.035 455.789L910.442 372.522L1171.98 465.867L923.555 591.71ZM1358.88 821.304L922.846 591.219L1171.27 465.539L1571.84 608.479L1358.88 821.304ZM1171.57 466.142L909.978 372.716L1089.96 311.378L1342.87 379.379L1171.57 466.142ZM1571.59 608.941L1170.86 465.838L1342.16 379.157L1704.15 476.462L1571.59 608.941ZM1342.87 379.376L1089.96 311.375L1227.93 264.375L1468.02 315.963L1342.87 379.376ZM1704.15 476.46L1342.16 379.155L1467.37 315.797L1794.53 386.092L1704.15 476.46ZM1044.39 225.075L899.405 193.914L1015.27 169.827L1159.08 195.498L1044.39 225.075ZM1227.6 264.459L1044.04 224.969L1158.7 195.419L1336.8 227.235L1227.6 264.459ZM1159.08 195.501L1015.27 169.829L1113.08 149.484L1254.16 171.004L1159.08 195.501ZM1336.8 227.234L1158.7 195.418L1253.8 170.921L1425.32 197.084L1336.8 227.234ZM1425.18 197.139L1253.64 170.976L1333.8 150.33L1498.43 172.178L1425.18 197.139ZM1498.43 172.179L1333.8 150.331L1402.26 132.689L1560.04 151.205L1498.43 172.179ZM1909.66 271.038L1637.76 229.582L1698.63 198.776L1948.72 231.957L1909.66 271.038ZM1948.72 231.96L1698.63 198.778L1748.85 173.353L1980.19 200.499L1948.72 231.96ZM535.444 30.9575L500.72 26.8884L560.659 22.8739L596.586 26.6426L535.444 30.9575ZM573.09 35.3831L535.361 30.9588L596.504 26.6439L635.409 30.7131L573.09 35.3831ZM596.587 26.6458L560.659 22.8771L616.693 19.1357L653.548 22.6313L596.587 26.6458ZM635.409 30.7141L596.504 26.6449L653.466 22.6304L693.299 26.3991L635.409 30.7141ZM693.19 26.3984L653.356 22.6297L706.578 18.8882L747.147 22.3839L693.19 26.3984ZM747.147 22.3812L706.577 18.8856L756.437 15.3626L797.527 18.6125L747.147 22.3812ZM614.235 40.2158L573.09 35.382L635.382 30.712L677.699 35.1635L614.235 40.2158ZM677.699 35.1619L635.382 30.7104L693.299 26.3955L736.494 30.4919L677.699 35.1619ZM736.358 30.5203L693.163 26.4239L747.121 22.382L790.969 26.1781L736.358 30.5203ZM790.969 26.1817L747.121 22.3857L797.527 18.617L841.84 22.1399L790.969 26.1817ZM756.381 15.3922L718.162 12.3609L764.497 9.24754L803.154 12.0878L756.381 15.3922ZM803.154 12.0905L764.497 9.25023L808.127 6.32811L847.141 8.97716L803.154 12.0905ZM844.572 15.0936L803.074 12.0622L847.059 8.97627L888.832 11.7892L844.572 15.0936ZM889.541 25.9328L841.594 22.1368L889.104 18.3407L937.242 21.8637L889.541 25.9328ZM889.213 18.371L844.545 15.0938L888.805 11.7894L933.638 14.8208L889.213 18.371ZM937.242 21.865L889.103 18.342L933.528 14.8191L981.773 18.0963L937.242 21.865ZM981.694 18.0958L933.445 14.8186L975.136 11.5141L1023.36 14.5455L981.694 18.0958ZM975.245 11.543L930.303 8.70276L969.48 5.78059L1014.4 8.42964L975.245 11.543ZM1023.36 14.5466L975.136 11.5152L1014.29 8.40192L1062.42 11.2421L1023.36 14.5466ZM834.628 39.8342L783.293 34.9731L838.481 30.2758L890.251 34.7546L834.628 39.8342ZM890.771 45.1588L834.519 39.8061L890.144 34.7265L946.695 39.6149L890.771 45.1588ZM890.25 34.7559L838.481 30.2771L889.733 25.9076L941.751 30.0313L890.25 34.7559ZM892.382 72.8508L824.327 64.849L891.481 57.6119L959.974 64.7944L892.382 72.8508ZM959.974 64.7964L891.481 57.6139L952.679 51.005L1021.25 57.5047L959.974 64.7964ZM941.615 30.0602L889.597 25.9364L937.298 21.8673L989.426 25.6907L941.615 30.0602ZM989.426 25.6894L937.298 21.866L981.83 18.0973L1033.9 21.6202L989.426 25.6894ZM1033.82 21.6216L981.747 18.0986L1023.41 14.5757L1075.35 17.8255L1033.82 21.6216ZM1075.35 17.8245L1023.41 14.5746L1062.45 11.2429L1114.14 14.3016L1075.35 17.8245ZM1127.86 44.8036L1059.91 39.4235L1107.34 34.2893L1174.74 39.205L1127.86 44.8036ZM1174.74 39.2071L1107.34 34.2914L1151.22 29.5395L1217.93 34.0729L1174.74 39.2071ZM1151.27 29.5678L1090.05 25.444L1131.25 21.3476L1191.95 25.1709L1151.27 29.5678ZM969.015 81.8375L892.438 72.8527L960 64.7962L1036.63 72.8527L969.015 81.8375ZM1036.63 72.8537L960 64.7973L1021.28 57.5056L1097.59 64.7427L1036.63 72.8537ZM1097.45 64.7675L1021.17 57.5304L1076.99 50.8668L1152.69 57.4212L1097.45 64.7675ZM1152.69 57.42L1076.99 50.8657L1128.02 44.7756L1202.96 50.7291L1152.69 57.42ZM1236.81 64.6611L1152.5 57.3967L1202.8 50.7059L1285.79 57.2875L1236.81 64.6611ZM1154.77 103.629L1055.59 91.9946L1122.69 81.8627L1220.53 92.1585L1154.77 103.629ZM1332.24 103.874L1220.31 92.1312L1278.78 81.9173L1388.03 92.2678L1332.24 103.874ZM1202.82 50.7327L1127.88 44.8065L1174.77 39.208L1248.78 44.6153L1202.82 50.7327ZM1248.78 44.6142L1174.77 39.2069L1217.96 34.0727L1290.96 39.0158L1248.78 44.6142ZM1481.66 72.8227L1377.92 64.6024L1420.54 57.1469L1521.49 64.5205L1481.66 72.8227ZM1521.49 64.5219L1420.54 57.1483L1459.28 50.4028L1557.5 57.039L1521.49 64.5219ZM1557.44 57.0686L1459.23 50.4051L1494.61 44.233L1590.17 50.2685L1557.44 57.0686ZM1590.17 50.2666L1494.61 44.2311L1527.03 38.578L1620.06 44.0399L1590.17 50.2666ZM1402.59 132.714L1269.07 117.038L1332.38 103.875L1461.74 117.475L1402.59 132.714ZM1461.74 117.477L1332.38 103.877L1388.16 92.2973L1513.35 104.15L1461.74 117.477ZM1657.76 117.884L1512.94 104.147L1558.4 92.4315L1697.24 104.448L1657.76 117.884ZM1749.31 173.406L1559.98 151.176L1612.49 133.288L1791.41 152.077L1749.31 173.406ZM1980.14 200.469L1748.82 173.323L1790.95 152.021L2006.04 174.607L1980.14 200.469ZM1791.41 152.078L1612.49 133.289L1657.79 117.859L1827.26 133.917L1791.41 152.078ZM2006.04 174.609L1790.95 152.024L1826.82 133.89L2027.73 152.925L2006.04 174.609ZM1598.89 82.109L1481.76 72.8237L1521.6 64.5488L1634.89 72.8237L1598.89 82.109ZM1634.89 72.8222L1521.6 64.5473L1557.63 57.0644L1667.27 64.4654L1634.89 72.8222ZM1762.62 82.1352L1634.62 72.7953L1666.97 64.4385L1790.1 72.768L1762.62 82.1352ZM1667.21 64.493L1557.58 57.0648L1590.31 50.2647L1696.45 56.9555L1667.21 64.493ZM1696.45 56.9573L1590.31 50.2664L1620.17 44.0671L1723 50.1026L1696.45 56.9573ZM1884.85 104.75L1731.83 92.6249L1762.62 82.1379L1908.45 92.7888L1884.85 104.75ZM2087.78 92.9505L1928.97 82.2177L1947.63 72.7685L2098.47 82.2724L2087.78 92.9505ZM2098.46 82.2742L1947.63 72.7704L1964.35 64.3044L2108 72.7704L2098.46 82.2742Z"
              stroke="url(#paint0_linear_1552_2290)"
              stroke-opacity="0.16"
              stroke-miterlimit="10"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_1552_2290"
                x1="960"
                y1="1"
                x2="960"
                y2="1220"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0"></stop>
                <stop offset="0.401042" stop-color="white"></stop>
                <stop
                  offset="0.588542"
                  stop-color="white"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;