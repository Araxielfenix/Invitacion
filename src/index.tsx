/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import 'solid-devtools';
import Titulo from './titulo';
import fechaHora from './fechaHora';
import Direccion from './ubicacion';
import Mesa from './mesaDeRegalos';

const root = document.getElementById('root');

render(() => <Titulo />, root);
render(() => fechaHora, root);
render(() => <Direccion />, root);
render(() => <Mesa />, root);