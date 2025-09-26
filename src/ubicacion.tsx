const direccion = () => {
    return (
        <div id="panelDireccion" >
            <div class="embed-map-responsive">
                <div class="flex flex-col items-center justify-center">
                    <iframe class="border-none justify-items-center border rounded-full w-9/12 lg:scale-y-120 hover:animate-pulse border-4 border-b-blue-950" src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Bosque%20de%20San%20juan%20de%20Arag%C3%B3n&t=&z=14&ie=UTF8&iwloc=B&output=embed"></iframe>
                    <a href="https://sprunkiretake.net" style="font-size:2px!important;color:gray!important;position:absolute;bottom:0;left:0;z-index:1;max-height:1px;overflow:hidden">sprunki retake</a></div>
                    {/* <style>.embed-map-responsive{position:relative;text-align:right;width:100%;height:0;padding-bottom:66.66666666666666%;}.embed-map-container{overflow:hidden;background:none!important;width:100%;height:100%;position:absolute;top:0;left:0;}.embed-map-frame{width:100%!important;height:100%!important;position:absolute;top:0;left:0;} */}
                    {/* </style> */}
            </div>
        </div> 
    );
}

export default direccion;