<div class="profile-edit">
    <div class="headline">
        <h3>Gestionar Usuarios</h3>
    </div>
    <div class="btn-group pull-right">
        <a class="btn btn-info" onclick="bodyModal('div.bodyUser','formUser')" data-toggle="modal" data-target=".modalUser"><i class="fa fa-plus"></i> Crear Nuevo Usuario</a>
    </div>
    <div class="margin-bottom-15"></div>
    <table id="listUsers" class="table table-bordered" style="width: 100% !important;background-color: #ffffff;">
        <thead>
        <tr>
            <th>#</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acciones</th>
        </tr>
        </thead>
    </table>
</div>
<script>
    dataTables('listUsers','{{ route('datatable.viewusers') }}')
</script>