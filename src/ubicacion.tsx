const direccion = () => {
  return (
    <div id="panelDireccion">
      <div class="embed-map-responsive">
        <a href="https://maps.app.goo.gl/38Z9bV3B1qm3gzTEA">
          <div
            class="
                flex items-center justify-center 
                w-full h-full 
                max-w-lg mx-auto aspect-video lg:scale-y-120 
                overflow-hidden 
                [clip-path:polygon(50%_0%,70%_50%,50%_100%,30%_50%)]
                hover:animate-pulse
            "
          >
            <iframe
              class="w-screen h-full border-none justify-items-center"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2993.994315767661!2d-99.07934886643783!3d19.458477306755217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fbd511dfda3b%3A0x266c54c1b8d4aa02!2s%C3%81rea%20de%20Palapas%20-%20Bosque%20de%20San%20Juan%20de%20Arag%C3%B3n!5e0!3m2!1sen!2sus!4v1759202260265!5m2!1sen!2sus" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </a>
      </div>
    </div>
  );
};

export default direccion;
