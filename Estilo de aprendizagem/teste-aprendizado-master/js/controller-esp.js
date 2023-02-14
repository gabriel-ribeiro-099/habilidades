$(document).ready(function () {
  //BLOCK RADIOS

  $('input[type="radio"]').on("click", function () {
    for (p = 1; p < 13; p++) {
      for (i = 1; i < 5; i++) {
        if ($(event.target).hasClass("p" + p)) {
          if ($(event.target).hasClass("coluna" + i)) {
            $(".coluna" + i + ".p" + p + ":checked")
              .not(this)
              .attr("checked", false);
          }
        }
      }
    }
  });

  //FRASES - ((Não está sendo utilizada na versão em espanhol))

  /*var frases = [
    "Que a força esteja com você!",
    "Pense como um próton e mantenha-se positivo.",
    "Você só falha quando para de tentar.",
  ];

  function incentivo() {
    var i = parseInt(Math.random() * 3);
    return frases[i];
  }

  document.getElementById("motivacional").innerHTML = incentivo();*/

  //CAIXA DE INFORMACAO - ((( DESABILITADA )))

  $("#info").click(function () {
    $("#modal-container-info").modal({
      show: true,
    });
  });

  // VARIAVEIS

  var EC = 0;
  var OR = 0;
  var CA = 0;
  var EA = 0;

  var divergente = 0;
  var assimilador = 0;
  var convergente = 0;
  var acomodador = 0;
  var resultadosomas = 0;

  var ap1 = 0; //+abstrata ou -concreta
  var ap2 = 0; //+ativa ou -reflexiva

  // VARIAVEIS DE DESCRICAO

  var descricaoConvergente =
    "Aprende mejor pensando y realizando. Le gusta probar ideas, teorías y técnicas nuevas, y comprobar si funcionan en la práctica. Le gusta buscar ideas y ponerlas en práctica inmediatamente, le aburre e impacienta las largas discusiones, discutiendo la misma idea de forma interminable. Son básicamente gente práctica, apegada a la realidad, a la que le gusta tomar decisiones y resolver problemas. Los problemas son un desafío y siempre están buscando una manera mejor de hacer las cosas. Descubre los aspectos positivos de las nuevas ideas y aprovecha la primera oportunidad para probarlas. Le gusta actuar con rapidez y seguridad sobre ideas y proyectos que le atraen. Prefiere aprender en entornos más tranquilos (p. ej., le gusta trabajar solo haciendo tareas técnicas de manera más independiente sin mucha interacción con los demás). No tiene dificultad para experimentar con innovaciones para resolver problemas prácticos.";
  var descricaoAcomodador =
    "Aprende mejor experimentando y realizando, cuando se involucra totalmente y sin prejuicios en las experiencias nuevas. Disfruta el momento presente y se deja llevar por los acontecimientos. Suele ser entusiastas ante lo nuevo y tiende a actuar primero y pensar después en las consecuencias. Llena sus días de actividades y tan pronto disminuye el encanto de una de ellas se lanza a la siguiente. Le aburre ocuparse de planes a largo plazo y consolidar proyectos, le gusta trabajar rodeado de gente, pero siendo el centro de las actividades. Es de mente abierta, no escéptico y entusiasta cuando se enfrenta a nuevas tareas. Tiene la capacidad de sobresalir, acomodarse o adaptarse a circunstancias específicas. Usa más la intuición que la lógica y tiende a arriesgarse y atreverse más. Tiende a valorar las opiniones de los demás por encima de las propias y, por lo tanto, suelen hacer muchas preguntas. Le gusta hacer muchas actividades, es sociable, prefiere trabajar en equipo y se involucra en los asuntos de los demás. El desarrollo deficiente de la capacidad analítica lo vuelve más impulsivo y, a veces, lo percibe como impaciente y apresurado. También tiende a ser centralizador.";
  var descricaoAssimilador =
    "Aprende mejor cuando adapta e integra las observaciones que realiza en teorías complejas y bien fundamentadas lógicamente. Piensa de forma secuencial y paso a paso, integrando hechos dispares en teorías coherentes. Le gusta analizar y sintetizar la información y su sistema	de valores premia la lógica y la racionalidad. Se siente incómodos con los juicios subjetivos, las técnicas de pensamiento lateral y las actividades faltas de lógica clara.";
  var descricaoDivergente =
    "Aprende mejor combinando sensaciones con observaciones. Tiene mucha sensibilidad artística y emocional y tiende a adoptar la postura de un observador que analiza sus experiencias desde muchas perspectivas distintas. Utiliza la creatividad para proponer más de una posible solución. Recoge datos y los analiza detalladamente antes de llegar a una conclusión. Para ellos, lo más importante es esa recogida de datos y su análisis concienzudo, así que procuran posponer las conclusiones todo lo que pueden. Prefiere observar y reflexionar más que actuar. Por lo general, se desempeña bien en situaciones que involucran la generación de ideas, como grupos de trabajo y tormentas de ideas. Tiene un amplio interés cultural y se lleva bien con las personas, ya que les gusta observarlas. Disfruta de autonomía en la búsqueda del conocimiento. Son precavidos y analizan todas las implicaciones de cualquier acción antes de ponerse en movimiento. En las reuniones observa y escucha antes de hablar procurando pasar desapercibido.";

  //RESULTADO

  $("#botao").click(function () {
    //Condicional para obrigar a marcar todos os campos

    if (
      !(
        $("input:radio[name='1opA']").is(":checked") &&
        $("input:radio[name='1opB']").is(":checked") &&
        $("input:radio[name='1opC']").is(":checked") &&
        $("input:radio[name='1opD']").is(":checked") &&
        $("input:radio[name='2opA']").is(":checked") &&
        $("input:radio[name='2opB']").is(":checked") &&
        $("input:radio[name='2opC']").is(":checked") &&
        $("input:radio[name='2opD']").is(":checked") &&
        $("input:radio[name='3opA']").is(":checked") &&
        $("input:radio[name='3opB']").is(":checked") &&
        $("input:radio[name='3opC']").is(":checked") &&
        $("input:radio[name='3opD']").is(":checked") &&
        $("input:radio[name='4opA']").is(":checked") &&
        $("input:radio[name='4opB']").is(":checked") &&
        $("input:radio[name='4opC']").is(":checked") &&
        $("input:radio[name='4opD']").is(":checked") &&
        $("input:radio[name='5opA']").is(":checked") &&
        $("input:radio[name='5opB']").is(":checked") &&
        $("input:radio[name='5opC']").is(":checked") &&
        $("input:radio[name='5opD']").is(":checked") &&
        $("input:radio[name='6opA']").is(":checked") &&
        $("input:radio[name='6opB']").is(":checked") &&
        $("input:radio[name='6opC']").is(":checked") &&
        $("input:radio[name='6opD']").is(":checked") &&
        $("input:radio[name='7opA']").is(":checked") &&
        $("input:radio[name='7opB']").is(":checked") &&
        $("input:radio[name='7opC']").is(":checked") &&
        $("input:radio[name='7opD']").is(":checked") &&
        $("input:radio[name='8opA']").is(":checked") &&
        $("input:radio[name='8opB']").is(":checked") &&
        $("input:radio[name='8opC']").is(":checked") &&
        $("input:radio[name='8opD']").is(":checked") &&
        $("input:radio[name='9opA']").is(":checked") &&
        $("input:radio[name='9opB']").is(":checked") &&
        $("input:radio[name='9opC']").is(":checked") &&
        $("input:radio[name='9opD']").is(":checked") &&
        $("input:radio[name='10opA']").is(":checked") &&
        $("input:radio[name='10opB']").is(":checked") &&
        $("input:radio[name='10opC']").is(":checked") &&
        $("input:radio[name='10opD']").is(":checked") &&
        $("input:radio[name='11opA']").is(":checked") &&
        $("input:radio[name='11opB']").is(":checked") &&
        $("input:radio[name='11opC']").is(":checked") &&
        $("input:radio[name='11opD']").is(":checked") &&
        $("input:radio[name='12opA']").is(":checked") &&
        $("input:radio[name='12opB']").is(":checked") &&
        $("input:radio[name='12opC']").is(":checked") &&
        $("input:radio[name='12opD']").is(":checked")
      )
    ) {
      window.scrollTo(0, 0);
      alert("¡Llenar todos los campos!");
    } else {
      //Abre a popup

      $("#modal-container-resultado").modal({
        show: true,
      });

      //CALCULO EC

      //1A
      for (i = 1; i < 5; i++) {
        if ($("input[name='1opA']:checked").val() == i) {
          EC = EC + i;
        }
      }
      //2C
      for (i = 1; i < 5; i++) {
        if ($("input[name='2opC']:checked").val() == i) {
          EC = EC + i;
        }
      }

      //3D
      for (i = 1; i < 5; i++) {
        if ($("input[name='3opD']:checked").val() == i) {
          EC = EC + i;
        }
      }

      //4A
      for (i = 1; i < 5; i++) {
        if ($("input[name='4opA']:checked").val() == i) {
          EC = EC + i;
        }
      }

      //5A
      for (i = 1; i < 5; i++) {
        if ($("input[name='5opA']:checked").val() == i) {
          EC = EC + i;
        }
      }

      //6C
      for (i = 1; i < 5; i++) {
        if ($("input[name='6opC']:checked").val() == i) {
          EC = EC + i;
        }
      }

      //7B
      for (i = 1; i < 5; i++) {
        if ($("input[name='7opB']:checked").val() == i) {
          EC = EC + i;
        }
      }

      //8D
      for (i = 1; i < 5; i++) {
        if ($("input[name='8opD']:checked").val() == i) {
          EC = EC + i;
        }
      }

      //9B
      for (i = 1; i < 5; i++) {
        if ($("input[name='9opB']:checked").val() == i) {
          EC = EC + i;
        }
      }

      //10B
      for (i = 1; i < 5; i++) {
        if ($("input[name='10opB']:checked").val() == i) {
          EC = EC + i;
        }
      }

      //11A
      for (i = 1; i < 5; i++) {
        if ($("input[name='11opA']:checked").val() == i) {
          EC = EC + i;
        }
      }

      //12B
      for (i = 1; i < 5; i++) {
        if ($("input[name='12opB']:checked").val() == i) {
          EC = EC + i;
        }
      }

      //CALCULO OR

      //1D
      for (i = 1; i < 5; i++) {
        if ($("input[name='1opD']:checked").val() == i) {
          OR = OR + i;
        }
      }

      //2A
      for (i = 1; i < 5; i++) {
        if ($("input[name='2opA']:checked").val() == i) {
          OR = OR + i;
        }
      }

      //3C
      for (i = 1; i < 5; i++) {
        if ($("input[name='3opC']:checked").val() == i) {
          OR = OR + i;
        }
      }

      //4C
      for (i = 1; i < 5; i++) {
        if ($("input[name='4opC']:checked").val() == i) {
          OR = OR + i;
        }
      }
      //5B
      for (i = 1; i < 5; i++) {
        if ($("input[name='5opB']:checked").val() == i) {
          OR = OR + i;
        }
      }

      //6A
      for (i = 1; i < 5; i++) {
        if ($("input[name='6opA']:checked").val() == i) {
          OR = OR + i;
        }
      }

      //7A
      for (i = 1; i < 5; i++) {
        if ($("input[name='7opA']:checked").val() == i) {
          OR = OR + i;
        }
      }

      //8C
      for (i = 1; i < 5; i++) {
        if ($("input[name='8opC']:checked").val() == i) {
          OR = OR + i;
        }
      }

      //9A
      for (i = 1; i < 5; i++) {
        if ($("input[name='9opA']:checked").val() == i) {
          OR = OR + i;
        }
      }

      //10A
      for (i = 1; i < 5; i++) {
        if ($("input[name='10opA']:checked").val() == i) {
          OR = OR + i;
        }
      }

      //11B
      for (i = 1; i < 5; i++) {
        if ($("input[name='11opB']:checked").val() == i) {
          OR = OR + i;
        }
      }

      //12C
      for (i = 1; i < 5; i++) {
        if ($("input[name='12opC']:checked").val() == i) {
          OR = OR + i;
        }
      }

      //CALCULO CA

      //1B
      for (i = 1; i < 5; i++) {
        if ($("input[name='1opB']:checked").val() == i) {
          CA = CA + i;
        }
      }

      //2B
      for (i = 1; i < 5; i++) {
        if ($("input[name='2opB']:checked").val() == i) {
          CA = CA + i;
        }
      }

      //3A
      for (i = 1; i < 5; i++) {
        if ($("input[name='3opB']:checked").val() == i) {
          CA = CA + i;
        }
      }

      //4D
      for (i = 1; i < 5; i++) {
        if ($("input[name='4opD']:checked").val() == i) {
          CA = CA + i;
        }
      }

      //5C
      for (i = 1; i < 5; i++) {
        if ($("input[name='5opC']:checked").val() == i) {
          CA = CA + i;
        }
      }

      //6D
      for (i = 1; i < 5; i++) {
        if ($("input[name='6opD']:checked").val() == i) {
          CA = CA + i;
        }
      }

      //7C
      for (i = 1; i < 5; i++) {
        if ($("input[name='7opC']:checked").val() == i) {
          CA = CA + i;
        }
      }

      //8B
      for (i = 1; i < 5; i++) {
        if ($("input[name='8opB']:checked").val() == i) {
          CA = CA + i;
        }
      }

      //9D
      for (i = 1; i < 5; i++) {
        if ($("input[name='9opD']:checked").val() == i) {
          CA = CA + i;
        }
      }

      //10D
      for (i = 1; i < 5; i++) {
        if ($("input[name='10opD']:checked").val() == i) {
          CA = CA + i;
        }
      }

      //11C
      for (i = 1; i < 5; i++) {
        if ($("input[name='11opC']:checked").val() == i) {
          CA = CA + i;
        }
      }

      //12A
      for (i = 1; i < 5; i++) {
        if ($("input[name='12opA']:checked").val() == i) {
          CA = CA + i;
        }
      }

      //CALCULO EA

      //1C
      for (i = 1; i < 5; i++) {
        if ($("input[name='1opC']:checked").val() == i) {
          EA = EA + i;
        }
      }

      //2C
      for (i = 1; i < 5; i++) {
        if ($("input[name='2opD']:checked").val() == i) {
          EA = EA + i;
        }
      }

      //3B
      for (i = 1; i < 5; i++) {
        if ($("input[name='3opB']:checked").val() == i) {
          EA = EA + i;
        }
      }

      //4B
      for (i = 1; i < 5; i++) {
        if ($("input[name='4opB']:checked").val() == i) {
          EA = EA + i;
        }
      }

      //5D
      for (i = 1; i < 5; i++) {
        if ($("input[name='5opD']:checked").val() == i) {
          EA = EA + i;
        }
      }

      //6B
      for (i = 1; i < 5; i++) {
        if ($("input[name='6opB']:checked").val() == i) {
          EA = EA + i;
        }
      }

      //7D
      for (i = 1; i < 5; i++) {
        if ($("input[name='7opD']:checked").val() == i) {
          EA = EA + i;
        }
      }

      //8A
      for (i = 1; i < 5; i++) {
        if ($("input[name='8opA']:checked").val() == i) {
          EA = EA + i;
        }
      }

      //9C
      for (i = 1; i < 5; i++) {
        if ($("input[name='9opC']:checked").val() == i) {
          EA = EA + i;
        }
      }

      //10C
      for (i = 1; i < 5; i++) {
        if ($("input[name='10opC']:checked").val() == i) {
          EA = EA + i;
        }
      }

      //11D
      for (i = 1; i < 5; i++) {
        if ($("input[name='11opD']:checked").val() == i) {
          EA = EA + i;
        }
      }

      //12D
      for (i = 1; i < 5; i++) {
        if ($("input[name='12opD']:checked").val() == i) {
          EA = EA + i;
        }
      }

      //SOMATORIO DO RESULTADO

      divergente = EC + OR;
      assimilador = OR + CA;
      convergente = CA + EA;
      acomodador = EA + EC;
      resultadosomas = Math.max(
        divergente,
        assimilador,
        convergente,
        acomodador
      );

      //ESTILOS DE APRENDIZAGEM PREDOMINANTES

      ap1 = CA - EC; //+abstrata ou -concreta
      ap2 = EA - OR; //+ativa ou -reflexiva

      //Calcula o estilo

      var estilo = "";

      function descobrirEstilo() {
        if (resultadosomas == divergente) {
          estilo = "DIVERGENTE (REFLEXIVO)";
        }

        if (resultadosomas == assimilador) {
          estilo = "ASIMILADOR (TEÓRICO-ANALÍTICO)";
        }

        if (resultadosomas == convergente) {
          estilo = "CONVERGENTE (PRAGMÁTICO)";
        }

        if (resultadosomas == acomodador) {
          estilo = "ACOMODADOR (ACTIVO)";
        }
      }

      descobrirEstilo();

      //RESULTADOS

      document.getElementById("resultado-final").innerHTML =
        " Su estilo de aprendizaje es " + estilo;
      var forma1 = "Experiencia concreta";
      var forma2 = "Observación reflexiva";
      if (ap1 > 0) {
        forma1 = "Conceptualización abstracta";
      }
      if (ap2 > 0) {
        forma2 = "Experimentación activa";
      }
      document.getElementById("resultado-final2").innerHTML =
        "Sus habilidades más desarrolladas son " + forma1 + " y " + forma2;

      //Resultado por habilidades

      document.getElementById("resultado-EC").innerHTML =
        "Experiencia concreta (" + EC + "):";

      document.getElementById("resultado-OR").innerHTML =
        "Observación reflexiva (" + OR + "):";

      document.getElementById("resultado-CA").innerHTML =
        "Conceptualización abstracta (" + CA + "):";

      document.getElementById("resultado-EA").innerHTML =
        "Experimentación activa (" + EA + "):";

      //Resultado da descricao

      if (estilo == "CONVERGENTE (PRAGMÁTICO)") {
        document.getElementById("resultado-descricao").innerHTML =
          descricaoConvergente;
      }

      if (estilo == "ACOMODADOR (ACTIVO)") {
        document.getElementById("resultado-descricao").innerHTML =
          descricaoAcomodador;
      }
      if (estilo == "ASIMILADOR (TEÓRICO-ANALÍTICO)") {
        document.getElementById("resultado-descricao").innerHTML =
          descricaoAssimilador;
      }
      if (estilo == "DIVERGENTE (REFLEXIVO)") {
        document.getElementById("resultado-descricao").innerHTML =
          descricaoDivergente;
      }
    }

    // GERANDO GRAFICO

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: [
          "Experiencia concreta",
          "Observación reflexiva",
          "Conceptualización abstracta",
          "Experimentación activa: ",
        ],
        datasets: [
          {
            label: "Puntuación",
            data: [EC, OR, CA, EA],
            backgroundColor: ["rgba(99, 132, 255, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scale: {
          ticks: {
            beginAtZero: true,
          },
        },
        legend: {
          display: false,
        },
      },
    });
  });

  //RESETANDO AS VARIAVEIS COM O FECHAMENTO DO MODAL

  $("#modal-container-resultado").on("hidden.bs.modal", function () {
    EC = 0;
    OR = 0;
    CA = 0;
    EA = 0;
  });

  //RESETANDO OS RADIOS E ROLANDO PRO INICIO PARA REFAZER O TESTE

  $("#refazer").click(function () {
    $('input[type="radio"]').not(this).attr("checked", false);
    window.scrollTo(0, 0);
  });
});
