const direccion = () => {
  return (
    <div id="panelDireccion">
      <div class="embed-map-responsive">
        <a href="https://maps.app.goo.gl/rvVUUMnxubZ79ZQ76">
          <div
            class="
                flex items-center justify-center 
                w-full h-full 
                max-w-lg mx-auto aspect-video lg:scale-y-120 
                overflow-hidden 
                [clip-path:polygon(50%_0%,70%_50%,50%_100%,30%_50%)]
                hover:animate-pulse border-4 border-b-blue-950
            "
          >
            <iframe
              class="w-full h-full border-none justify-items-center"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Bosque%20de%20San%20juan%20de%20Arag%C3%B3n&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            ></iframe>
          </div>
        </a>
      </div>
    </div>
  );
};

export default direccion;
