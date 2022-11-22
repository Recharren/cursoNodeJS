(() => {
    console.log("Inicio Ejecución");
  
    function uno() {
    //   Operaciones sincronas y bloqueantes
      console.log("Tarea 1");
      dos();
      console.log("Tarea 3");
    }
  
    function dos() {
      console.log("Tarea 2");
    }
  
    uno();
    console.log("Fin Ejecución");
  })();