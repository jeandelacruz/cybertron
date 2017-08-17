<div class="headline">
    <h3>Gestionar Usuarios</h3>
</div>
<table id="listUsers" class="table table-bordered" style="width: 100% !important;">
    <thead>
        <tr>
            <th>#</th>
            <th>Nombres</th>
            <th class="hidden-sm">Apellidos</th>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Acciones</th>
        </tr>
    </thead>
</table>
<script>
    dataTables('listUsers','{{ route('datatable.viewusers') }}')
</script>