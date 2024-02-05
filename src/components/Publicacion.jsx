import React from 'react';
import Logo from '../images/casa.jpg';
import foto from '../images/empresa.jpeg';

const Publicacion = () => {
    return (
        <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto my-auto ml-50 mb-6 mt-6">
            <a href="#">
                <div className="inline-flex items-center px-3 py-2">
                    <img className="w-10 h-10 rounded-full ml-2" src={foto} alt="" />
                    <div className="font-medium dark:text-white">
                        <div>Jese Leos</div>
                        <div className="text-sm text-gray-500 dark:text-graymr-6-400">Joined in August 2014</div>
                    </div>
                </div>

                <img className="rounded-t-lg" src={Logo} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Price: 360.000.000$</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Se vende casa de 400mt² con 2 plantas 5 habitaciones y 3 baños. Ubicada en Serena del mar </p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default Publicacion;
