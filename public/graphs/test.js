  const capture = () => {
    const body = document.querySelector('td.pvtRendererArea');
    body.id = 'capture';
    html2canvas(document.querySelector("#capture")).then(canvas => {
      document.body.appendChild(canvas);
    }).then(() => {
      var canvas = document.querySelector('canvas');
      canvas.style.display = 'none';
      var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      var a = document.createElement("a");
      a.setAttribute('download', 'pivotTable.png');
      a.setAttribute('href', image);
      a.click();
      canvas.parentNode.removeChild(canvas);
    });
  };


  const btn = document.getElementById('btn');
  btn.addEventListener('click', capture)
