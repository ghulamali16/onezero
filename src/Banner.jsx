import './BannerStyles.css'
import $ from 'jquery';

$(document).ready(function(){
  $("#search").focus(function() {
    $(".search-box").addClass("border-searching");
    $(".search-icon").addClass("si-rotate");
  });
  $("#search").blur(function() {
    $(".search-box").removeClass("border-searching");
    $(".search-icon").removeClass("si-rotate");
  });
  $("#search").keyup(function() {
      if($(this).val().length > 0) {
        $(".go-icon").addClass("go-in");
      }
      else {
        $(".go-icon").removeClass("go-in");
      }
  });
  $(".go-icon").click(function(){
    $(".search-form").submit();
  });
});
const Banner = () => {
  return (
<main>
	<div className="container">
		<h1>Fancy Search Box</h1>
		<h2>Try below!</h2>
		<div className="search-box">
			<div className="search-icon"><i className="fa fa-search search-icon"></i></div>
			<form action="" className="search-form">
				<input type="text" placeholder="Search" id="search" autocomplete="off"/>
			</form>
			<svg className="search-border" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 671 111" >
          <path className="border" d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"/>
          <path className="border" d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"/>
        </svg>
			<div className="go-icon"><i className="fa fa-arrow-right"></i></div>
		</div>

	</div>
</main>
  )
}

export default Banner
