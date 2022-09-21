

        function MostraTexto(el, num) {
            texto = document.getElementById(el).className;
            var salvastilo = texto;
            switch (num) {
                case 1:
                    if (texto == 'texto texto-azul') {
                        document.getElementById('idtexto1').className = 'texto-expandido';
                    } else {
                        document.getElementById('idtexto1').className = 'texto texto-azul';
                    }
                    break;
                case 2:
                    if (texto == 'texto texto-vermelho ') {
                        document.getElementById('idtexto2').className = 'texto-expandido';
                    } else {
                        document.getElementById('idtexto2').className = 'texto texto-vermelho ';
                    }
                    break;
                case 3:
                    if (texto == 'texto  texto-verde') {
                        document.getElementById('idtexto3').className = 'texto-expandido';
                    } else {
                        document.getElementById('idtexto3').className = 'texto  texto-verde';
                    }
                    break;
                case 4:
                    if (texto == 'texto  texto-laranja') {
                        document.getElementById('idtexto4').className = 'texto-expandido';
                    } else {
                        document.getElementById('idtexto4').className = 'texto  texto-laranja';
                    }
                    break;
                case 5:
                    if (texto == 'texto  texto-azul-claro') {
                        document.getElementById('idtexto5').className = 'texto-expandido';
                    } else {
                        document.getElementById('idtexto5').className = 'texto  texto-azul-claro';
                    }
                    break;
                case 6:
                    if (texto == 'texto  texto-verde2') {
                        document.getElementById('idtexto6').className = 'texto-expandido';
                    } else {
                        document.getElementById('idtexto6').className = 'texto  texto-verde2';
                    }
                    break;
                case 7:
                    if (texto == 'texto  texto-vermelho2') {
                        document.getElementById('idtexto7').className = 'texto-expandido';
                    } else {
                        document.getElementById('idtexto7').className = 'texto  texto-vermelho2';
                    }
                    break;
                case 8:
                    if (texto == 'texto  texto-azul-escuro') {
                        document.getElementById('idtexto8').className = 'texto-expandido';
                    } else {
                        document.getElementById('idtexto8').className = 'texto  texto-azul-escuro';
                    }
                    break;
                case 9:
                    if (texto == 'texto  texto-roxo') {
                        document.getElementById('idtexto9').className = 'texto-expandido';
                    } else {
                        document.getElementById('idtexto9').className = 'texto  texto-roxo';
                    }
                    break;
                case 10:
                    if (texto == 'texto  texto-amarelo-queimado') {
                        document.getElementById('idtexto10').className = 'texto-expandido';
                    } else {
                        document.getElementById('idtexto10').className = 'texto  texto-amarelo-queimado';
                    }
                    break;


            }



        }

        function muda() {

            pag1 = document.getElementById('teste1').className;
            pag2 = document.getElementById('teste2').className;
            pag3 = document.getElementById('teste3').className;
            btnmenu = document.getElementById('teste4').className;

            if (pag1 == 'box1') {
                document.getElementById('teste1').className = 'box1A';
            } else {
                document.getElementById('teste1').className = 'box1';
            }

            if (pag2 == 'box2') {
                document.getElementById('teste2').className = 'box2A';
            } else {
                document.getElementById('teste2').className = 'box2';
            }

            if (pag3 == 'box3') {
                document.getElementById('teste3').className = 'box3A';
            } else {
                document.getElementById('teste3').className = 'box3';
            }

            if (btnmenu == 'menu') {
                document.getElementById('teste4').className = 'menuA';
            } else {
                document.getElementById('teste4').className = 'menu';
            }

        }


        $(".texto").click(function () {
            $(this).toggleClass("texto-expandido");
        })


   
