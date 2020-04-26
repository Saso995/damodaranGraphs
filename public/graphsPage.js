$(document).ready(() => {
  $.ajax({
      url: '../graphsPage' + window.location.search,
      type: 'GET',
      dataType : 'json', // this URL returns data in JSON format
      success: (data) => {
        $('#title').html(data[0].title)
        for (i = 0; i < 5; i++) {
          $('#container').append(`
              <div class="col-md-3 col-sm-6 col-padding animate-box" data-animate-effect="fadeInLeft">
                  <div class="blog-entry">
                    <a href=${data[0].link1} class="blog-img"><img src="${data[0].img}" class="img-responsive" alt="Free HTML5 Bootstrap Template by FreeHTML5.co"></a>
                    <div class="desc">
                      <h3><a href=${data[0].link1}>${dato[0].titleG}</a></h3>
                      <span><small>by Admin </small> / <small> Web Design </small> / <small> <i class="icon-comment"></i> 14</small></span>
                      <p>Design must be functional and functionality must be translated </p>
                      <a href=${data[0].link1} class="lead">Read More <i class="icon-arrow-right3"></i></a>
                    </div>
                  </div>
              </div>`
          )
        }
      },
      error: (data) => {}
    })
/*
    for (i = 0; i < 5; i++) {
      $('#container').append(`
          <div class="col-md-3 col-sm-6 col-padding animate-box" data-animate-effect="fadeInLeft">
              <div class="blog-entry">
                <a  id = "link1" href="#" class="blog-img"><img id = "img" src="images/img-1.jpg" class="img-responsive" alt="Free HTML5 Bootstrap Template by FreeHTML5.co"></a>
                <div class="desc">
                  <h3><a id = "link2" href="#">Historical Returns on Stocks, Bonds and Bills - United States</a></h3>
                  <span><small>by Admin </small> / <small> Web Design </small> / <small> <i class="icon-comment"></i> 14</small></span>
                  <p>Design must be functional and functionality must be translated </p>
                  <a id = "link3" href="#" class="lead">Read More <i class="icon-arrow-right3"></i></a>
                </div>
              </div>
          </div>`
      )
    }
*/
})
