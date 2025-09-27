import fechaYHora from './media/fechaHora.png';

const fechaHora = () => {
    return (
        <div id="panelFechaHora">
            <div class="flex flex-col items-center shrink" >
                <img class='lg:scale-50 md: w-screen' src={fechaYHora} alt="Fecha y Hora" />
            </div>
        </div>
    );
};

export default fechaHora;