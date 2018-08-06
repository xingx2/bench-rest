var portpairgroup_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/sfc/portpairgroups';
var portpairgroup_post_json = {
    "portpairgroup": {
        "name": "portpair1",
        "port_pairs": [],
        "tenant_id": "4969c491a3c74ee4af974e6d800c62de",
        "id": "4e8e5957-649f-477b-9e5b-"+"#{INDEX}"
    }
}


var portpairgroup_put_json = {
        "portpairgroup": {
            "name": "portpair1",
            "port_pairs": [
                "d11e9190-73d4-11e5-b392-2c27d72acb4c",
                "d11e9190-73d4-11e5-b392-2c27d72acb4d"
            ],
            "tenant_id": "4969c491a3c74ee4af974e6d800c62de",
            "id": "4e8e5957-649f-477b-9e5b-"+"#{INDEX}"
        }
    
}

exports.portpairgroup_url = portpairgroup_url
exports.portpairgroup_post_json = portpairgroup_post_json
exports.portpairgroup_put_json = portpairgroup_put_json