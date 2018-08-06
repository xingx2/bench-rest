var meteringlabel_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/metering/metering-labels';
var meteringlabel_post_json = {
    "metering_label": {
        "id": "bc91b832-8465-40a7-a5d8-"+"#{INDEX}",
        "tenant_id": "45345b0ee1ea477fac0f541b2cb79cd4",
        "description": "description of label1",
        "name": "label1"
    }
}

exports.meteringlabel_url = meteringlabel_url
exports.meteringlabel_post_json = meteringlabel_post_json