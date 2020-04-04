$("#itemList").on("click", "li", function(){
  $(this).toggleClass("done");
});

$("#itemList").on("click", "span", function(e) {
  $(this).parent().fadeOut(400, function(){
    $(this).remove();
  });
  e.stopPropagation();
});

$("#newItemInput").keyup(function(e){
  if(e.which === 13){
    var todoText = $(this).val();
    $("#itemList").append(`<li><span><i class='fa fa-trash-alt'></i></span> ${todoText}</li>`);
    $(this).val("");
  }
});

$("#inputToggle").on("click", function () {
  $("#newItemInput").fadeToggle();
});