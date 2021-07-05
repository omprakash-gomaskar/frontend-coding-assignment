import React from 'react';
import 'tailwindcss/tailwind.css';

interface IconProps {
    color?: string,
}

export const Icon = ({ color }: IconProps) => {
    return (
        <>
            <svg className="pr-1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>Icon@2x</title>
                <defs>
                    <path fill={color} d="M10,0 C4.48421053,0 0,4.48421053 0,10 C0,15.5157895 4.48421053,20 10,20 C15.5157895,20 20,15.5157895 20,10 C20,4.48421053 15.5157895,0 10,0 Z M9.57894737,13.0736842 C9.64210526,13.2421053 9.14736842,13.7368421 9.09473684,13.7684211 C9.05263158,13.7894737 8.13684211,13.2842105 7.97894737,13.2210526 C7.82105263,13.1578947 7.47368421,12.0105263 7.47368421,12.0105263 L7.13684211,11.6842105 C7.13684211,11.6842105 6.35789474,11.1052632 6.28421053,11.0736842 C6.22105263,11.0526316 6.07368421,9.95789474 6.02105263,9.86315789 C5.97894737,9.76842105 5.67368421,9.45263158 5.58947368,9.4 C5.50526316,9.33684211 5.46315789,8.37894737 5.46315789,8.37894737 C5.46315789,8.37894737 5.52631579,7.83157895 5.8,7.41052632 C6.08421053,7 6.06315789,6.30526316 5.97894737,6.15789474 C5.89473684,6.01052632 5.34736842,6.22105263 5.34736842,6.22105263 C5.34736842,6.22105263 4.92631579,6.02105263 4.88421053,6.04210526 L4.6,5.51578947 C4.6,5.51578947 2.90526316,5.38947368 2.92631579,5.34736842 C2.92631579,5.34736842 5.64210526,1.03157895 11.2631579,1.67368421 L11.3578947,1.67368421 C11.6631579,1.69473684 11.9368421,1.69473684 12.1052632,1.97894737 C12.1368421,2.04210526 12.7052632,2.53684211 12.6947368,2.53684211 L11.1263158,2.53684211 L10.8,2.82105263 L12.2210526,3.67368421 C12.0315789,3.72631579 11.6315789,3.85263158 11.3578947,3.93684211 C11.1789474,4 11.0210526,4.07368421 10.8526316,4.2 L10.2842105,4.62105263 L9.78947368,5.36842105 L10.5578947,5.93684211 C10.5578947,5.93684211 11.4526316,6.61052632 11.4947368,6.64210526 C11.5368421,6.66315789 11.7157895,6.07368421 11.7157895,6.07368421 C11.6947368,5.61052632 11.6736842,5.16842105 11.6526316,4.70526316 C11.7894737,4.75789474 11.9368421,4.8 12.0736842,4.84210526 L12.6947368,4.77894737 C12.6947368,4.77894737 13.3157895,5.26315789 13.3894737,5.31578947 C13.4526316,5.37894737 13.7368421,5.97894737 13.7368421,5.97894737 C13.7263158,6.07368421 13.6631579,6.6 13.7789474,6.61052632 C13.8,6.61052632 13.8315789,6.6 13.8421053,6.58947368 C14.0631579,6.48421053 14.2631579,6.36842105 14.4631579,6.24210526 C14.5684211,6.17894737 14.7578947,6 14.8842105,6 C14.9263158,6 14.7052632,6.50526316 14.6736842,6.54736842 C14.6526316,6.57894737 14.1263158,7.45263158 13.8947368,7.83157895 C13.8315789,7.94736842 13.7473684,8.05263158 13.6526316,8.13684211 L12.9157895,8.88421053 L13.1684211,9.31578947 L12.5473684,10.0421053 C12.4947368,10.1052632 12.4421053,10.1578947 12.3789474,10.2210526 L11.7157895,10.8 C11.7157895,10.8 11,10.9684211 10.9578947,10.9684211 C10.9157895,10.9684211 10.3789474,11.0947368 10.3789474,11.0947368 C10.3789474,11.0947368 9.35789474,10.9894737 9.22105263,11.5263158 C9.12631579,12.0842105 9.53684211,12.9052632 9.57894737,13.0736842 Z M17.0736842,10.4631579 C17.2,10.4421053 16.7368421,11.0631579 16.7052632,11.1578947 C16.6842105,11.2526316 16.1894737,11.7578947 16.1894737,11.7578947 L15.3894737,11.8631579 C15.5263158,11.1263158 16.1368421,10.5578947 16.8842105,10.4842105 C16.9789474,10.4736842 17.0526316,10.4631579 17.0736842,10.4631579 Z M12.5368421,12.9684211 L12.1578947,12.4210526 C12.1263158,12.3789474 12.3052632,12.1789474 12.3052632,12.1789474 C12.3052632,12.1789474 13.7263158,11.9684211 13.8631579,11.9894737 C14,12.0105263 14.2210526,12.4210526 14.2210526,12.4210526 C14.2210526,12.4210526 13.7263158,13.0631579 13.5578947,13.0631579 C13.4105263,13.0526316 12.5368421,12.9684211 12.5368421,12.9684211 Z M12.9157895,14.8947368 C12.9157895,14.8947368 12.7368421,14.9684211 12.5789474,15.0526316 C12.4,15.1368421 12.2,15.2105263 12.1578947,15.1578947 C12.1368421,15.0947368 12,15.0210526 11.7789474,14.8421053 C11.5578947,14.6631579 11.2526316,14.5157895 11.0947368,14.4421053 C10.9368421,14.3684211 10.5789474,14.1052632 10.5263158,13.9789474 C10.4947368,13.8947368 10.6631579,13.6526316 10.7052632,13.5157895 C10.7263158,13.3894737 10.6842105,13.0105263 10.7789474,13.0526316 C10.8631579,13.0947368 11.0421053,12.9894737 11.2421053,13.0526316 C11.4210526,13.1157895 11.7052632,13.2631579 11.7684211,13.3789474 C11.8315789,13.4947368 11.9684211,13.7473684 12.1263158,13.8421053 C12.2842105,13.9473684 12.5684211,14.0631579 12.5473684,14.2421053 C12.5263158,14.4210526 12.7684211,14.6631579 12.7684211,14.6631579 L12.9157895,14.8947368 Z M13.1894737,17.5684211 C12.4105263,17.2315789 12.2210526,16.8315789 12.2842105,16.7578947 C12.3473684,16.6842105 12.8315789,16.2842105 12.9789474,16.0631579 C13.1263158,15.8526316 13.9052632,14.9684211 13.9052632,14.9684211 L13.6631579,14.4947368 L14.3263158,14.1052632 C14.5368421,13.9789474 14.7684211,13.9052632 15.0105263,13.8842105 L15.6631579,13.8210526 C15.7052632,13.8210526 15.7368421,13.8105263 15.7789474,13.8105263 L16.8315789,13.7894737 C16.8315789,13.7894737 17.7789474,13.5368421 17.6421053,13.8105263 C15.4631579,17.7368421 13.1894737,17.5684211 13.1894737,17.5684211 Z" id="path-1"></path>
                </defs>
                <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Icon">
                        <mask id="mask-2" fill="white">
                            <use xlinkHref="#path-1"></use>
                        </mask>
                        <use fill="#FAFAFA" fillRule="nonzero" xlinkHref="#path-1"></use>
                    </g>
                </g>
            </svg>
        </>
    );
};
