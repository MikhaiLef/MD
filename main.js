// ПОКАЗ ВСЕХ УСТРОЙСТВ ПРИ ЗАГРУЗКЕ
window.onload = function() {
    showAllDevices();
};

// ФУНКЦИЯ ПОКАЗА ВСЕХ
function showAllDevices() {
    var container = document.getElementById('deviceListContainer');
    var html = '<table width="100%" border="0" cellpadding="4" cellspacing="0">';
    for (var i = 0; i < allDevices.length; i++) {
        var d = allDevices[i];
        html += '<tr><td style="background:#f6f0e6; border-bottom:1px solid #d0c8b8; padding:6px;">';
        html += '<b>' + d.model + '</b>  <span style="color:#3d3228;">(' + d.brand + ')</span>';
        html += ' &nbsp;&nbsp; <a href="device.html?id=' + d.id + '" style="background:#d6cdbb; padding:2px 14px; border:2px outset #b8ae9c; text-decoration:none; font-size:13px;">Характеристики</a>';
        html += '</td></tr>';
    }
    html += '</table>';
    container.innerHTML = html;
}

// ПОИСК ПО МОДЕЛИ
function searchDevice() {
    var query = document.getElementById('searchInput').value.toLowerCase().trim();
    var container = document.getElementById('deviceListContainer');
    if (query === '') {
        showAllDevices();
        return false;
    }
    var results = [];
    for (var i = 0; i < allDevices.length; i++) {
        var d = allDevices[i];
        if (d.model.toLowerCase().indexOf(query) !== -1) {
            results.push(d);
        }
    }
    var html = '<table width="100%" border="0" cellpadding="4" cellspacing="0">';
    if (results.length === 0) {
        html += '<tr><td><font face="Arial" size="3" color="#7a3a2a">Ничего не найдено по запросу "' + query + '"</font></td></tr>';
    } else {
        for (var j = 0; j < results.length; j++) {
            var r = results[j];
            html += '<tr><td style="background:#f6f0e6; border-bottom:1px solid #d0c8b8; padding:6px;">';
            html += '<b>' + r.model + '</b>  <span style="color:#3d3228;">(' + r.brand + ')</span>';
            html += ' &nbsp;&nbsp; <a href="device.html?id=' + r.id + '" style="background:#d6cdbb; padding:2px 14px; border:2px outset #b8ae9c; text-decoration:none; font-size:13px;">Характеристики</a>';
            html += '</td></tr>';
        }
    }
    html += '</table>';
    container.innerHTML = html;
    return false;
}

// ФИЛЬТР ПО БРЕНДУ
function filterBrand(brand) {
    var container = document.getElementById('deviceListContainer');
    var results = [];
    for (var i = 0; i < allDevices.length; i++) {
        var d = allDevices[i];
        if (d.brand === brand) {
            results.push(d);
        }
    }
    var html = '<table width="100%" border="0" cellpadding="4" cellspacing="0">';
    if (results.length === 0) {
        html += '<tr><td><font face="Arial" size="3" color="#7a3a2a">Нет устройств бренда ' + brand + '</font></td></tr>';
    } else {
        for (var j = 0; j < results.length; j++) {
            var r = results[j];
            html += '<tr><td style="background:#f6f0e6; border-bottom:1px solid #d0c8b8; padding:6px;">';
            html += '<b>' + r.model + '</b>  <span style="color:#3d3228;">(' + r.brand + ')</span>';
            html += ' &nbsp;&nbsp; <a href="device.html?id=' + r.id + '" style="background:#d6cdbb; padding:2px 14px; border:2px outset #b8ae9c; text-decoration:none; font-size:13px;">Характеристики</a>';
            html += '</td></tr>';
        }
    }
    html += '</table>';
    container.innerHTML = html;
}