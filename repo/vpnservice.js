var vpnservice_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/vpn/vpnservices';
var vpnservice_post_json = {
    "vpnservice": {
        "router_id": "ec8619be-0ba8-4955-8835-3b49ddb76f89",
        "status": "PENDING_CREATE",
        "name": "myservice",
        "admin_state_up": true,
        "subnet_id": "f4fb4528-ed93-467c-a57b-11c7ea9f963e",
        "tenant_id": "ccb81365fe36411a9011e90491fe1330",
        "id": "9faaf49f-dd89-4e39-a8c6-"+"#{INDEX}",
        "description": ""
    }
}

var vpnservice_put_json = {
        "vpnservice": {
            "router_id": "ec8619be-0ba8-4955-8835-3b49ddb76f89",
            "status": "PENDING_CREATE",
            "name": "myservice-update",
            "admin_state_up": true,
            "subnet_id": "f4fb4528-ed93-467c-a57b-11c7ea9f963e",
            "tenant_id": "ccb81365fe36411a9011e90491fe1330",
            "id": "9faaf49f-dd89-4e39-a8c6-"+"#{INDEX}",
            "description": ""
        }
    
}


exports.vpnservice_url = vpnservice_url
exports.vpnservice_post_json = vpnservice_post_json
exports.vpnservice_put_json = vpnservice_put_json