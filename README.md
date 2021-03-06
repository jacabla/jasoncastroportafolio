<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Referencia de la hoja de estilo de Css -->
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="/estilosCSS/titulo.css">
    <link rel="stylesheet" href="/estilosCSS/menu.css">
    <link rel="stylesheet" href="/estilosCSS/sobreMi.css">
    <link rel="stylesheet" href="/estilosCSS/skills&hobbies.css">
    <link rel="stylesheet" href="/estilosCSS/experiencia.css">
    <link rel="stylesheet" href="/estilosCSS/contacto.css">
    <link rel="stylesheet" href="/estilosCSS/menuInteractivo.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- Fonte del Proyecto Raleway -->
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet">
    <title> Jason Castro Blanco</title>
</head>
<body>
    <!-- Sección del Menú  -->
    <div class="tudo">
    <section class="menu">
        <header class="menu__header">
            <img class="icono" src="assets\vector.png">
            <h3 class="menu__title">Jason Castro Blanco</h3>
        </header>
        <nav>
            <ul class="menu__list">
                <li class="menu__list__item"><a href="#sobre-mi">Sobre mi</a></li>
                <li class="menu__list__item"><a href="#skills">Skills</a></li>
                <li class="menu__list__item"><a href="#hobbies">Hobbies</a></li>
                <li class="menu__list__item"><a href="#formacion">Formación</a></li>
                <li class="menu__list__item"><a href="#xp">Proyectos</a></li>
                <li class="menu__list__item"><a href="mailto:castro.jason@gmail.com">castrob.jason@gmail.com</a></li>
                <li class="menu__list__item"><a href="/darkMode/indexDarkMode.html">Dark Mode</a></li>
            </ul>
        </nav>
    </section>

    <!-- Sección del Header/Title/Hero -->
    <section class="title">
        <div class="title__div">
            <img class="title__profile" src="/assets/me.JPG">
            <div class="title__container">
                <h2 class="title__bio">Hola, mi nombre es Jason y soy desarrollador web en formacion!</h2>
                <h3 class="title__subsection">Estoy en proceso de convertirme en desarrollador web (Full stack web developer), cursando la carrera en la Universidad Creativa, con sede en San Jose, Costa Rica. Adicional a esto, actualmente estoy participando del proyecto ONE en Alura Latam, un programa de la compania Oracle.</h3>
                <div class="container">
                    <div class="card">
                        <a class="face face--frontG" href="https://github.com/jacabla" target="_blank"></a>
                        <div class="face face--back">Github</div>
                    </div>
                    <div class="card">
                        <a class="face face--frontL" href="https://www.linkedin.com/in/jason-castro-blanco/" target="_blank"></a>
                        <div class="face face--back">Linkedin</div>
                    </div>
                    <div class="card">
                        <a class="face face--frontI" href="https://www.instagram.com/jasoncastroblanco/" target="_blank"></a>
                        <div class="face face--back">Instagram</div>
                    </div>
                    <div class="card">
                        <a class="face face--frontY" href="https://www.youtube.com/channel/UC67h8QbzqTiu3oHwcDWkU0Q" target="_blank"></a>
                        <div class="face face--back">Youtube</div>
                    </div>
                    <div class="card">
                        <a class="face face--frontT" href="https://twitter.com/Jethro7260" target="_blank"></a>
                        <div class="face face--back">Twitter</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Sección sobre mi -->
    <section class="about" id="sobre-mi">
        <div class="about__container">
            <h3 class="about__title">Sobre mi</h3>
            <p class="about__paragraph"> Nacido en 1987 en un pueblo rural de agricultores y ganaderos en la zona norte de Costa Rica, desde pequenno desarrolle habilidades en la musica, los idiomas, la ensennza y posteriormente me interese profundamente por la tecnologia.</p>
            <p class="about__paragraph">Graduado en turismo, finanzas y ensennaza del Ingles, y apasionado por la programacion, aprender cada dia algo nuevo, y sobre todo, poder cooperar con los demas. Soy aficionado al futbol, me fascina la aviaci[on y soy piloto de drones, me encanta hacer videos y editarlos, toco la guitarra y me encanta viajar. Espero convertirme en  nomada digital.</p>
            <!-- Si quieres, pon tú firma acá! -->
            <img class="firma" src="/assets/firma.jpeg">
        </div>
    </section>

    <!-- Sección de Skills -->
    <section class="skill__and__hobbies">
        <section class="skills" id="skills">
            <h3 class="skills__title">Skills</h3>
                <div class="skills__line">
                    <div class="skills__box">
                        <ul>
                            <li class="skills__img"><img src="assets\htlm.png"></li>
                            <li class="skills__name"> HTML 5</li>
                        </ul>
                    </div>

                    <div class="skills__box">
                        <ul>
                            <li class="skills__img"> <img src="assets\js_icon.png" alt=""></li>
                            <li class="skills__name">Javascript</li>
                        </ul>
                    </div>

                    <div class="skills__box">
                        <ul>
                            <li class="skills__img"> <img src="assets\php_icon.png" alt=""></li>
                            <li class="skills__name">PHP</li>
                        </ul>
                    </div>

                    <div class="skills__box">
                        <ul>
                            <li class="skills__img"><img src="assets\nodejs_icon.png" alt=""></li>
                            <li class="skills__name">Node JS</li>
                        </ul>
                    </div>

                    <div class="skills__box">
                        <ul>
                            <li class="skills__img"> <img src="assets\react_icon.png" alt=""> </li>
                            <li class="skills__name">React</li>
                        </ul>
                    </div>

                    <div class="skills__box">
                        <ul>
                            <li class="skills__img"> <img src="assets\css_icon.png" alt=""> </li>
                            <li class="skills__name">CSS</li>
                        </ul>
                    </div>
            </div>
        </section>

        <!-- Sección de Hobbies -->
        <section class="hobbies" id="hobbies">
            <h3 class="hobbies__title">Hobbies</h3>
                <div class="hobbies__line">
                    <div class="hobbies__box">
                        <ul>
                            <li class="hobbies__img"><img src="assets\skate_icon.png"></li>
                            <li class="hobbies__name"> Patinaje</li>
                        </ul>
                    </div>

                    <div class="hobbies__box">
                        <ul>
                            <li class="hobbies__img"> <img src="assets\guitar_icon.png" alt=""></li>
                            <li class="hobbies__name">Tocar bajo</li>
                        </ul>
                    </div>

                    <div class="hobbies__box">
                        <ul>
                            <li class="hobbies__img"> <img src="assets\headphones_icon.png" alt=""></li>
                            <li class="hobbies__name">Oir música</li>
                        </ul>
                    </div>

                    <div class="hobbies__box">
                        <ul>
                            <li class="hobbies__img"><img src="assets\tv_icon.png" alt=""></li>
                            <li class="hobbies__name">Ver séries</li>
                        </ul>
                    </div>

                    <div class="hobbies__box">
                        <ul>
                            <li class="hobbies__img"> <img src="assets\forkspoon_icon.png" alt=""> </li>
                            <li class="hobbies__name">Cocinar</li>
                        </ul>
                    </div>

                    <div class="hobbies__box">
                        <ul>
                            <li class="hobbies__img"> <img src="assets\camera_icon.png" alt=""> </li>
                            <li class="hobbies__name">Tomar fotos</li>
                        </ul>
                    </div>
            </div>
        </section>
    </section>
        <!-- Sección de Formación académica -->
    <section class="academic" id="formacion">
        <h2 class="academic__title" >Formación académica</h2>
        <div class="academic__courses">
            <div class="academic__courses__box">
                <ul class="academic__courses__list">
                    <!-- Pon el logotipo de la institución de formación -->
                    <a href="https://www.ucreativa.com/" target="_blank"><li class="academic__courses__item__img"><img src="/assets/download.png"></li></a>
                    <li class="academic__courses__item__title"><h4>Full stack web developer</h4></li>
                    <li class="academic__courses__item__subtitle"><p>2021 - actualidad</p></li>
                </ul>
            </div>
            <div class="academic__courses__box">
                <ul class="academic__courses__list">
                    <!--Pon el logotipo de la institución de formación -->
                    <a href="https://www.aluracursos.com/" target="_blank"><li class="academic__courses__item__img"><img src="assets\alura_logo.png"></li></a>
                    <li class="academic__courses__item__title"><h4>Front end developer</h4></li>
                    <li class="academic__courses__item__subtitle"><p>2022 - Oracle ONE next education</p></li>
                </ul>
            </div>
            <div class="academic__courses__box">
                <ul class="academic__courses__list">
                    <!-- Pon el logotipo de la institución de formación -->
                    <a href="https://ucatolica.ac.cr/" target="_blank"><li class="academic__courses__item__imgCatolica"><img src="/assets/catolica.png"></li></a>
                    <li class="academic__courses__item__title"><h4>English teacher</h4></li>
                    <li class="academic__courses__item__subtitle"><p>Bachelor degree - 2021</p></li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Sección de Experiencia Profesional/Proyectos-->
    <section class="experience" id="xp">
        <h2 class="experience__section__title" >Experiencia Profesional</h2>
        <div class="experiencie__box1">
            <!-- Pon el logotipo/captura de pantalla de tu proyecto -->
            <img class="experience__img" src="/assets/encriptadorTexto.jpeg">
            <div class="experience__info">
                <h2 class="experience__title">Encriptador de texto</h2>
                <h3 class="experience__text">Challenge Alura Codificador </h3>
                    <div class="experience__description">
                        <!-- Pon el enlace del proyecto en Github o GithubPages -->
                            <span class="experience__repo"><a href="https://github.com/jacabla/jacabla.github.io"><button class="experiencia__botao--repo">Repositório</button></a></span>
                            <span class="experience__demo"><a href=""><button class="experience__botao--demo">Ver demo</button></a></span>
                    </div>
            </div>
        </div>  

        <div class="experiencie__box">
            <!-- Pon el logotipo/captura de pantalla de tu proyecto -->
            <img class="experience__img" src="assets/juegoAhorcado.png">
            <div class="experience__info2">
                <h2 class="experience__title">Juego creado con HTML y JavaScript</h2>
                <h3 class="experience__text">Challenge Oracle </h3>
                    <div class="experience__description">
                        <!-- Pon el enlace del proyecto en Github o GithubPages -->
                            <span class="experience__repo"><a href="https://github.com/alura-challenges/challenge-one-juego-ahorcado"><button class="experiencia__botao--repo">Repositório</button></a></span>
                            <span class="experience__demo"><a href=""><button class="experience__botao--demo">Ver demo</button></a></span>
                    </div>
            </div>
        </div>  

        <div class="experiencie__box1">
            <!-- Pon el logotipo/captura de pantalla de tu proyecto -->
            <img class="experience__img" src="/assets/barberia.jpeg">
            <div class="experience__info">
                <h2 class="experience__title">Barberia Alura</h2>
                <h3 class="experience__text">Curso HTML y CSS Oracle </h3>
                    <div class="experience__description">
                            <!-- Pon el enlace del proyecto en Github o GithubPages -->
                            <span class="experience__repo"><a href="https://github.com/alura-challenges/challenge-one-encriptador-latam"><button class="experiencia__botao--repo">Repositório</button></a></span>
                            <span class="experience__demo"><a href=""><button class="experience__botao--demo">Ver demo</button></a></span>
                    </div>
            </div>
        </div>  

        <!-- Sección de Contacto -->
        <section class="formcontato" id="contacto">
            <div  class="formcontato__contacto">
                <div class="formcontato--esquerda">
                    <img class="formcontato__img" src="/assets/contact-me.jpeg">
                    <a href="https://wa.me/50688907260?text=Hola%20quiero%20contactar%20contigo%20Jason" target="_blank"><img class="formcontato__whatsapp" src="/assets/whatsapp.jpeg" alt=""></a>
                </div>
                <div class="formcontato__text">
                    <h2 class="formcontato__title">Contacto</h2>
                    <h3 class="formcontato__subtext">¿Quieres contactarme?</h3>
                    <h3 class="formcontato__subtext">Complete el siguiente formulario y me pondré en contacto con usted lo antes posible. </h3>
                    <form class="formcontato__form" name="form">
                        <input class="formcontato__input" type="text" name="nombre" placeholder="Nombre" id="contacto">
                        <input class="formcontato__input" type="email" name="email" placeholder="E-mail" id="contacto">
                        <input class="formcontato__input" type="text" name="asunto" placeholder="Asunto" id="contacto">
                        <textarea class="formcontato__textarea" rows="7" cols="40" name="mensaje" placeholder="Mensaje" id="contacto"></textarea>
                        <div class="formcontato__container">
                            <input type="button" class="formcontato__botao" value="Enviar mensaje" onclick="validarDatos()">
                            <p class="formcontato__text__mensaje"id="formcontato__text__error"></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <!-- Sección de Footer -->
        <section class="footer">
            <div class="footer__rodape">
                <p>Desarrollado por &copy;Jason Castro Blanco</p>
                <p>2022</p>
            </div>
        </section>
    </div>
 <!-- Script del documento JavaScript -->
<script src="validacion.js"></script>
</body>
</html>
