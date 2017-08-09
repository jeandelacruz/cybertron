<div class="footer-v1">
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p>
                        <?= date('Y') ?> &copy; Todos los derechos Reservados.
                    </p>
                </div>

                <!-- Social Links -->
                <div class="col-md-6">
                    <ul class="footer-socials list-inline">
                        <li>
                            <a href="#" class="tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sitema CP Beta">
                                <i class="fa fa-adn"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- End Social Links -->
            </div>
        </div>
    </div><!--/copyright-->
</div>
@include('layout.recursos.modals.modals')
<script src="{!! asset('js/app.js?version='.date('YmdHis'))!!}"></script>
<script src="{!! asset('js/node_modules.js?version='.date('YmdHis'))!!}"></script>
<script src="{!! asset('js/implement.js?version='.date('YmdHis'))!!}"></script>
<script src="{!! asset('js/extras.js?version='.date('YmdHis'))!!}"></script>
<script src="{!! asset('js/cybertron.js?version='.date('YmdHis'))!!}"></script>
<script src="{!! asset('js/routesCybertron.js?version='.date('YmdHis'))!!}"></script>
<script>
    $(document).ready(function() {
        Unify.init()
        Datepicker.initDatepicker()
        loadingCss()
    })
</script>