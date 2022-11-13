




        var i = 0;
        var j = 0;
        function change() {
          var doc = document.getElementById("text");
          var color1 = ["blue", "red"];
          var color2=["yallow" , "green"]
          doc.style.backgroundColor = color1[i];
          i = (i + 1) % color1.length;
          doc.style.Color = color2[i];
          j = (j + 1) % color2.length;
        }
        setInterval(change, 1000);
       
          