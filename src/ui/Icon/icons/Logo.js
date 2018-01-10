import React from 'react'
import createIcon from './createIcon'


export default createIcon(
  function ({pathStyle, title, ...props}) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 75" {...props}>
        <title>{title || 'Curls'}</title>
        <path
          style={pathStyle}
          d="M30.9494,4.68036a10.10636,10.10636,0,0,0-1.54925.91406,1.06183,1.06183,0,0,0-.51465.77979.97081.97081,0,0,0,.89844,1.084,1.28293,1.28293,0,0,0,.62695-.16113,13.80953,13.80953,0,0,1,8.85937-1.53662A12.15829,12.15829,0,0,1,49.63159,19.60858C48.763,25.6344,42.43006,32.07466,37.89392,30.12946a25.94217,25.94217,0,0,0-13.45862-3.83,24.26692,24.26692,0,1,0,.0835,48.53369c6.69433,0,12.71924-1.92383,16.98682-6.27539a2.40657,2.40657,0,0,0,.58593-1.50586,2.32326,2.32326,0,0,0-3.76562-1.8418A22.4663,22.4663,0,0,1,24.4353,69.89667a19.16333,19.16333,0,0,1,0-38.3252,21.80366,21.80366,0,0,1,7.8263,1.27832c3.48295,1.50737,6.11834,3.69574,9.56823,4.19239A18.48391,18.48391,0,1,0,47.03784.44354C42.4353-.2193,38.03949.23584,34.5105,2.60492ZM60.00171,20.85663A15.63444,15.63444,0,0,1,44.10663,34.35168c6.5318-1.40954,12.29927-6.62032,13.30458-13.60182C58.50509,13.1594,53.70184,5.94073,46.8739,3.13281A15.57978,15.57978,0,0,1,60.00171,20.85663Zm-8.1709-.83057a14.66635,14.66635,0,0,0-9.594-15.67254c.1336.01623.27655.02758.405.04608,7.68261,1.10644,13.369,8.192,12.26253,15.87467-1.0434,7.2417-7.65951,12.47481-14.3265,12.12142h0C45.60032,32.898,51.20288,25.52069,51.83081,20.02606Z"
        />
        <path
          style={pathStyle}
          d="M75.15552,40.94354a2.5749,2.5749,0,0,0-2.59424,2.67774V58.18182c0,6.27539-2.76123,11.71485-9.53955,11.71485-8.95361,0-9.874-4.60254-9.874-10.87793V43.62128A2.64364,2.64364,0,0,0,50.47,40.94354a2.5749,2.5749,0,0,0-2.59424,2.67774V58.59979c0,9.79,3.26367,16.2334,14.14209,16.2334a12.71917,12.71917,0,0,0,10.96192-4.93652l.16748,2.17578a2.343,2.343,0,0,0,4.686,0V43.62128A2.64393,2.64393,0,0,0,75.15552,40.94354Z"
        />
        <path
          style={pathStyle}
          d="M103.36987,40.52557h-.335c-2.42578,0-8.45117.167-11.37988,5.02051l-.58594-2.25976c-.335-1.25489-1.0039-2.34278-2.34277-2.34278a2.28791,2.28791,0,0,0-2.34326,2.34278V71.73749a2.57489,2.57489,0,0,0,2.59423,2.67773A2.64393,2.64393,0,0,0,91.655,71.73749V57.76288c0-5.94141,2.0918-11.96582,11.21289-11.96582h.502a2.62465,2.62465,0,0,0,2.67774-2.59375A2.69568,2.69568,0,0,0,103.36987,40.52557Z"
        />
        <path
          style={pathStyle}
          d="M115.17261,27.88544a2.57483,2.57483,0,0,0-2.59473,2.67822V71.73749c0,1.50586,1.08789,3.0957,2.59473,3.0957a3.02591,3.02591,0,0,0,2.67773-3.0957V30.56366A2.64373,2.64373,0,0,0,115.17261,27.88544Z"
        />
        <path
          style={pathStyle} d="M129.58179,49.72968c0-2.25879,1.0039-3.93262,7.78125-3.93262a51.40511,51.40511,0,0,1,7.02929.502,2.56061,2.56061,0,0,0,2.51075-2.42676,2.68585,2.68585,0,0,0-2.00879-2.51074,49.838,49.838,0,0,0-8.45117-.83594c-7.61524,0-12.13282,2.92871-12.13282,8.78614,0,11.88183,20.25,9.37207,20.25,16.90332,0,3.68164-6.27636,3.68164-8.61914,3.68164A28.58681,28.58681,0,0,1,127.49,68.22284a2.43834,2.43834,0,0,0-.75391-.167,2.41238,2.41238,0,0,0-2.34277,2.42675,2.37291,2.37291,0,0,0,1.42285,2.0918,25.9083,25.9083,0,0,0,10.293,2.25879c6.27539,0,13.72266-2.25879,13.72266-9.53906C149.83179,55.83807,129.58179,55.25311,129.58179,49.72968Z"
        />
      </svg>
    )
  }
)
