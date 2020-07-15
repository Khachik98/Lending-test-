$(document).ready(function () {
  $(function () {
    if (YMaps.location.region !== "Россия") {
      $(".title-small span").text("Страны СНГ");
    } else {
      $(".title-small span").text(YMaps.location.city);
    }
  });

  //=============================
  let d = new Date();
  let getTime = new Date(d.getTime() - 0);
  let monthA = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  $(".x_price_previous").text(
    getTime.getDate() + 2 + "." + monthA[getTime.getMonth()] + "." + getTime.getFullYear()
  );

  //=============================
  $(function () {
    let quantity = localStorage.getItem("quantity");
    $(".lastpack").text(quantity);
    let interval = Math.floor(Math.random() * 5000) + 10000;
    let sI = setInterval(function () {
      quantity -= 1;
      $(".lastpack").text(quantity);
      if (quantity === 7) {
        clear();
      } else if (quantity < 60) {
        localStorage.setItem("quantity", quantity);
      } else {
        localStorage.setItem("quantity", 60);
      }
    }, interval);

    function clear() {
      clearInterval(sI);
      quantity = 7;
    }
  });

  //=============================

  $(function () {
    $(".maskphone").mask("+(39)");
  });
});

//===============================
