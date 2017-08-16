/**
 * Created by jdelacruz on 8/08/2017.
 */
/* Routes Menu */
$('a.viewUsers').click(function() {
    loadingSystem('system/viewUsers')
    activeDiv('li.list-group-item', '-')
})
/* End Routes Menu */

/* Routes System */
$('a.myProfile').click(function() {
    loadingSystem('profile/myProfile')
    activeDiv('li.list-group-item', '.listmyProfile')
})

$('a.settingsProfile').click(function() {
    loadingSystem('profile/Settings')
    activeDiv('li.list-group-item', '.listsettingsProfile')
})
/* End Routes System */