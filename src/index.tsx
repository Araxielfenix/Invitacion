/* @refresh reload */
import './index.css';
import 'solid-devtools';
import { render } from 'solid-js/web';
import Titulo from './titulo';
import fechaHora from './fechaHora';
import Direccion from './ubicacion';
import Confirmar from './confirmacion';

const root = document.getElementById('root');

render(() => <Titulo />, root);
render(() => fechaHora, root);
render(() => <Direccion />, root);
render(() => <Confirmar />, root);