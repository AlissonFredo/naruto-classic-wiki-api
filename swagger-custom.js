// swagger-custom.js
(function() {
    var script1 = document.createElement("script");
    script1.src = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-bundle.min.js";
    document.head.appendChild(script1);
  
    script1.onload = function() {
      var script2 = document.createElement("script");
      script2.src = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-standalone-preset.min.js";
      document.head.appendChild(script2);
  
      script2.onload = function() {
        var script3 = document.createElement("script");
        script3.src = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-init.js";
        document.head.appendChild(script3);
      };
    };
  })();