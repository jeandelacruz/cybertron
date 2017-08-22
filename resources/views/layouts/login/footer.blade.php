<script src="{!! asset('js/app.js?version='.date('YmdHis'))!!}"></script>
<script src="{!! asset('js/implement.js?version='.date('YmdHis'))!!}"></script>
<script src="{!! asset('js/cybertron.js?version='.date('YmdHis'))!!}"></script>
<script>
    $(function() {
        Unify.init()
        $.backstretch([
            "assets/img/bg/19.jpg",
            "assets/img/bg/18.jpg",
        ], {
            fade: 1000,
            duration: 7000
        })
    })
    formEnter('login-form',true)
</script>