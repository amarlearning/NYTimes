var xmlhttp = new XMLHttpRequest(),
    json;
    
    xmlhttp.onreadystatechange = function() {
        
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          
          json = JSON.parse(xmlhttp.responseText);
          var i = 1,j=0;
          
          
          while(json.results) {
              
            document.getElementById('container').innerHTML = document.getElementById('container').innerHTML +
            "<div class=\"box\">" +
            "<h3>"+ i + ".) <a href="+json.results[i-1].url+" target=\"_blank\">" +json.results[i-1].title+"</a></h3>" +
            "<p class=\"para\">"+json.results[i-1].abstract+"</p>" +
            "<ul>"+
            "<li> Category : "+json.results[i-1].section+"</li>"+
            "<li> Item Type : "+json.results[i-1].material_type_facet+" + "+json.results[i-1].item_type+"</li>"+
            "</ul><br>"+
            "<p class=\"author\">"+json.results[i-1].byline+"</p><br>" +
            "</div><br>";
            i++;
          }
          
        }
    }
    
    xmlhttp.open('GET', 'reference.json', true);
    xmlhttp.send();
