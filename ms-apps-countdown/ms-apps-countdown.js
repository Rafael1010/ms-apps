/*<section class="counter">
    <div class="counter-content">
        <div class="counter-titles">
            <p class="counter-title">Ofertas da semana</p>
            <p class="counter-subtitle">Super ofertas da semana por tempo limitado</p>
        </div>

        <div class="counter-items">
            <div class="counter-items__item">
                <p class="counter-number" id="day"></p>
                <p class="counter-text">dias</p>
            </div>
            <div class="counter-items__item">
                <p class="counter-number" id="hour"></p>
                <p class="counter-text">horas</p>
            </div>
            <div class="counter-items__item">
                <p class="counter-number" id="minute"></p>
                <p class="counter-text">minutos</p>
            </div>
            <div class="counter-items__item">
                <p class="counter-number" id="second"></p>
                <p class="counter-text">segundos</p>
            </div>
        </div>
    </div>
</section>

<style>
.counter {
    width: 100%;
}
.counter-content {
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    box-sizing: border-box;
}
@media(min-width: 1026px) {
    .counter-content {
        padding: 45px 0;
    }
}
@media(max-width: 1025px) {
    .counter-content {
        flex-direction: column;
        padding: 20px 15px;
    }
}
.counter-titles {
    display: flex;
    align-items: center;
}
@media(max-width: 1025px) {
    .counter-titles {
        flex-direction: column;
    }
}
.counter-title {
    font-weight: 400;
    color: #FFF;
}
@media(min-width: 1026px) {
    .counter-title {
        font-size: 38px;
        line-height: 40px;
    }
}
@media(max-width: 1025px) {
    .counter-title {
        font-size: 30px;
        line-height: 30px;
        text-align: center;
    }
}
.counter-subtitle {
    color: #FFF;
    font-weight: 300;
}
@media(min-width: 1026px) {
    .counter-subtitle {
        font-size: 20px;
        line-height: 24px;
        max-width: 255px;
        border-left: 3px solid #EF7B5E;
        padding-left: 10px;
        margin-left: 10px;
    }
}
@media(max-width: 1025px) {
    .counter-subtitle {
        font-size: 20px;
        line-height: 25px;
        margin: 20px 0 0 0;
        text-align: center;
    }
}
.counter-subtitle__bold {
    font-weight: bold;
}
.counter-items {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 20px;
    flex: 1;
}
@media(max-width: 1025px) {
    .counter-items {
        flex-wrap: wrap;
        justify-content: center;
    }
}
.counter-number {
    font-weight: 500;
    color: #FFF;
    text-align: center;
}
@media(min-width: 1026px) {
    .counter-number {
        font-size: 38px;
        line-height: 38px;
    }
}
@media(max-width: 1025px) {
    .counter-number {
        font-size: 29px;
        line-height: 29px;
    }
}
.counter-text {
    font-weight: 100;
    color: #FFF;
    text-align: center;
}
@media(min-width: 1026px) {
    .counter-text {
        font-size: 16px;
        line-height: 16px;
    }
}
@media(max-width: 1025px) {
    .counter-text {
        font-size: 12px;
        line-height: 12px;
    }
}
</style>
   
<script>
    var target_date = new Date("december 31, 2023").getTime();
    var dias, horas, minutos, segundos;
    setInterval(function () {
        var current_date = new Date().getTime();
        var segundos_f = (target_date - current_date) / 1000;
        
        dias = parseInt(segundos_f / 86400);
        segundos_f = segundos_f % 86400;
        horas = parseInt(segundos_f / 3600);
        segundos_f = segundos_f % 3600;
        
        minutos = parseInt(segundos_f / 60);
        segundos = parseInt(segundos_f % 60);
        document.getElementById('day').innerHTML = dias.toString().replace("-", "");
        document.getElementById('hour').innerHTML = horas.toString().replace("-", "");
        document.getElementById('minute').innerHTML = minutos.toString().replace("-", "");
        document.getElementById('second').innerHTML = segundos.toString().replace("-", "");
    }, 1000);
</script>

<script>
    jQuery(window).on("load", ()=>{
        setTimeout(()=>{
            $(".counter").prependTo(".component-wrapper:eq(4) .row.container");
        },500)
    })
</script> */


