import fechaYHora from './media/fechaHora.png';

const fechaHora = () => {
    return (
        <div id="panelFechaHora">
            <div class="grid grid-cols-1 justify-items-center" >
                <p></p>
                <img class='lg:scale-50 md: w-screen' src={fechaYHora} alt="Fecha y Hora" />
            </div>
        </div>
    );
};

export default fechaHora;