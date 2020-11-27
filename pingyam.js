function yuepinzh(v) {
  text = document.getElementById("converttext").value;
  frompin = document.getElementById("frompin").value;
  topin = document.getElementById("topin").value;
  results = document.getElementById("results");
  container = document.getElementById("rcontainer");
  text = text.replace(/\n/g, " <br> ");
  punct = /[,\.\?\!@#\$%\^&\*\(\)\[\]\{\}":;~\-\+=<>]+/g;
  ptext = text.replace(punct, " @@@$&@@@ ");
  textsplit = ptext.split(/\s/);
  resarray = [];
  for (var i = 0; i < textsplit.length; i++) {
    syll = textsplit[i];
    ispy = false;
    if (!/@/.test(syll)) {
      for (var key in yuepin) {
        if (yuepin.hasOwnProperty(key)) {
          line = yuepin[key];
          linesplit = line.split(',');
          source = linesplit[frompin];
          target = linesplit[topin];
          if (source == syll.toLowerCase()) {
            resarray.push(target);
            ispy = true;
          }
        }
      }
    }
    if (ispy != true) {
      resarray.push(syll);
    }
  }
  container.style.display = "";
  results.value = resarray.join(" ").replace(/\s?@@@\s?/g, "").replace(/ ?<br> ?/g, "\n");
}
