var meteringrule_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/metering/metering-label-rules';
var meteringrule_post_json = {
    "metering_label_rule": {
        "remote_ip_prefix": "10.0.1.0/24",
        "direction": "ingress",
        "metering_label_id": "bc91b832-8465-40a7-a5d8-ba87de442266",
        "id": "00e13b58-b4f2-4579-9c9c-"+"#{INDEX}",
        "excluded": false
    }
}


exports.meteringrule_url = meteringrule_url
exports.meteringrule_post_json = meteringrule_post_json