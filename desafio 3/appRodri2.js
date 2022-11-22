(() => {
    console.log("Inicio programa");
  
    function uno() {
      console.log("sincronico 1 --> "+__dirname);
      dos();
      console.log("sincronico 2 --> "+__filename);
    }
  
    function dos() {
      setTimeout(()=>{
        console.log("Asincronico 1 --> "+__dirname);
        console.log("Aincronico 2 --> "+__filename);
      },1000);
    }
  
    uno();
    console.log("Fin Programa");
    console.log("----------------");
  })();