class Countdown extends ElementHTML {

    constructor() {
        super()

        const SHADOW = this.attachShadow({"mode": "open"})

        const CSS = `
        <style>
        .counter {
            width: 100%;
        }
        .counter-content {
            width: 100%;
            max-width: 1500px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            box-sizing: border-box;
        }
        @media(min-width: 1026px) {
            .counter-content {
                padding: 45px 0;
            }
        }
        @media(max-width: 1025px) {
            .counter-content {
                flex-direction: column;
                padding: 20px 15px;
            }
        }
        .counter-titles {
            display: flex;
            align-items: center;
        }
        @media(max-width: 1025px) {
            .counter-titles {
                flex-direction: column;
            }
        }
        .counter-title {
            font-weight: 400;
            color: #FFF;
        }
        @media(min-width: 1026px) {
            .counter-title {
                font-size: 38px;
                line-height: 40px;
            }
        }
        @media(max-width: 1025px) {
            .counter-title {
                font-size: 30px;
                line-height: 30px;
                text-align: center;
            }
        }
        .counter-subtitle {
            color: #FFF;
            font-weight: 300;
        }
        @media(min-width: 1026px) {
            .counter-subtitle {
                font-size: 20px;
                line-height: 24px;
                max-width: 255px;
                border-left: 3px solid #EF7B5E;
                padding-left: 10px;
                margin-left: 10px;
            }
        }
        @media(max-width: 1025px) {
            .counter-subtitle {
                font-size: 20px;
                line-height: 25px;
                margin: 20px 0 0 0;
                text-align: center;
            }
        }
        .counter-subtitle__bold {
            font-weight: bold;
        }
        .counter-items {
            display: flex;
            align-items: center;
            justify-content: end;
            gap: 20px;
            flex: 1;
        }
        @media(max-width: 1025px) {
            .counter-items {
                flex-wrap: wrap;
                justify-content: center;
            }
        }
        .counter-number {
            font-weight: 500;
            color: #FFF;
            text-align: center;
        }
        @media(min-width: 1026px) {
            .counter-number {
                font-size: 38px;
                line-height: 38px;
            }
        }
        @media(max-width: 1025px) {
            .counter-number {
                font-size: 29px;
                line-height: 29px;
            }
        }
        .counter-text {
            font-weight: 100;
            color: #FFF;
            text-align: center;
        }
        @media(min-width: 1026px) {
            .counter-text {
                font-size: 16px;
                line-height: 16px;
            }
        }
        @media(max-width: 1025px) {
            .counter-text {
                font-size: 12px;
                line-height: 12px;
            }
        }
        </style>
    `

        const HTML =  document.createElement("section")
        HTML.innerHTML = `
        ${CSS}
        <section class="counter">
            <div class="counter-content">
                <div class="counter-titles">
                    <p class="counter-title">Ofertas da semana</p>
                    <p class="counter-subtitle">Super ofertas da semana por tempo limitado</p>
                </div>

                <div class="counter-items">
                    <div class="counter-items__item">
                        <p class="counter-number" id="day"></p>
                        <p class="counter-text">dias</p>
                    </div>
                    <div class="counter-items__item">
                        <p class="counter-number" id="hour"></p>
                        <p class="counter-text">horas</p>
                    </div>
                    <div class="counter-items__item">
                        <p class="counter-number" id="minute"></p>
                        <p class="counter-text">minutos</p>
                    </div>
                    <div class="counter-items__item">
                        <p class="counter-number" id="second"></p>
                        <p class="counter-text">segundos</p>
                    </div>
                </div>
            </div>
        </section>
    `

    SHADOW.appendChild(HTML)

    }


}

customElements.define("ms-apps-countdown", Countdown)
