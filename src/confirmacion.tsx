const confirmar = () => {
    return (
        <div id="panelConfirmar">
            <div class="flex flex-col items-center shrink">
                <p></p>
                <a href="https://wa.link/ernb2i">
                    <button
                        class="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[24px] bg-gradient-to-t from-[#4822b0] to-[#c35ff5] active:scale-95"
                    >
                        <span
                            class="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#5631fc] text-white rounded-[24px] bg-gradient-to-t from-[#4d2ce2] to-[#bb40f8] text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="w-5 h-5 text-[#ffffff]"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <path
                                    d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z"
                                ></path></svg><h4 class="text-[#ffffff]">Confirma tu asistencia</h4></span>
                    </button>
                </a>
                <p></p>
            </div>
        </div>
    );
};

export default confirmar;