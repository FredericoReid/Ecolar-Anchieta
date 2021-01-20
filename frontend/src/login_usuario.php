<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>EcoCasa - Entre ou cadastre-se</title>
    <link rel="icon" href="./assets/images/iconlogo.svg" />

    <link rel="stylesheet" href="./assets/css/global.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light shadow" id="menu">
        <div class="container">
            <a class="navbar-brand" href="./index.html">
                <img src="./assets/images/logopage.png" width="50%" title="Logo EcoLar">
            </a>
        </div>
    </nav>
    
    <main class="row container align-items-center justify-content-center m-auto" style="height: 89vh;">
        <div class="card border-0 col-lg-5 col-md-8 col-12 py-5">
            <h2 class="text-center text-dark">Entre ou cadastre-se</h2>

            <form action="../../backend/servidor/acesso_login_usuario.php" method="post">
                <input type="email" name="email" class="form-control mt-4" placeholder="E-mail" required />
                <input type="password" name="senha" class="form-control mt-3" placeholder="Senha" required />
                <button type="submit" class="btn btn-custom mt-3 w-100">Entrar</button>

                <a href="./cadastro_usuario.php" class="mt-2">Ainda não possui cadastro? Clique aqui</a>

            </form>
            
        </div>
    </main>

    <script src="./assets/js/validacao_form.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
        crossorigin="anonymous"></script>
</body>

</html>