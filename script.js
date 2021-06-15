$(document).ready(function() {
      $("a#trigger").toggle(function() {
        // Отображаем скрытый блок
        $("DIV#box").fadeOut(0); // fadeIn - плавное появление
        return false; // не производить переход по ссылке
      },
      function() {
        // Скрываем блок
        $("DIV#box").fadeIn(0); // fadeOut - плавное исчезновение
        return false; // не производить переход по ссылке
      }); // end of toggle()
    }); // end of ready()

    $(document).ready(function() {
          $("a#trigger2").toggle(function() {
            // Отображаем скрытый блок
            $("DIV#box2").fadeIn(0); // fadeIn - плавное появление
            return false; // не производить переход по ссылке
          },
          function() {
            // Скрываем блок
            $("DIV#box2").fadeOut(0); // fadeOut - плавное исчезновение
            return false; // не производить переход по ссылке
          }); // end of toggle()
        }); // end of ready()

        $(document).ready(function() {
              $("a#trigger3").toggle(function() {
                // Отображаем скрытый блок
                $("DIV#box3").fadeIn(0); // fadeIn - плавное появление
                return false; // не производить переход по ссылке
              },
              function() {
                // Скрываем блок
                $("DIV#box3").fadeOut(0); // fadeOut - плавное исчезновение
                return false; // не производить переход по ссылке
              }); // end of toggle()
            }); // end of ready()

            $(document).ready(function() {
                  $("a#trigger4").toggle(function() {
                    // Отображаем скрытый блок
                    $("DIV#box4").fadeIn(0); // fadeIn - плавное появление
                    return false; // не производить переход по ссылке
                  },
                  function() {
                    // Скрываем блок
                    $("DIV#box4").fadeOut(0); // fadeOut - плавное исчезновение
                    return false; // не производить переход по ссылке
                  }); // end of toggle()
                }); // end of ready()
