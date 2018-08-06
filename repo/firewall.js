var firewall_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/fw/firewalls';
var firewall_post_json = {
    "firewall": {
        "status": "PENDING_CREATE",
        "description": "",
        "admin_state_up": true,
        "tenant_id": "45977fa2dbd7482098dd68d0d8970117",
        "firewall_policy_id": "c69933c1-b472-44f9-8226-30dc4ffd454c",
        "id": "3b0ef8f4-82c7-44d4-a4fb-"+"#{INDEX}",
        "name": "firewall"
    }
}

var firewall_put_json = {
        "firewall": {
            "status": "PENDING_CREATE",
            "description": "",
            "admin_state_up": false,
            "tenant_id": "45977fa2dbd7482098dd68d0d8970117",
            "firewall_policy_id": "c69933c1-b472-44f9-8226-30dc4ffd454c",
            "id": "3b0ef8f4-82c7-44d4-a4fb-"+"#{INDEX}",
            "name": "firewall-update"
        }
    
}


exports.firewall_url = firewall_url
exports.firewall_post_json = firewall_post_json
exports.firewall_put_json = firewall_put_json