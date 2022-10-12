import React from 'react';
import {ToastContainer, toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Toastify = (context, type) => toast[type](context)



// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
//
// import 'react-toastify/dist/ReactToastify.css';
// // minified version is also included
// // import 'react-toastify/dist/ReactToastify.min.css';
//
// function Aaaa(){
//   const notify = () => toast("Wow so easy !");
//
//   return (
//     <div>
//       <button onClick={notify}>Notify !</button>

//     </div>
//   );
// }
// export default Aaaa