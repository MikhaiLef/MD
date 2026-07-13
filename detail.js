window.onload = function() {
    // получаем параметр id из URL
    var urlParams = new URLSearchParams(window.location.search);
    var id = parseInt(urlParams.get('id'));
    var container = document.getElementById('deviceDetailContainer');

    if (!id) {
        container.innerHTML = '<font face="Arial" size="3" color="#7a3a2a">Ошибка: не указан ID устройства.</font>';
        return;
    }

    var device = null;
    for (var i = 0; i < allDevices.length; i++) {
        if (allDevices[i].id === id) {
            device = allDevices[i];
            break;
        }
    }

    if (!device) {
        container.innerHTML = '<font face="Arial" size="3" color="#7a3a2a">Устройство с ID ' + id + ' не найдено.</font>';
        return;
    }

    var html = '<div class="detail-card">';
    html += '<h2>' + device.model + '</h2>';
    html += '<p><span class="label">Бренд:</span> ' + device.brand.toUpperCase() + '</p>';
    html += '<p><span class="label">Характеристики:</span> ' + device.specs + '</p>';
    html += '<p><span class="label">ID в базе:</span> ' + device.id + '</p>';
    html += '</div>';

    container.innerHTML = html;
};