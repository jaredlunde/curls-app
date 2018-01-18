import React from 'react'
import createIcon from './createIcon'


export default createIcon(
  function ({pathStyle, title, ...props}) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 75" {...props}>
        <title>{title || 'Curls'}</title>
        <path
          style={pathStyle}
          d="M20.31726,75a20.08328,20.08328,0,1,1-.06773-40.16645,21.31466,21.31466,0,0,1,11.12684,3.1666,3.20463,3.20463,0,0,0,1.19776.22194c3.19265,0,7.05945-4.26068,7.66172-8.44112a9.42046,9.42046,0,0,0-8.0311-10.734,12.27166,12.27166,0,0,0-1.75053-.12608,10.12426,10.12426,0,0,0-5.15054,1.31759,1.5579,1.5579,0,0,1-.66843.1912l-.1141-.00781a1.32376,1.32376,0,0,1-.83359-.44962,1.15,1.15,0,0,1-.2558-.91226,1.29421,1.29421,0,0,1,.6231-.93831,8.20015,8.20015,0,0,1,1.28373-.756l2.85712-1.66613a13.018,13.018,0,0,1,7.38507-2.03291,21.43311,21.43311,0,0,1,3.03791.22819,15.4509,15.4509,0,0,1,10.19947,6.02841A15.24112,15.24112,0,0,1,51.76594,31.346,15.43818,15.43818,0,0,1,34.2783,44.38439a15.12251,15.12251,0,0,1-5.13646-2.04646c-.86381-.47306-1.75679-.96175-2.72219-1.37959a17.26659,17.26659,0,0,0-6.17012-1.0003,15.09532,15.09532,0,0,0,0,30.18943,17.85793,17.85793,0,0,0,10.982-3.70008A2.30781,2.30781,0,0,1,34.978,68.26982a2.36123,2.36123,0,0,1-.56788,1.48587C31.03825,73.19737,26.1753,75,20.31726,75ZM41.902,18.00966a13.89353,13.89353,0,0,1,5.48032,12.81642,13.63749,13.63749,0,0,1-7.384,10.03953A12.33439,12.33439,0,0,0,41.902,18.00966Zm-3.67613.92216A12.41667,12.41667,0,0,1,42.86374,30.228a14.49521,14.49521,0,0,1-5.04686,8.73079,11.28976,11.28976,0,0,0,6.69007-8.6391A10.949,10.949,0,0,0,38.22586,18.93182Z"
        />
        <path
          style={pathStyle}
          d="M71.16785,38.27959a2.7474,2.7474,0,0,0-2.768,2.85713v15.536c0,6.69579-2.94622,12.49965-10.17864,12.49965-9.55344,0-10.53551-4.91087-10.53551-11.60667V39.1103c0-1.60674-1.24986,1.19571-2.85712,1.19571a2.7474,2.7474,0,0,0-2.768,2.85712V57.11869c0,10.4459,3.48232,17.32092,15.08951,17.32092a13.57125,13.57125,0,0,0,11.69629-5.26724l.1787,2.70291A2.67006,2.67006,0,0,0,71.80948,74.349c1.42857,0,3.19052-.84263,3.2287-2.47371V41.13672C74.025,39.53,72.77459,38.27959,71.16785,38.27959Z"
        />
        <path
          style={pathStyle}
          d="M101.27237,37.83362h-.3574c-2.5883,0-9.01734.17818-12.14226,5.35685l-.62519-2.41115c-.3574-1.33895-1.07116-2.49973-2.49972-2.49973a2.4412,2.4412,0,0,0-2.50025,2.49973V71.51788a2.7474,2.7474,0,0,0,2.768,2.85712,2.821,2.821,0,0,0,2.85712-2.85712V56.22571c0-6.33944,2.23193-12.76745,11.96408-12.76745h.53558a2.80047,2.80047,0,0,0,2.85712-2.76751A2.87627,2.87627,0,0,0,101.27237,37.83362Z"
        />
        <path
          style={pathStyle}
          d="M112.85311,24.34669a2.71517,2.71517,0,0,0-2.73614,2.82419v43.9397a3.25852,3.25852,0,0,0,2.91829,3.25381c1.58794,0,2.64153-1.66588,2.64153-3.25381V27.17088A2.78783,2.78783,0,0,0,112.85311,24.34669Z"
        />
        <path
          style={pathStyle}
          d="M128.22708,47.93135c0-2.41011,1.07116-4.19607,8.30254-4.19607a54.84886,54.84886,0,0,1,7.50021.53558,2.73216,2.73216,0,0,0,2.67895-2.58934,2.86578,2.86578,0,0,0-2.14337-2.67894,53.17631,53.17631,0,0,0-9.01734-.89194c-8.1254,0-12.94562,3.12491-12.94562,9.37474,0,12.67784,21.6066,9.99993,21.6066,18.03572,0,3.92829-6.69684,3.92829-9.19656,3.92829a30.50164,30.50164,0,0,1-9.01734-1.786,2.6019,2.6019,0,0,0-.80441-.17817,2.574,2.574,0,0,0-2.49972,2.58933,2.53188,2.53188,0,0,0,1.51817,2.23193,27.644,27.644,0,0,0,10.98252,2.41011c6.6958,0,14.642-2.41011,14.642-10.17811C149.83369,54.449,128.22708,53.82482,128.22708,47.93135Z"
        />
      </svg>
    )
  }
)
