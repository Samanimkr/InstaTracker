$.get("https://www.instagram.com/alexacea/", function (html) {
  var $html = $(html);
  console.log($html);
  console.log($html.find('.jWQqO').text());
});
