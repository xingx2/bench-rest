var router_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/routers';
var router_post_json = {
    "router": {
        "status": "ACTIVE",
        "external_gateway_info": {
            "network_id": "8ca37218-28ff-41cb-9b10-039601ea7e6b"
        },
        "name": "router1",
        "admin_state_up": true,
        "tenant_id": "9bacb3c5d39d41a79512987f338cf177",
        "id": "8604a0de-7f6b-409a-a47c-"+"#{INDEX}"
    }
}

var router_put_json = {
    "router": {
        "status": "ACTIVE",
        "external_gateway_info": {
            "network_id": "8ca37218-28ff-41cb-9b10-039601ea7e6b"
        },
        "name": "router_update",
        "admin_state_up": true,
        "tenant_id": "9bacb3c5d39d41a79512987f338cf177",
        "id": "8604a0de-7f6b-409a-a47c-"+"#{INDEX}"
    }
}

exports.router_url = router_url
exports.router_post_json = router_post_json
exports.router_put_json = router_put_json