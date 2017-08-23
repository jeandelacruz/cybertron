<!-- Profile Content -->
<div id="bodyProfile" class="profile-body">
    <!--Service Block v3-->
    <div class="row margin-bottom-10">
        <div class="col-sm-6 sm-margin-bottom-20">
            <div class="service-block-v3 service-block-u">
                <i class="icon-users"></i>
                <span class="service-heading">Nombre Completo</span>
                <span class="textName" v-text="nameComplete"></span>

                <div class="clearfix margin-bottom-20"></div>

                <div class="row margin-bottom-20">
                    <div class="col-xs-6 service-in">
                        <small v-text="typeDocument"></small>
                    </div>
                    <div class="col-xs-6 text-right service-in">
                        <h4 class="counter" v-text="numberDocument"></h4>
                    </div>
                    <div class="col-xs-6 service-in">
                        <small>Cargo</small>
                    </div>
                    <div class="col-xs-6 text-right service-in">
                        <h4 class="tooltips" v-text="UserRole" data-toggle="tooltip" data-placement="bottom" title="" :data-original-title="roleUser"></h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-6">
            <div class="service-block-v3 service-block-sea">
                <i class="icon-present"></i>
                <span class="service-heading">Cumpleaños</span>
                <span class="textName" v-text="dateBirthday"></span>

                <div class="row margin-bottom-20">
                    <div class="col-xs-12 service-in text-center">
                        <div v-if="daysBirthday === 'Happy'">
                            <small>Feliz Cumpleaños</small>
                            <h4 class="textName" v-text="nameComplete"></h4>
                            <h4 class="textName"><span class="fa fa-birthday-cake" style="font-size: medium"></span></h4>
                        </div>
                        <div v-else>
                            <small>Faltan solo :</small>
                            <h4 class="textName"><span class="counter textName" v-text="daysBirthday"></span> dias</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><!--/end row-->
    <!--End Service Block v3-->

    <hr>

    <div class="row margin-bottom-20">
        <!--Profile Post-->
        <div class="col-sm-12">
            <div class="panel panel-profile no-bg">
                <div class="panel-heading panel-headFix overflow-h">
                    <h2 class="panel-title heading-sm pull-left"><i class="fa fa-users"></i>Directorio</h2>
                    <a style="cursor: pointer;" v-on:click="loadUser()"><i class="fa fa-refresh pull-right"></i></a>
                </div>
                <div id="scrollbar" class="panel-body no-padding mCustomScrollbar" data-mcs-theme="minimal-dark">
                    <div class="row">
                        <div v-for="(item, index) in listUser">
                            <div class="col-sm-12">
                            <div class="profile-blog blog-border">
                                <img class="rounded-x" src="/assets/img/avatars/default.jpg" alt="">
                                <div class="overflow-h">
                                    <div class="col-sm-12">
                                        <strong v-text="nameUserList[index]"></strong>
                                    </div>
                                    <div class="col-sm-4">
                                        <i class="fa fa-envelope text-primary"></i> <span> @{{ item.email  }} </span>
                                    </div>
                                    <div class="col-sm-4">
                                        <div v-if="item.users_information === null">
                                            <i class="fa fa-mobile text-primary"></i> <span> - </span>
                                        </div>
                                        <div v-else-if="countphoneMobil[index]">
                                            <i class="fa fa-mobile text-primary"></i> <span> @{{ item.users_information.phone_mobile }} </span>
                                        </div>
                                        <div v-else>
                                            <i class="fa fa-mobile text-primary"></i> <span> - </span>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div v-if="item.users_information === null">
                                            <i class="fa fa-phone text-primary"></i> <span> - </span>
                                        </div>
                                        <div v-else-if="countPhone[index]">
                                            <i class="fa fa-phone text-primary"></i> <span> @{{ item.users_information.phone_home }} </span>
                                        </div>
                                        <div v-else>
                                            <i class="fa fa-phone text-primary"></i> <span> - </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End Profile Post-->
    </div><!--/end row-->
</div>
<!-- End Profile Content -->
<script src="{!! asset('js/vueFront.js?version='.date('YmdHis'))!!}"></script>
<script>
    $(function() {
        $('.tooltips').tooltip()
        Unify.initScrollBar()
    })
</script>