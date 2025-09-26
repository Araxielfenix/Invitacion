import nivelImg from './media/Nivel.png';
import babyShower from './media/BS.png';
import jugador from './media/jugador.png';

const titulo = () => {
    return (
        <div id="textoTitulo">
            <div class="grid grid-cols-1 justify-items-center">
                <img class='w-fit md: w-screen' src={nivelImg} alt="¡Nivel Desbloqueado!"/>
                <img class='w-fit md: w-screen' src={babyShower} alt="Baby shower" />
                <img class='w-fit md: w-screen' src={jugador} alt="Jugador 3" />
            </div>
        </div>
    );
};
        
export default titulo;