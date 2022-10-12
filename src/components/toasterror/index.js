import React from 'react';
import {toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Toastify = (context, type) => toast[type](context)
